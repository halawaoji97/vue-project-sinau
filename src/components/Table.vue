<template>
  <div>
    <table class="table table-hover table-responsive table-bordered">
      <thead>
        <tr class="table-secondary">
          <th scope="col" v-for="(field, index) in fields" :key="index">
            {{ field.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <slot name="items" />
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="css"></style>
