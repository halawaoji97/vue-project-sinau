<template>
  <div class="w-full py-5">
    <button
      class="humburger me-4 btn btn-light border-secondary"
      type="button"
      @click="toggleSidebar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
    <ul class="list-group px-4 mt-4 position-relative">
      <li class="">
        <router-link class="list-group-item list-group-item-action" to="/"
          >Dashboard</router-link
        >
      </li>
      <li class="">
        <router-link class="list-group-item list-group-item-action" to="/users"
          >Master Pengguna</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup(props, { emit }) {
    const toggleSidebar = () => {
      emit('toggle-sidebar');
    };
    return {
      toggleSidebar,
    };
  },
});
</script>
<style scoped>
li {
  text-align: left;
  list-style: none;
}

.humburger {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  width: 44px;
  height: 44px;
  background-color: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.is-open-sidebar {
  transform: translateX(0);
}
</style>
