<template>
  <div id="app">
    <div class="bg__river--left"></div>
    <header>
      <Nav />
    </header>
    <main class="site__container">
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from "@/components/app/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
