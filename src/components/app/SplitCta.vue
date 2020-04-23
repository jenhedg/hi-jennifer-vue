<template>
     <section class ="splitCta flex" 
      style="
        background-color: pink;
      "
    >
      <h3>My Work</h3>
      <div class="ctaFeature">
        <h4>Github</h4>
        <Button label="Github"/>
      </div>
      <div class="ctaFeature">
        <h4>Codepen</h4>
        <Button label="Codepen"/>
      </div>
    </section>
</template>

<script>
import Button from "@/components/app/Button.vue";


export default {
  name: "SplitCta",
   components: {
    Button,
  },
  props: {
    label: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
