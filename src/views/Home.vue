<template>
  <section class="home">
    <Jumbotron/>
    <SplitCta/>
  </section>
</template>

<script>
// @ is an alias to /src
import Jumbotron from "@/components/app/Jumbotron.vue";
import SplitCta from "@/components/app/SplitCta.vue";
// import Gallery from "@/components/app/Gallery.vue";

export default {
  name: "Home",
  components: {
    Jumbotron,
    SplitCta,
    // Gallery
  },
};
</script>

<style>
.sectionHeader {
  background-color: blue;
  text-align: center;
  width: 100%;
}

.sectionHeader h3 {
}
/*Fill in bg of text*/
.bgFill {
  line-height: 2;
  padding: 0.25em;
}
.bgFill--pink {
  background-color: rgba(234, 61, 150, 1);
}
</style>
