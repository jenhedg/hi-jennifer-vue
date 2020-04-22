<template>
    <router-link
      class="btn btn--defSize btn--center btn--pusher btn--pink"
      to="/resume"
      role="button"
      aria-label="resume button"
      >{{ label }}</router-link
    >
</template>

<script>
export default {
  name: "Button",
  props: {
    label: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
