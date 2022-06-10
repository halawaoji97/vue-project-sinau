<template>
  <div class="position-fixed w-50 top-50">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="onCancel">
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="onConfirm">
            Save changes
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
      emit('onCancel');
    };

    const onConfirm = () => {
      emit('onConfirm');
    };
    return { onCancel, onConfirm };
  },
});
</script>
<style lang=""></style>
