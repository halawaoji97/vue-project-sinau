<template>
  <nav class="navbar navbar-light py-3 w-100">
    <div
      class="container-fluid d-flex justify-content-between align-items-center"
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
.humburger,
.navbar-brand {
  display: none;
}
@media screen and (max-width: 768px) {
  .humburger,
  .navbar-brand {
    display: block;
  }
}
</style>
