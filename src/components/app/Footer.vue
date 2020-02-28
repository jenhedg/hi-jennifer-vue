<template>
  <footer>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <p>This website is made with Vue.js</p>
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