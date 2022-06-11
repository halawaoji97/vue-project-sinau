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
      <button class="btn btn-info" @click="view(item.id)">View</button>
      <button class="btn btn-warning" @click="editUser">Update</button>
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
import { computed, defineComponent, ref, Transition } from 'vue';
import { useRouter } from 'vue-router';
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
    index: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const router = useRouter();
    const store = useStore();

    const showModalConfirm = ref(false);
    const selectedId = ref(null);

    const page = computed(
      () => store.getters['user/usersPaging']['x-pagination-page'] || 1,
    );

    const view = (id) => {
      router.push(`/view/${id}`);
    };

    const editUser = () => {
      router.push({
        name: 'Edit',
        params: {
          id: props.item.id,
          name: props.item.name,
          email: props.item.email,
          gender: props.item.gender,
          status: props.item.status,
        },
      });
    };

    const onCancel = () => {
      showModalConfirm.value = false;
    };

    const onConfirm = () => {
      store.dispatch('user/removeUser', selectedId.value).then(() => {
        store.dispatch('user/getUsers', {
          page: page.value,
        });
      });
      showModalConfirm.value = false;
    };

    const remove = (id) => {
      showModalConfirm.value = true;
      selectedId.value = id;
    };

    return {
      view,
      editUser,
      remove,
      showModalConfirm,
      onCancel,
      onConfirm,
    };
  },
});
</script>
