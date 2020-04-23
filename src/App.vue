<template>
  <div id="app">
    <header>
        <!-- <mobile-nav 
          v-if="mobileView" 
          :class="{ isActive: showNav }" 
        /> 
        <div
          class="navList__mobileIcon"
          v-if="mobileView"
          @click="showNav = !showNav"
        >
          <span></span>
        </div>-->
        <Nav v-if="!mobileView" />
      </header>
      <main class="container" :class="{ isMobile: showNav }">
        <router-view />
      </main>
      <Footer />
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
    Footer,
  },
  data: () => {
    return {
      mobileView: true,
      showNav: false,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
  },

  created() {
    console.log("created");
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
.isMobile {
  position: absolute;
  transform: translateX(300px);
  transition: 0.25s;
}
</style>
