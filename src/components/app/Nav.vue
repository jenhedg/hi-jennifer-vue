<template>
  <nav class="nav">
    <div class="navLogo">
      <router-link to="/">Jh</router-link>
    </div>
    <ul class="navList">
      <li class="navList__link">
          <router-link to="/">Home</router-link>
      </li>
      <li class="navList__link">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "Nav",
    props: {
      msg: String
    }
  };
</script>

<style lang="scss">
  @import "@/styles/main.scss";
</style>
