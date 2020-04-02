<template>
  <mobileNav class="mobileNav">
    <ul class="navList">
      <li class="navList__link" @click="showNav = !showNav">
        <router-link to="/">Home</router-link>
      </li>
      <li class="navList__link" @click="showNav = !showNav">
        <router-link to="/projects">Projects</router-link>
      </li>
      <li class="navList__link" @click="showNav = !showNav">
        <router-link to="/resume">Resume</router-link>
      </li>
      <li class="navList__link" @click="showNav = !showNav">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </mobileNav>
</template>

<script>
export default {
  name: "Nav",
  data: function() {
    return {  
      showNav: true
    };
  },
  watch: {
    $route() {
      this.showNav = true;
    }
  },
  props: {
    msg: String
  },
  methods: {
    //
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
