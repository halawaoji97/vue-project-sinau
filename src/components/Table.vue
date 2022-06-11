<template>
  <transition name="fade" mode="out-in">
    <div class="">
      <table class="table table-hover table-responsive table-bordered">
        <thead>
          <tr class="table-secondary">
            <th
              scope="col "
              class="fs-6 text-uppercase text-center"
              v-for="(field, index) in fields"
              :key="index"
            >
              {{ field.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <slot name="items" :items="items" />
        </tbody>
      </table>
    </div>
  </transition>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    fields: {
      type: Array,
      required: true,
    },
    paging: {
      type: Object,
      default: () => ({}),
    },
    items: {
      type: Array,
      default: () => [],
    },
    numberItem: {
      type: Number,
      default: 1,
    },
  },

  setup() {
    const params = {
      page: 1,
      per_page: 50,
      sort: '',
      sort_by: '',
    };
    return {
      params,
    };
  },
});
</script>
<style lang="css"></style>
