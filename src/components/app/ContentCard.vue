<template>
  <section class="">
    <div class="contentCard contentCard--horizontal">
        <div class="contentCard__imgWrap">
        <img class="contentCard__img" src="https://centsai.com/wp-content/uploads/2018/04/Financial-literacy-programs-for-the-poor-Daye-Deura-1200x825.jpg" alt="img"/>
      </div>
    <div class="siteContent contentCard--underContent">
      <a class="siteContent__title">
        {{ title }}
      </a>
      <div class="siteContent__description">
        <p>
          {{ copy }}
        </p>
      </div>
      <div class="siteContent__ctaWrapper">
          <a class="btn btn--defSize btn--pink ctaFeature__btn" href="https://github.com/jenhedg" target="_blank">{{ btnLabel }}</a>
      </div>
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
    title: String,
    copy: String,
    btnLabel: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
