<template>
  <section class="home">
    <Hero />
    <div class="contentGroup__inner">
      <ContentCard
        thumbnail="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-192699-MCDBIMA_EC007_H.jpg"
        title="Title One"
        copy="Astonishment culture tingling of the spine another world emerged into consciousness intelligent beings. A billion trillion vastness is bearable only through love network of wormholes of brilliant syntheses bits of moving fluff ship of the imagination?."
        href="http://www.google.com"
        btnLabel="Link One"
        btnLabelTwo="Link Two"
      />
      <ContentCard
        thumbnail="https://centsai.com/wp-content/uploads/2018/04/Financial-literacy-programs-for-the-poor-Daye-Deura-1200x825.jpg"
        title="Title Two"
        copy="With pretty stories for which there's little good evidence realm of the galaxies decipherment vastness is bearable only through love two ghostly white figures in coveralls and helmets are soflty dancing finite but unbounded and billions upon billions upon billions upon billions upon billions upon billions upon billions"
        href="https://google.com"
        btnLabel="Link One"
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
