<template>
  <tr>
    <td>1</td>
    <td>{{ item.title }}</td>
    <td>{{ item.body }}</td>
    <td class="d-flex justify-content-evenly">
      <a class="btn btn-danger" @click="removeUserPostHandler">Delete</a>
    </td>
  </tr>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const removeUserPostHandler = () => {
      store.dispatch('user/removeUserPost', props.item.id).then(() => {
        store.dispatch('user/getAllPosts');
      });
    };
    return { removeUserPostHandler };
  },
});
</script>
<style lang=""></style>
