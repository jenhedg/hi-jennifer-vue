<template>
  <section class="hero">
    <div class="hero__intro">
      <h1>Hi, I'm Jennifer.</h1>
      <h2 class="hero__title">
        I'm a Web Developer in 🌵
        <a
          href="https://en.wikipedia.org/wiki/Tucson,_Arizona"
          target="_blank"
          style="text-decoration: underline;"
        >Tucson, Arizona.</a>
      </h2>
      <div class="hero__contactLinks">
        <i>
          <font-awesome-icon icon="user-secret" />
        </i>
        <a href="https://www.linkedin.com/in/jhedgcock/" target="_blank">
          <i class="fab fa-linkedin"></i>LinkedIn
        </a>
        <a href="https://github.com/jenhedg" target="_blank">
          <i class="fab fa-github"></i>
          Github
        </a>
        <a href="https://codepen.io/sparkleOven" target="_blank">
          <i class="fab fa-codepen"></i>
          Codepen
        </a>
      </div>
      <hr />
      <div class="hero__copy">
        <p></p>
        <p>I have four years of front end web development experience in the digital marketing/advertising industry. I've worked alongside some notable brands around the world to build responsive webapps, content management systems and markting tools.</p>
        <p>
          These are some of the technologies I'm excited about:
          <b>React.js</b>,
          <b>Vue.js</b>,
          <b>JAMStack/Gatsby</b>,
          <b>Data Vizualization(D3.js)</b>,
          <b>VR(AFrame)</b>,
          <b>AI/machine learning (Ml5.js, TensorFlow, Keras)</b>.
        </p>
        <p>
          I'm seeking my career next opportunity, click
          <a href="#">here</a> to learn more about me, or scroll down to see some of my work.
        </p>
        <!-- <p>
        I have experience with HTML, CSS/SCSS/, Javascript, jQuery, CMS, React.js, Vue.js, templating engines (Handlebars, Freemarker, Jinja), build tools and task runners (Webpack, NPM, Gulp, Grunt) and version control (Git, Mercurial).</p>-->
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import Button from "@/components/app/Button.vue";

export default {
  name: "hero",
  components: {
    // Button
  },
  methods: {
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
