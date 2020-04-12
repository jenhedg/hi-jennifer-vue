<template>
  <div class="home">
    <Feature msg="My name is Jennifer" />
  </div>
</template>

<script>
// @ is an alias to /src
import Feature from "@/components/Feature.vue";

export default {
  name: "Home",
  components: {
    Feature,
  },
};
</script>
