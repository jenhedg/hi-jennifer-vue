<template>
  <div id="app">
    <header>
        <Nav/>
      </header>
      <main class="site__container">
        <router-view />
      </main>
      <!-- <Footer /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/app/Nav.vue";
// import Footer from "@/components/app/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    // Footer,
  },
  data: () => {
    return {
    
    };
  },
  methods: {
   
  },

  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
