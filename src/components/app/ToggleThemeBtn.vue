<template>
  <button @click="toggleTheme">Toggle Me!</button>
</template>

<script>
export default {
  name: "ToggleThemeBtn",
  data(){
    return {
      theme:'light'
      }
  },
  watch: {
    theme(theme) {
      document.documentElement.dataset.theme = theme // this is where the magic happens
    } // the `dataset.theme` is the data-theme attribute I set in my SCSS file (highlighted above)
  },
  methods:{
     toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light' // switch themes based on current value of `this.theme`
    }
  }
  
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
