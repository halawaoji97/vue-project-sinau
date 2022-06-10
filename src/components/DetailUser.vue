<template>
  <div class="my-5">
    <div class="card text-left">
      <div
        class="card-body d-flex justify-content-between flex-column align-items-start"
      >
        <h1 class="card-title text-uppercase fs-1">{{ user.name }}</h1>
        <span>{{ user.email }}</span>
        <span>{{ user.gender }}</span>
        <span class="badge bg-primary my-2">{{ user.status }}</span>
      </div>
    </div>
    <div class="d-flex justify-content-between mt-5">
      <h1 class="text-start h2 text-uppercase">post Pengguna</h1>
      <button
        type="button"
        class="btn btn-primary btn-lg"
        @click="addPost(user.id)"
      >
        Buat Post
      </button>
      <CreateEditUserPost v-if="displayModalForm" />
    </div>
    <div class="w-100 text-left">
      <Table class="border my-3" :fields="fields">
        <template #items>
          <TableRowPost v-if="userPost" :item="userPost" />
          <div v-else>
            <p class="text-center my-5">Tidak ada post</p>
          </div>
        </template>
      </Table>
    </div>
    <router-link to="/" class="btn btn-primary w-25">Back</router-link>
  </div>
</template>

<script>
import { defineComponent, onMounted, computed, ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { app } from '@/config';
import Table from '@/components/Table.vue';
import TableRowPost from '@/components/TableRowPost.vue';
import CreateEditUserPost from '@/components/CreateEditUserPost.vue';

export default defineComponent({
  components: {
    TableRowPost,
    Table,
    CreateEditUserPost,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const paramsId = route.params.id;

    const initialState = {
      title: '',
      body: '',
    };

    const params = reactive({ ...initialState });

    const displayModalForm = ref(false);

    const fields = computed(() => app.users.fieldsPost);

    const user = computed(() => store.getters['user/user']);
    const posts = computed(() => store.getters['user/userPosts']);
    const userPost = computed(() =>
      posts.value.find((post) => post.user_id === parseInt(paramsId)),
    );

    const addPost = (id) => {
      router.push({
        path: 'create-user-post',
        name: 'CreateUserPost',
        params: {
          id,
        },
      });
      displayModalForm.value = true;
    };

    onMounted(() => {
      store.dispatch('user/getUser', paramsId);
    });

    return {
      router,
      addPost,
      displayModalForm,
      user,
      userPost,
      fields,
      params,
    };
  },
});
</script>
