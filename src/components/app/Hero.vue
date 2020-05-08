<template>
  <section class="hero">
    <div class="hero__intro">
      <h1>Hi, I'm Jennifer.</h1>
      <h2 class="hero__title">
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
        <p>I have four years of experience building responsive webapps, content management systems and markting tools. The bulk of my experience is in the marketing/advertising world, where I have worked with some notable brands to bridge the gap between marketing and technology.</p>
        <p>I have experience with HTML,CSS/SCSS/, Javascript, jQuery, content management systems (Magnolia), React.js, Vue.js, templating engines (Handlebars, Freemarker, Jinja), build tools and task runners (Webpack, NPM, Gulp, Grunt) and version control (Git, Mercurial).</p>
        <p>
          I'm seeking my career next opportunity, click
          <a class="hover--wave" href="#">here</a> to learn more about me, or scroll down to see some of my work.
        </p>
        <h3>Here are some of the tech I'm excited about:</h3>
        <ul>
          <li>
            <b>React.js</b>,
          </li>
          <li>
            <b>Vue.js</b>,
          </li>
          <li>
            <b>Data Vizualizations(D3.js)</b>
          </li>
          <li>
            <b>JAMStack/Gatsby</b>,
          </li>
          <li>
            <b>VR(AFrame)</b>,
          </li>
          <li>
            <b>Machine learning (Ml5.js, TensorFlow, Keras)</b>,
          </li>
        </ul>

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
  name: "Hero",
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
