<template>
  <div id="app">
    <div class="container">
      <Nav/>
      <main>
        <router-view />
      </main>
    <Footer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/app/Nav.vue";
import Footer from "@/components/app/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer
  }
};
</script>

<style lang="scss">
  @import "@/styles/main.scss";
</style>
