<template>
  <div class="feature">
    <h1>{{ msg }}</h1>
    <p><b>I am a Front End Web Developer</b> in Tucson, Arizona. I have some great experience working with clients across the globe, learn more about it <a href="#">here</a>. I'm currently learning experimenting with Vue.js and d3.js.</p>
  </div>
</template>

<script>
export default {
  name: "Feature",
  props: {
    msg: String,
    intro: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/main.scss";
</style>
