<template>
  <section class="projects" style="background:rgba(255, 224, 181, 1);">
    <h3>Projects:</h3>
    <ul>
      <li>Exp projct one</li>
      <li>Exp project two</li>
      <li>Exp project three</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    label: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
