<template>
  <div class="home container my-5">
    <div class="d-flex justify-content-between">
      <h1 class="text-start h2">Data Pengguna</h1>
      <button
        @click="showModalForm"
        type="button"
        class="btn btn-primary btn-lg"
      >
        Tambah Data
      </button>
      <CreateEditUser
        v-if="displayModalForm"
        :userData="user"
        :modal-title="modalTitle"
        @save-user-data="saveUser"
        @close-modal-event="closeModalForm"
      />
    </div>
    <Table class="border my-3" :fields="fields">
      <template #items>
        <TableRow
          v-for="(item, index) in users"
          :item="item"
          :key="index"
          :index="index"
          @edit="handleEdit"
          @remove="handleRemove"
        />
      </template>
    </Table>
  </div>
</template>

<script>
import Table from '@/components/Table.vue';
import TableRow from '../components/TableRow.vue';
import CreateEditUser from '../components/CreateEditUser.vue';
import { post, getUsers } from '../utils/http-api';

export default {
  name: 'Home',
  components: {
    Table,
    TableRow,
    CreateEditUser,
  },
  data() {
    return {
      users: [],
      user: {
        name: '',
        email: '',
        gender: '',
        status: '',
      },
      displayModalForm: false,
      modalTitle: 'Please fill the form below',
      fields: [
        {
          name: 'no',
          label: 'NO',
        },
        {
          name: 'name',
          label: 'NAME',
        },
        {
          name: 'email',
          label: 'EMAIL',
        },
        {
          name: 'gender',
          label: 'GENDER',
        },
        {
          name: 'status',
          label: 'STATUS',
        },
        {
          name: 'action',
          label: 'ACTION',
        },
      ],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await getUsers();
        this.users = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async saveUser() {
      try {
        await post('/users', this.user);
        this.getData();
        this.closeModal();
      } catch (error) {
        console.log(error);
      }
    },
    handleView(item) {
      this.$router.push({
        name: 'View',
        params: {
          id: item.id,
        },
      });
    },
    showModalForm() {
      this.displayModalForm = true;
    },

    closeModalForm() {
      this.displayModalForm = false;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
