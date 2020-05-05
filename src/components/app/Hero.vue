<template>
   <section class="hero">
         <div class="hero__intro">
          <h1>Hi, I'm Jennifer.</h1>
          <h2 class="hero__title">I'm a Web Developer in  <a
              href="https://en.wikipedia.org/wiki/Tucson,_Arizona"
              target="_blank"
              style="text-decoration: underline;"
              >Tucson, Arizona.
            </a>
          </h2>
          <div class="hero__contactLinks">
            <a href="https://www.linkedin.com/in/jhedgcock/" target="_blank">LinkedIn</a>
            <a href="https://github.com/jenhedg" target="_blank">Github</a>
            <a href="https://codepen.io/sparkleOven" target="_blank">Codepen</a>
          </div>
          <hr/>
          <div class="hero__copy">
            <p></p>
            <p>
              I have four years of front end web development experience in the digital marketing/advertising industry. I've worked alongside some notable brands around the world to build responsive webapps, content management systems and markting tools.
            </p>
            <p>
              I'm currently excited about technologies like Vue.js, React.js, Gatsby, the JAMStack, AI/machine learning and TensorFlow, VR with A-Frame.</p> 
            <p>I'm seeking my career next opportunity, click <a href="#">here</a> to learn more about me, or scroll down to see some of my work.</p>
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
  props: {
    msg: String,
    intro: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
