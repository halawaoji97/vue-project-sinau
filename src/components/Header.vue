<template>
  <nav class="navbar navbar-light py-3 bg-light border-bottom">
    <div class="container">
      <router-link class="navbar-brand h-44" to="/">
        <img :src="Logo" height="44" />
      </router-link>
      <button class="btn btn-outline-success" type="submit">Logout</button>
    </div>
  </nav>
</template>
<script>
import Logo from '@/assets/Logo Sinau.png';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      Logo,
    };
  },
});
</script>
<style lang=""></style>
