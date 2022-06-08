<template>
  <div id="form-modal" class="modal-dialog-container">
    <div class="modal-dialog-content">
      <div class="modal-dialog-header">
        <h4>{{ modalTitle }}</h4>
      </div>
      <div class="modal-dialog-body">
        <form @submit.prevent="saveUser">
          <div class="mb-3 d-flex flex-column align-items-start">
            <label for="title" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              name="title"
              aria-describedby="title"
              v-model="post.title"
              required
            />
          </div>
          <div class="mb-3 d-flex flex-column align-items-start">
            <label for="body" class="form-label">Description</label>
            <input
              type="text"
              class="form-control"
              name="body"
              id="body"
              aria-describedby="body"
              v-model="post.body"
              required
            />
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
export default {
  name: 'CreateEditUserPost',
  props: {
    modalTitle: {
      type: String,
      required: true,
    },
    userDataPost: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      post: this.userDataPost,
    };
  },

  methods: {
    saveUser() {
      this.$emit('save-user-data', this.post);
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
