<template>
  <!-- <router-view> -->
  <div class="container-fluid position-relative">
    <div class="w-100 fixed-top">
      <div class=" ">
        <Header @toggle-sidebar="toggleSidebarHandler" />
      </div>
    </div>
    <div class="py-5 my-2 vh-100 w-100 start-0">
      <div
        :class="isOpenSidebar ? 'border sidebar active' : ' sidebar border  '"
      >
        <Sidebar @toggle-sidebar="toggleSidebarHandler" />
      </div>
      <main>
        <!-- <router-view :isOpenSidebar="isOpenSidebar" /> -->
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
  <!-- </router-view> -->
</template>

<script>
import { defineComponent, ref } from 'vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Sidebar,
  },
  setup() {
    const isOpenSidebar = ref(false);
    const toggleSidebarHandler = () => {
      isOpenSidebar.value = !isOpenSidebar.value;
    };

    return {
      toggleSidebarHandler,
      isOpenSidebar,
    };
  },
});
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.sidebar {
  transform: translateX(-100%);
  position: fixed;
  width: 300px;
  overflow: auto;
  min-height: 100vh;
  z-index: 9999;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  padding-top: 20px;
  transition: all 0.5s ease-in-out;
}
.active {
  transform: translateX(0);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
