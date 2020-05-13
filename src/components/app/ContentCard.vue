<template>
  <section class>
    <div class="contentCard contentCard--horizontal">
      <div class="contentCard__imgWrap">
        <img class="contentCard__img" :src="thumbnail" alt="img" />
      </div>
      <div class="siteContent contentCard--underContent">
        <a class="contentCard__title">{{ title }}</a>
        <div class="contentCard__description">
          <p>{{ copy }}</p>
        </div>
        <div class="contentCard__btnWrap">
          <a
            class="btn btn--pink btn--defSize hover--sweepRight ctaFeature__btn"
            :href="href"
            target="_blank"
          >{{ btnLabel }}</a>
        </div>
        <a
          v-if="btnLabelTwo !== undefined"
          class="btn btn--pink btn--defSize hover--sweepRight ctaFeature__btn"
          :href="href"
          target="_blank"
        >{{ btnLabelTwo }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SplitCta",
  props: {
    thumbnail: String,
    title: String,
    copy: String,
    href: String,
    btnLabel: String,
    btnLabelTwo: String
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
