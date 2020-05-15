<template>
  <nav class="nav">
    <ul class="navList">
      <li class="navList__link">
        <router-link class="hover--grow" to="/" role="button" aria-label="menu"
          >Home</router-link
        >
      </li>
      <li class="navList__link">
        <router-link
          class="hover--grow"
          to="/resume"
          role="button"
          aria-label="menu"
          >Resume</router-link
        >
      </li>
      <li class="navList__link">
        <router-link
          class="hover--grow"
          to="/contact"
          role="button"
          aria-label="menu"
          >Contact</router-link
        >
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
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
