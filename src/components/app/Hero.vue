<template>
  <section class="hero">
    <div class="hero__intro">
      <h1>Hi, I'm Jennifer.</h1>
      <h2>
        I'm a Web Developer in
        <span>🌵</span>
        <a
          class="hover--wave"
          href="https://en.wikipedia.org/wiki/Tucson,_Arizona"
          target="_blank"
        >Tucson, Arizona.</a>
      </h2>
      <div class="hero__contactLinks">
        <a
          class="hero__icon--withLink"
          href="https://www.linkedin.com/in/jhedgcock/"
          target="_blank"
        >
          <i class="hero__icon fab fa-linkedin"></i>
          <span class="hover--wave">LinkedIn</span>
        </a>
        <a class="hero__icon--withLink" href="https://github.com/jenhedg" target="_blank">
          <i class="hero__icon fab fa-github"></i>
          <span class="hover--wave">Github</span>
        </a>
        <a class="hero__icon--withLink" href="https://codepen.io/sparkleOven" target="_blank">
          <i class="hero__icon fab fa-codepen"></i>
          <span class="hover--wave">Codepen</span>
        </a>
      </div>
      <hr />
      <div class="hero__copy">
        <p>
          I have four years of experience building responsive webapps, content
          management systems and markting tools. The bulk of my experience is in
          the marketing/advertising world, where I have worked with some notable
          brands to bridge the gap between marketing and technology.
        </p>
        <p>
          I have experience with HTML,CSS/SCSS/, Javascript, jQuery, content
          management systems (Magnolia), React.js, Vue.js, templating engines
          (Handlebars, Freemarker, Jinja), build tools and task runners
          (Webpack, NPM, Gulp, Grunt) and version control (Git, Mercurial).
        </p>
        <p>
          I'm seeking my career next opportunity, click
          <a class="hover--wave" href="#">here</a> to learn more about me, or
          scroll down to see some of my work.
        </p>
        <!-- <div class="hero__feature">
          <h3>Here are some of the tech I'm excited about:</h3>
          <ul>
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Data Vizualizations(D3.js)</li>
            <li>JAMStack/Gatsby</li>
            <li>VR(AFrame)</li>
            <li>Machine learning (ml5.js, TensorFlow)</li>
          </ul>
        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import Button from "@/components/app/Button.vue";

export default {
  name: "Hero",
  components: {
    // Button
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
