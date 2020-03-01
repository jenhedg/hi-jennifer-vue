<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Feature msg="My name is Jennifer" intro="I am a Front End Web Developer in Tucson, Arizona." />
  </div>
</template>

<script>
// @ is an alias to /src
import Feature from "@/components/Feature.vue";

export default {
  name: "Home",
  components: {
    Feature
  }
};
</script>