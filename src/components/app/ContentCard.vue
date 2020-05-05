<template>
  <section class="">
    <div class="contentCard contentCard--horizontal">
        <div class="contentCard__imgWrap">
        <img class="contentCard__img" :src="thumbnail" alt="img"/>
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
          <a class="btn btn--defSize btn--pink ctaFeature__btn" :href="href" target="_blank">{{ btnLabel }}</a>
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
    thumbnail: String,
    title: String,
    copy: String,
    href: String,
    btnLabel: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
