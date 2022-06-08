<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.email }}</td>
    <td>{{ item.gender }}</td>
    <td>
      {{ item.status }}
    </td>
    <td class="d-flex justify-content-evenly">
      <button class="btn btn-info" @click="view">View</button>
      <button class="btn btn-warning" @click="showAddModal">Update</button>
      <a class="btn btn-danger" @click="remove">Delete</a>
    </td>
    <CreateEditUser
      v-if="displayModalForm"
      :userData="user"
      :modal-title="modalTitle"
      @save-user-data="saveUser"
      @close-modal-event="closeModal"
    />
  </tr>
</template>
<script>
import CreateEditUser from './CreateEditUser.vue';
import { update, remove } from '../utils/http-api';
export default {
  components: {
    CreateEditUser,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      active: false,
      user: {
        id: this.item.id,
        name: this.item.name,
        email: this.item.email,
        gender: this.item.gender,
        status: this.item.status,
      },
      modalTitle: 'Please fill the form below',
      displayModalForm: false,
    };
  },

  methods: {
    view() {
      this.$router.push({
        name: 'View',
        params: {
          id: this.item.id,
          name: this.item.name,
          email: this.item.email,
          gender: this.item.gender,
          status: this.item.status,
        },
      });
    },

    showAddModal() {
      this.displayModalForm = true;
    },

    closeModal() {
      this.displayModalForm = false;
    },

    saveUser() {
      update(`/users/${this.user.id}`, this.user)
        .then(() => location.reload())
        .catch((error) => {
          console.log(error);
        });
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
};
</script>
<style lang=""></style>
