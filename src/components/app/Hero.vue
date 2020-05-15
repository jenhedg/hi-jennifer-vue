<template>
  <section class="hero">
    <div class="hero__intro">
      <h1 class="hero__title">Hi, I'm Jennifer.</h1>
      <h2 class="hero__subtitle">
        I'm a Web Developer in
        <span>🌵</span>
        <a
          class="hover--grow"
          href="https://en.wikipedia.org/wiki/Tucson,_Arizona"
          target="_blank"
        >Tucson, Arizona.</a>
      </h2>
      <Hr />
      <div class="hero__contactLinks">
        <a class="hero__icon--withLink" href="https://github.com/jenhedg" target="_blank">
          <i class="hero__icon fab fa-github"></i>
          <span class="hover--grow">Github</span>
        </a>
        <a
          class="hero__icon--withLink"
          href="https://www.linkedin.com/in/jhedgcock/"
          target="_blank"
        >
          <i class="hero__icon fab fa-linkedin"></i>
          <span class="hover--grow">LinkedIn</span>
        </a>
        <a class="hero__icon--withLink" href="https://codepen.io/sparkleOven" target="_blank">
          <i class="hero__icon fab fa-codepen"></i>
          <span class="hover--grow">Codepen</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Hr from "@/components/app/Hr.vue";

export default {
  name: "Hero",
  components: {
    Hr,
  },
  methods: {},
  props: {
    msg: String,
    intro: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
