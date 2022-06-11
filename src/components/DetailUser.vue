<template>
  <div class="my-5">
    <div class="card w-75 text-left">
      <div class="card-body">
        <!-- <h1 class="card-title text-uppercase fs-1">{{ $route.params.name }}</h1> -->
        <!-- <span>{{ $route.params.email }}</span> -->
        <!-- <span>{{ $route.params.gender }}</span> -->
        <!-- <span class="badge bg-primary my-2">{{ $route.params.status }}</span> -->
        <div class="item">
          <span class="">Name</span>
          <span class="">: {{ $route.params.name }}</span>
        </div>
        <div class="item">
          <span class="">Email</span>
          <span class="">: {{ $route.params.email }}</span>
        </div>
        <div class="item">
          <span class="">Gender</span>
          <span class="">: {{ $route.params.gender }}</span>
        </div>
        <div class="item">
          <span class="">Status</span>
          <span class="">: {{ $route.params.status }}</span>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between mt-5">
      <h1 class="text-start h2 text-uppercase">post Pengguna</h1>
      <button
        @click="showModalForm"
        type="button"
        class="btn btn-primary btn-lg"
      >
        Buat Post
      </button>
      <CreateEditUserPost
        v-if="displayModalForm"
        :userDataPost="dataPost"
        :modal-title="modalTitle"
        @save-user-data="saveUserPost"
        @close-modal-event="closeModalForm"
      />
    </div>
    <div class="w-100 text-left" v-if="post !== 0">
      <Table class="border my-3" :fields="fields">
        <template #items>
          <TableRowPost :item="post" />
        </template>
      </Table>
    </div>
    <router-link to="/" class="btn btn-primary w-25">Back</router-link>
  </div>
</template>
<script>
import { addUserPost, getAllPosts, remove } from '../utils/http-api';
import Table from './Table.vue';
import TableRowPost from './TableRowPost.vue';
import CreateEditUserPost from './CreateEditUserPost.vue';
export default {
  components: {
    Table,
    TableRowPost,
    CreateEditUserPost,
  },
  name: 'View',
  props: {
    item: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      post: {},
      dataPost: {
        title: '',
        body: '',
      },
      fields: [
        {
          name: 'no',
          label: 'NO',
        },
        {
          name: 'title',
          label: 'TITLE',
        },
        {
          name: 'body',
          label: 'BODY',
        },
        {
          name: 'action',
          label: 'ACTION',
        },
      ],
      modalTitle: 'Please fill the form below',
      displayModalForm: false,
    };
  },

  methods: {
    getPost() {
      getAllPosts()
        .then((response) => {
          this.post = response.data.find(
            (post) => post.user_id == this.$route.params.id,
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showModalForm() {
      this.displayModalForm = true;
    },

    closeModalForm() {
      this.displayModalForm = false;
    },

    async saveUserPost() {
      try {
        await addUserPost(
          '/users/' + this.$route.params.id + '/posts',
          this.dataPost,
        );
        this.getPost();
        this.closeModal();
      } catch (error) {
        console.log(error);
      }
    },

    async remove() {
      try {
        await remove('/users/' + this.item.id);
        location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getPost();
  },
};
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
