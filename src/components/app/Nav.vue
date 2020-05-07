<template>
  <nav class="nav">
    <!-- <div class="navLogo">
      <router-link to="/">
        <img alt="Jennifer Hedgcock" src="@/assets/logo.png" />
      </router-link>
    </div>-->
    <ul class="navList">
      <li class="navList__link">
        <router-link to="/" role="button" aria-label="menu">Home</router-link>
      </li>
      <li class="navList__link">
        <router-link to="/work" role="button" aria-label="menu">Work</router-link>
      </li>
      <li class="navList__link">
        <router-link to="/resume" role="button" aria-label="menu">Resume</router-link>
      </li>
      <li class="navList__link">
        <router-link to="/contact" role="button" aria-label="menu">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {
  name: "Nav",
  data: function () {
    return {
      state: "default",
      isActive: "false",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    openNav: function (event) {
      if (event) {
        var mobileTrigger = document.getElementById("mobileTrigger");
        mobileTrigger.classList.add("nav--isMobile");
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
