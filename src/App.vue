<template>
  <div id="app">
    <MobileNav v-if="mobileView" :class="{ isActive: showNav }"/>
    <div class="container" :class="{ isMobile: showNav }">
      <div
        class="navList__mobileIcon"
        v-if="mobileView"
        @click="showNav = !showNav"
      >
        <span></span>
      </div>
      <Nav v-if="!mobileView" />
      <main>
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/app/Nav.vue";
import MobileNav from "@/components/app/MobileNav.vue";
import Footer from "@/components/app/Footer.vue";

export default {
  name: "App",
  data: () => {
    return {
      mobileView: true,
      showNav: false
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    }
  },
  components: {
    Nav,
    MobileNav,
    Footer
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  }
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
