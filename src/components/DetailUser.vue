<template>
  <DefaultPage class="my-5 shadow-lg">
    <div class="card text-left shadow-lg w-75">
      <div class="card-body">
        <div class="item">
          <span class="fw-bold text-secondary">Name</span>
          <span class="">: {{ user.name }}</span>
        </div>
        <div class="item">
          <span class="fw-bold text-secondary">Email</span>
          <span class="">: {{ user.email }}</span>
        </div>
        <div class="item">
          <span class="fw-bold text-secondary">Gender</span>
          <span class="">: {{ user.gender }}</span>
        </div>
        <div class="item">
          <span class="fw-bold text-secondary">Status</span>
          <span class="">: {{ user.status }}</span>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between mt-5">
      <h1 class="text-start h3 text-uppercase">post Pengguna</h1>
      <button type="button" class="btn btn-primary btn-lg" @click="addPost">
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
    <CreateEditUserPost
      v-if="displayModalForm"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      :params="params"
    />
  </DefaultPage>
</template>

<script>
import { defineComponent, onMounted, computed, ref, reactive } from 'vue';
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
    const selectedId = ref(null);

    const fields = computed(() => app.users.fieldsPost);

    const user = computed(() => store.getters['user/user']);
    const posts = computed(() => store.getters['user/userPosts']);
    const userPost = computed(() =>
      posts.value.find((post) => post.user_id === parseInt(paramsId)),
    );

    const onCancel = () => {
      displayModalForm.value = false;
    };

    const onConfirm = (data) => {
      store.dispatch('user/addUserPost', {
        id: parseInt(paramsId),
        post: data,
      });
      store.dispatch('user/getAllPosts');
      store.dispatch('user/getUserPost', paramsId);
      displayModalForm.value = false;
    };

    const addPost = () => {
      displayModalForm.value = true;
      selectedId.value = paramsId;
      store.dispatch('user/getUserPost', paramsId);
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
      onCancel,
      onConfirm,
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
