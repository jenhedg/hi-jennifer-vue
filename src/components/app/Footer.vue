<template>
  <footer class="footer">
    <ul class="footerNav">
      <li class="footerNav__link">
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/projects">Projects</router-link>
      </li>
      <li>
        <router-link to="/resume">Resume</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <div class="footerInfo">
      <p>&copy;2020 Jennifer Hedgcock</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
