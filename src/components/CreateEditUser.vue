<template>
  <div id="form-modal" class="modal-dialog-container">
    <div class="modal-dialog-content">
      <div class="modal-dialog-header">
        <h4>{{ modalTitle }}</h4>
      </div>
      <div class="modal-dialog-body">
        <form @submit.prevent="saveUser">
          <div class="mb-3 d-flex flex-column align-items-start">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="name"
              v-model="user.name"
              required
            />
          </div>
          <div class="mb-3 d-flex flex-column align-items-start">
            <label for="email" class="form-label">Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="email"
              v-model="user.email"
              required
            />
          </div>
          <div class="mb-3 d-flex flex-column align-items-start">
            <label for="gender" class="form-label">Gender</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="male"
                v-model="user.gender"
                value="male"
                required
              />
              <label class="form-check-label" for="male"> Male </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="female"
                v-model="user.gender"
                value="female"
                required
              />
              <label class="form-check-label" for="female"> Female </label>
            </div>
          </div>
          <div class="mb-3 d-flex flex-column align-items-start">
            <label for="status" class="form-label">Status</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="status"
                id="active"
                v-model="user.status"
                value="active"
                required
              />
              <label class="form-check-label" for="active">Active</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="status"
                id="inActive"
                v-model="user.status"
                value="inactive"
                required
              />
              <label class="form-check-label" for="inActive">Inactive</label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Close
            </button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { getUsers } from '../utils/http-api';
export default {
  name: 'CreateEditUser',
  props: {
    modalTitle: {
      type: String,
      required: true,
    },
    userData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      active: false,
      user: this.userData,
    };
  },

  methods: {
    async getData() {
      try {
        await getUsers();
      } catch (error) {
        console.log(error);
      }
    },
    saveUser() {
      this.$emit('save-user-data', this.user);
      this.closeModal();
    },
    closeModal() {
      this.$emit('close-modal-event');
    },
  },
};
</script>
<style scoped>
.modal-dialog-container {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-dialog-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 0.3rem;
  width: 30%;
}

.btn-close {
  margin-left: 0.5rem;
}
</style>
