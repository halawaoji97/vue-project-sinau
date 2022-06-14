<template>
  <div class="py-3 w-full h-100 position-relative">
    <div
      :class="
        isOpenSidebar
          ? 'd-flex align-items-center justify-content-center'
          : 'd-flex align-items-center'
      "
    >
      <router-link
        :class="
          isOpenSidebar ? 'navbar-brand h-44 d-none' : 'navbar-brand h-44'
        "
        to="/"
      >
        <img :src="Logo" height="44" />
      </router-link>
      <button
        :class="
          isOpenSidebar
            ? 'mt-2 btn btn-light border-secondary'
            : 'btn ms-5 btn-light  border-secondary'
        "
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
    </div>
    <ul class="list-group w-100 mt-5 pt-4 position-relative">
      <li
        :class="
          showHumburger
            ? 'd-flex align-items-center justify-content-center'
            : 'd-flex'
        "
      >
        <div v-if="showHumburger">
          <router-link class="bg-light p-2 h-44 rounded" to="/"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
          </router-link>
        </div>
        <div v-else class="w-100">
          <router-link
            class="bg-light p-2 nav-link rounded w-100 text-medium"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
            <span class="ms-4">Dashboard</span></router-link
          >
        </div>
      </li>
      <li
        :class="
          showHumburger
            ? 'd-flex mt-4 align-items-center justify-content-center'
            : 'd-flex'
        "
      >
        <div v-if="showHumburger">
          <router-link class="bg-light p-2 h-44 rounded" to="/"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
          </router-link>
        </div>
        <div v-else class="w-100 mt-2">
          <router-link
            class="bg-light p-2 nav-link rounded w-100 text-medium"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-people"
              viewBox="0 0 16 16"
            >
              <path
                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
              />
            </svg>
            <span class="ms-4">Master Pengguna</span></router-link
          >
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import Logo from '@/assets/Logo Sinau.png';

export default defineComponent({
  props: {
    isOpenSidebar: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const showHumburger = ref(false);
    const toggleSidebar = () => {
      showHumburger.value = !showHumburger.value;
      emit('toggle-sidebar');
    };
    return {
      toggleSidebar,
      Logo,
      showHumburger,
    };
  },
});
</script>
<style scoped>
li {
  text-align: left;
  list-style: none;
  width: 100%;
  display: block;
}
.nav-link {
  width: 100%;
  display: block;
  text-decoration: none;
  color: #000;
}

.is-open-sidebar {
  transform: translateX(0);
}
</style>
