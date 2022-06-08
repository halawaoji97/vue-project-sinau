<template>
  <tr>
    <td>1</td>
    <td>{{ item.title }}</td>
    <td>{{ item.body }}</td>
    <td class="d-flex justify-content-evenly">
      <a class="btn btn-danger" @click="remove">Delete</a>
    </td>
  </tr>
</template>
<script>
import { removeUserPost } from '../utils/http-api';
export default {
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
      modalTitle: 'Please fill the form below',
      displayModalForm: false,
    };
  },

  methods: {
    async remove() {
      try {
        await removeUserPost('/posts/' + this.item.id);
        location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang=""></style>
