<template>
  <nav class="navbar navbar-light py-3 bg-light border-bottom">
    <div
      class="container position-relative d-flex justify-content-between align-items-center"
    >
      <div class="d-flex align-items-center">
        <button
          class="humburger me-4 btn btn-light border-secondary"
          @click="toggleSidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <router-link class="navbar-brand h-44" to="/">
          <img :src="Logo" height="44" />
        </router-link>
      </div>
      <button class="btn btn-logout btn-outline-success" type="submit">
        Logout
      </button>
    </div>
  </nav>
</template>
<script>
import Logo from '@/assets/Logo Sinau.png';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup(props, { emit }) {
    const hidden = ref(false);
    const toggleSidebar = () => {
      emit('toggle-sidebar');
    };
    return {
      Logo,
      toggleSidebar,
      hidden,
    };
  },
});
</script>
<style scoped>
.humburger {
  z-index: 1;
  width: 44px;
  height: 44px;
  background-color: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}
</style>
