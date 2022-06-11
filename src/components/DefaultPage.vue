<template>
  <Transition name="fade">
    <div class="container shadow-lg p-3 mb-5 bg-gray rounded mt-5">
      <div class="row">
        <div class="col-12">
          <slot name="title" />
          <slot name="content" />
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import { defineComponent, Transition } from 'vue';
export default defineComponent({
  components: {
    Transition,
  },
});
</script>
