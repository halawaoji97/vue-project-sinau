<template>
  <div class="position-fixed modal-dialog-container shadow-lg">
    <div class="modal-dialog-content">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="onCancel"
          ></button>
        </div>
        <div class="modal-body">Apakah anda yakin ingin menghapus?</div>
        <div class="modal-footer d-flex justify-content-between">
          <button type="button" class="btn btn-secondary" @click="onCancel">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" @click="onConfirm">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup(props, { emit }) {
    const onCancel = () => {
      emit('on-cancel');
    };

    const onConfirm = () => {
      emit('on-confirm');
    };
    return { onCancel, onConfirm };
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
  width: 50%;
}

.btn-close {
  margin-left: 0.5rem;
}
</style>
