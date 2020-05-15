<template>
  <section class="home">
    <Hero />
    <div class="contentGroup__inner">
      <ContentCard
        thumbnail="https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg?ssl=1"
        title="Hello, world!"
        copy="I built this site from scratch using Vue.js, Vue CLI and Vue Router. I chose Vue because I've worked with React and I wanted to try another popular SPA framework.  Vue's rich ecosystem of NPM packages, tools and yes, documentation (because everyone loves good documentation) makes it easy-to-learn and enjoyable to work with."
        href="https://vuejs.org/"
        btnLabel="Learn More"
      />
    </div>
  </section>
</template>

<script>
import Hero from "@/components/app/Hero.vue";
import ContentCard from "@/components/app/ContentCard.vue";

export default {
  name: "Home",
  components: {
    Hero,
    ContentCard,
  },
};
</script>

<style>
/*Fill in bg of text*/
.bgFill {
  line-height: 2;
  padding: 0.25em;
}
.bgFill--pink {
  background-color: rgba(234, 61, 150, 1);
}
</style>
