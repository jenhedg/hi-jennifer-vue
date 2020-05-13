<template>
  <section class="home">
    <Hero />
    <div class="contentGroup__inner">
      <ContentCard
        thumbnail="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-192699-MCDBIMA_EC007_H.jpg"
        title="Card Title"
        copy="Lorem Ipsum dum dum doo doo. I type gibberish and thingies happen on screeny."
        href="http://www.google.com"
        btnLabel="See Gitbub"
        btnLabelTwo="View Site"
      />
      <ContentCard
        thumbnail="https://centsai.com/wp-content/uploads/2018/04/Financial-literacy-programs-for-the-poor-Daye-Deura-1200x825.jpg"
        title="Card Title"
        copy="Lorem Ipsum dum dum doo doo. This is a very exciting project, here are the technologies I used to make it. blah, de blah"
        href="https://google.com"
        btnLabel="View Site"
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
