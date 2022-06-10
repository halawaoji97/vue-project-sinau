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
  </tr>
</template>
<script>
import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
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

    const remove = (id) => {
      store.dispatch('user/removeUser', id).then(() => {
        store.dispatch('user/getUsers', {
          page: page.value,
        });
      });
    };

    return {
      view,
      editUser,
      remove,
    };
  },
});
</script>
