<template>
  <div class="w-25 border py-5">
    <ul class="list-group px-4">
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
export default {};
</script>
<style scoped>
li {
  text-align: left;
  list-style: none;
}
</style>
