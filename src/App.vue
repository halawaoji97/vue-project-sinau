<template>
  <!-- <router-view> -->
  <div class="position-relative">
    <div class="row">
      <div
        :class="
          isOpenSidebar
            ? ' p-0 header position-fixed top-0 end-0'
            : ' p-0 active header position-fixed top-0 end-0'
        "
      >
        <Header @toggle-sidebar="toggleSidebarHandler" />
      </div>
    </div>
    <!-- <div class="header w-75 border-bottom position-fixed top-0 end-0">
    </div> -->
    <div class="vh-100 position-relative start-0 mt-5">
      <!-- <div class="py-5 my-2 vh-100 w-100 start-0"> -->
      <!-- <div
        :class="isOpenSidebar ? 'border sidebar active' : ' sidebar border  '"
      > -->
      <div
        :class="
          isOpenSidebar ? 'm-0 active sidebar h-100 ' : 'm-0 sidebar h-100 '
        "
      >
        <Sidebar
          @toggle-sidebar="toggleSidebarHandler"
          :isOpenSidebar="isOpenSidebar"
        />
      </div>
      <div
        :class="
          isOpenSidebar
            ? 'main-content position-absolute end-0'
            : 'main-content active position-absolute end-0'
        "
        :isOpenSidebar="isOpenSidebar"
      >
        <main>
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </main>
      </div>
    </div>
  </div>
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
}

.sidebar {
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgb(5, 9, 65);
  width: 25%;
  overflow: auto;
  min-height: 100vh;
  z-index: 99999;
  transition: all 0.5s ease-in-out;
  padding: 0 50px;
  overflow-x: hidden;
}

.active {
  width: 5%;
  padding: 0 8px;
}

.header {
  background-color: #f5f5f5;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
.header.active {
  width: 75%;
}
.main-content {
  width: 95%;
  transition: all 0.5s ease-in-out;
}

.main-content.active {
  width: 75%;
}
@media screen and (max-width: 768px) {
  .sidebar,
  .sidebar.active {
    padding: 0 16px;
    width: 300px;
  }
  .sidebar.active {
    width: 0;
    transform: translate(-100%);
  }
  .header,
  .header.active,
  .main-content,
  .main-content.active {
    width: 100%;
  }
}
</style>
