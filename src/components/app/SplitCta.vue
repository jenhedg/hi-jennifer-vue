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
          <a class="btn btn--defSize btn--pink ctaFeature__btn" href="https://github.com/jenhedg" target="_blank">Github</a>
        </div>
        <div class="ctaFeature ctaFeature__right">
          <a class="btn btn--defSize btn--pink ctaFeature__btn" href="https://codepen.io/sparkleOven" target="_blank">Codepen</a>
        </div>
      </div>
    </section>
</template>

<script>

export default {
  name: "SplitCta",
   components: {
  },
  props: {
    label: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
