<template>
  <section class="home site__container">
    <Hero/>
      <div class="contentGroup__inner">
        <ContentCard 
        thumbnail="https://centsai.com/wp-content/uploads/2018/04/Financial-literacy-programs-for-the-poor-Daye-Deura-1200x825.jpg"
        title="See my work on Githb"
        copy="Lorem Ipsum dum dum doo doo. I type gibberish and thingies happen on screeny."
        href="http://www.google.com"
        btnLabel="Go!"
        />
        <ContentCard 
          thumbnail="https://centsai.com/wp-content/uploads/2018/04/Financial-literacy-programs-for-the-poor-Daye-Deura-1200x825.jpg"
          title="Another Project"
          copy="Lorem Ipsum dum dum doo doo. This is a very exciting project, here are the technologies I used to make it. blah, de blah"
          href="http://www.google.com"
          btnLabel="View"
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
    ContentCard
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
