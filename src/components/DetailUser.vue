<template>
  <DefaultPage class="my-5">
    <div class="card text-left">
      <div class="card-body">
        <div class="item">
          <span class="">Name</span>
          <span class="">: {{ user.name }}</span>
        </div>
        <div class="item">
          <span class="">Email</span>
          <span class="">: {{ user.email }}</span>
        </div>
        <div class="item">
          <span class="">Gender</span>
          <span class="">: {{ user.gender }}</span>
        </div>
        <div class="item">
          <span class="">Status</span>
          <span class="">: {{ user.status }}</span>
        </div>
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
    <Transition name="fade">
      <CreateEditUserPost v-if="displayModalForm" />
    </Transition>
  </DefaultPage>
</template>

<script>
import {
  defineComponent,
  onMounted,
  computed,
  ref,
  reactive,
  Transition,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { app } from '@/config';
import Table from '@/components/Table.vue';
import TableRowPost from '@/components/TableRowPost.vue';
import CreateEditUserPost from '@/components/CreateEditUserPost.vue';
import DefaultPage from '@/components/DefaultPage.vue';

export default defineComponent({
  components: {
    TableRowPost,
    Table,
    CreateEditUserPost,
    Transition,
    DefaultPage,
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

<style>
.item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  text-align: left;
  text-transform: uppercase;
}
</style>
