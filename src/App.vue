<template>
  <div>
    <div class="container-fluid position-relative">
      <div class="row fixed-top">
        <div class="col-12">
          <Header />
        </div>
      </div>
      <div class="row py-5 my-2 vh-100 w-100 position-absolute start-0">
        <Sidebar />
        <div class="w-75">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Sidebar,
  },
});
</script>

<style>
/* @import '@/assets/base.css'; */
</style>
