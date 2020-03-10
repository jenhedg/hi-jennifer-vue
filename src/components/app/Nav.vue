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
        <router-link to="/projects">Projects</router-link>
      </li>
      <li class="navList__link">
        <router-link to="/resume">Resume</router-link>
      </li>
      <li class="navList__link">
        <router-link to="/contact">Contact</router-link>
      </li>
      <li
        id="mobileTrigger"
        class="navList__mobileIcon"
        v-on:click="openNav"
      >
        <span></span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data: function() {
    return {
      state: "default",
      isActive: "false"
    };
  },
  props: {
    msg: String
  },
  methods: {
    openNav: function(event) {
      if (event) {
        var mobileTrigger = document.getElementById("mobileTrigger");
        mobileTrigger.classList.add("nav--isMobile");
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
