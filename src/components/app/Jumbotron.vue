<template>
   <section class="jumbotron">
      <div class="jumbotronIntro">
        <h2 class="jumbotronIntro__title">
          <span class="bgFill bgFill--pink">
            Hi, I'm Jennifer.
          </span>
        </h2>
        <h3 class="jumbotronIntro__subtitle">
          <span class="bgFill bgFill--pink">
            I'm a Web Developer in
            <a
              href="https://en.wikipedia.org/wiki/Tucson,_Arizona"
              target="_blank"
              style="text-decoration: underline;"
              >Tucson, Arizona.</a
            >
          </span>
        </h3>
        <Button label="See My Resume" />
      </div>
    </section>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/app/Button.vue";

export default {
  name: "Jumbotron",
  components: {
    Button
  },
  props: {
    msg: String,
    intro: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";
</style>
