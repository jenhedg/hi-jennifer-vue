<template>
  <section class ="siteGroup--singleCard">
    <div class="site__container">
        <div class="siteContent__header">
          <h1>Hi, I'm Jennifer.</h1>
          <h2 class="siteContent__title">I'm a Web Developer in  <a
              href="https://en.wikipedia.org/wiki/Tucson,_Arizona"
              target="_blank"
              style="text-decoration: underline;"
              >Tucson, Arizona.
            </a>
          </h2>
          <div class="siteContent__description">
            <p>
              I have over four years digital agency experience, where I helped clients across the globe to exceed their marketing technology goals. If you would like to learn more about me please see my Resume, explore my work, or drop me a line.
          </p>
          </div>
          <a href="https://www.linkedin.com/in/jhedgcock/" target="_blank">LinkedIn</a>
          <a href="https://github.com/jenhedg" target="_blank">Github</a>
          <a href="https://codepen.io/sparkleOven" target="_blank">Codepen</a>
        </div>
        <div class="contentGroup__inner">
          <div class="contentCard contentCard--horizontal">
             <div class="contentCard__imgWrap">
              <img class="contentCard__img" src="https://centsai.com/wp-content/uploads/2018/04/Financial-literacy-programs-for-the-poor-Daye-Deura-1200x825.jpg" alt="img"/>
            </div>
          <div class="siteContent contentCard--underContent">
            <a class="siteContent__title">
              Another Global Site Title
            </a>
            <div class="siteContent__description">
              <p>
                See what I've been up to on Github.
              </p>
            </div>
            <div class="siteContent__ctaWrapper">
                <a class="btn btn--defSize btn--pink ctaFeature__btn" href="https://github.com/jenhedg" target="_blank">Go!</a>
            </div>
          </div>
          </div>
        </div> 
    </div>
     <div class="site__container ">
        <div class="contentGroup__inner">
          <div class="contentCard contentCard--horizontal">
             <!-- <div class="contentCard__imgWrap">
              <img class="contentCard__img" src="https://centsai.com/wp-content/uploads/2018/04/Financial-literacy-programs-for-the-poor-Daye-Deura-1200x825.jpg" alt="img"/>
            </div> -->
          <div class="siteContent contentCard--underContent">
            <a class="siteContent__title">
              Another Global Site Title
            </a>
            <div class="siteContent__description">
              <p>See what I've been up to on codepen.</p>
            </div>
            <div class="siteContent__ctaWrapper">
                <a class="btn btn--defSize btn--pink ctaFeature__btn" href="https://github.com/jenhedg" target="_blank">Codepen</a>
                
            </div>
          </div>
          <div class="siteContent contentCard--underContent">
            <a class="siteContent__title">
              Another Global Site Title
            </a>
            <div class="siteContent__description">
              <p>See what I've been up to on codepen.</p>
            </div>
            <div class="siteContent__ctaWrapper">
                <a class="btn btn--defSize btn--pink ctaFeature__btn" href="https://github.com/jenhedg" target="_blank">Codepen</a>
                
            </div>
          </div>
          </div>
        </div> 
    </div>
  </section>
</template>

<script>
// import Button from "@/components/app/Button.vue";

export default {
  name: "SplitCta",

   components: {
    //  Button,
  },
  props: {
    label: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
