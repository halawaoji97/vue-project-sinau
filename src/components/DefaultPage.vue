<template>
  <div class="container shadow-lg p-3 mb-5 bg-gray rounded mt-5">
    <transition name="fade" mode="out-in">
      <div class="row">
        <div class="col-12">
          <slot name="title" />
          <slot name="content" />
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { defineComponent, Transition } from 'vue';
export default defineComponent({
  components: {
    Transition,
  },
});
</script>
