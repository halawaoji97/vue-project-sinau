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
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
