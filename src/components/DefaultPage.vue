<template>
  <div
    :class="
      isOpenSidebar
        ? 'container default-page shadow-lg bg-gray rounded mt-5 py-4 sizing'
        : 'container default-page shadow-lg bg-gray rounded mt-5 py-4 '
    "
  >
    <div class="row">
      <div class="col-12">
        <slot name="title" />
        <slot name="content" />
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    // Transition,
  },
  props: {
    isOpenSidebar: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.default-page {
  transform: translateX(0);
  width: 100%;
  transition: all 0.3s ease-in-out;
}
.sizing {
  transform: translateX(300px);
}
</style>
