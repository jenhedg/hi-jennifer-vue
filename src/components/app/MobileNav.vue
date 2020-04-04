<template>
  <mobileNav class="mobileNav">
    <ul class="navList">
      <li class="navList__link" @click="showNav = !showNav">
        <router-link to="/" role="button" aria-label="menu">Home</router-link>
      </li>
      <li class="navList__link" @click="showNav = !showNav">
        <router-link to="/projects" role="button" aria-label="menu">Projects</router-link>
      </li>
      <li class="navList__link" @click="showNav = !showNav">
        <router-link to="/resume" role="button" aria-label="menu">Resume</router-link>
      </li>
      <li class="navList__link" @click="showNav = !showNav">
        <router-link to="/contact" role="button" aria-label="menu">Contact</router-link>
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
      var mobileNav= document.getElementById("mobileNav");
      mobileNav.classList.remove("isActive");
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
