<template>
   <section class="jumbotron site__container">
         <div class="siteContent__header">
          <h1>Hi, I'm Jennifer.</h1>
          <h2 class="siteContent__title">I'm a Web Developer in  <a
              href="https://en.wikipedia.org/wiki/Tucson,_Arizona"
              target="_blank"
              style="text-decoration: underline;"
              >Tucson, Arizona.
            </a>
          </h2>
          <div class="siteContent__copy">
            <p>
              I have over four years digital agency experience, where I helped clients across the globe to exceed their marketing technology goals. If you would like to learn more about me please see my Resume, explore my work, or drop me a line.
          </p>
          </div>
          <a href="https://www.linkedin.com/in/jhedgcock/" target="_blank">LinkedIn</a>
          <a href="https://github.com/jenhedg" target="_blank">Github</a>
          <a href="https://codepen.io/sparkleOven" target="_blank">Codepen</a>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src
// import Button from "@/components/app/Button.vue";

export default {
  name: "Jumbotron",
  components: {
    // Button
  },
  props: {
    msg: String,
    intro: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
