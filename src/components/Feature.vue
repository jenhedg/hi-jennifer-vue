<template>
  <div class="feature">
    <h1>{{ msg }}</h1>
    <p>{{ intro }}</p>
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
