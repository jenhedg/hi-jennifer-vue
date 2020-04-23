<template>
     <section class ="splitCta" 
    >
      <!-- <h3 class="splitCta__title">
        <span class="bgFill bgFill--pink">
          Snappy and Neat Tagline
        </span>
      </h3> -->
      <div class="ctaFeatureContainer flex">
        <div class="ctaFeature ctaFeature__left">
          <Button class="ctaFeature__btn" label="Github"/>
        </div>
        <div class="ctaFeature ctaFeature__right">
          <Button class="ctaFeature__btn" label="Codepen"/>
        </div>
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
