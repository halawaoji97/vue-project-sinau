<template>
  <div id="form-modal" class="modal-dialog-container">
    <div class="modal-dialog-content">
      <div class="modal-dialog-header">
        <h4 class="text-center text-uppercase">Tambah Post</h4>
      </div>
      <div class="modal-dialog-body">
        <form @submit.prevent="onConfirm">
          <div class="mb-3 d-flex flex-column align-items-start">
            <label for="title" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              name="title"
              aria-describedby="title"
              v-model="params.title"
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
              v-model="params.body"
              required
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="onCancel">
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
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    initialState: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const store = useStore();

    const params = computed(() => {
      return {
        ...props.initialState,
      };
    });

    const onCancel = () => {
      emit('on-cancel');
    };

    const onConfirm = () => {
      emit('on-confirm', params.value);
    };

    return {
      store,
      params,
      onCancel,
      onConfirm,
    };
  },
});
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
