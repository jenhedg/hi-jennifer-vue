<template>
  <section class ="">
    <div class="site__container">
        <div class="siteContent__header">
          <h2 class="siteContent__title">A Generic Global Site Title</h2>
          <div class="siteContent__description">
            <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.</p>
          </div>
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
              <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.</p>
            </div>
            <div class="siteContent__ctaWrapper">
                <a class="btn btn--defSize btn--pink ctaFeature__btn" href="https://github.com/jenhedg" target="_blank">Github</a>
            </div>
          </div>
          </div>
        </div> 
    </div>
     <div class="site__container">
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
              <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.</p>
            </div>
            <div class="siteContent__ctaWrapper">
                <a class="btn btn--defSize btn--pink ctaFeature__btn" href="https://github.com/jenhedg" target="_blank">Github</a>
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
