<template>
  <div id="app">
    <svg class="bg__river--left" viewBox="0 0 443 304" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="74.674%" y1="40.205%" x2="20.098%" y2="59.129%" id="a">
          <stop stop-color="#DD855C" offset="0%" />
          <stop stop-color="#EA3D96" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M0 0v304h5.22a24 24 0 0 0 12.101-3.274l285.115-166.474c5.723-3.341 7.654-10.69 4.312-16.413a12 12 0 0 0-4.358-4.34l-9.913-5.728c-5.738-3.316-7.701-10.656-4.385-16.394a12 12 0 0 1 4.385-4.385L443 0H0z"
        fill="url(#a)"
        fill-rule="nonzero"
      />
    </svg>
    <header>
      <Nav />
    </header>
    <main class="site__container">
      <router-view />
    </main>
    <!-- <Footer /> -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#0099ff" fill-opacity="1" d="M0,160L720,128L1440,160L1440,320L720,320L0,320Z" />
    </svg>
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
    return {};
  },
  methods: {},
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
