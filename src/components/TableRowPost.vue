<template>
  <tr>
    <td>1</td>
    <td>{{ item.title }}</td>
    <td>{{ item.body }}</td>
    <td class="d-flex justify-content-evenly">
      <a class="btn btn-danger" @click="remove(item.id)">Delete</a>
    </td>
    <Transition name="fade" appear>
      <ModalConfirm
        v-if="showModalConfirm"
        @on-cancel="onCancel"
        @on-confirm="onConfirm"
      />
    </Transition>
  </tr>
</template>

<script>
import { defineComponent, ref, Transition } from 'vue';
import { useStore } from 'vuex';
import ModalConfirm from './ModalConfirm.vue';
export default defineComponent({
  components: {
    ModalConfirm,
    Transition,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    const showModalConfirm = ref(false);
    const selectedId = ref(null);

    const onCancel = () => {
      showModalConfirm.value = false;
    };

    const remove = (id) => {
      showModalConfirm.value = true;
      selectedId.value = id;
    };

    const onConfirm = () => {
      store.dispatch('user/removeUserPost', selectedId.value).then(() => {
        store.dispatch('user/getAllPosts');
      });
      showModalConfirm.value = false;
    };

    return { onCancel, remove, onConfirm, showModalConfirm };
  },
});
</script>
<style lang=""></style>
