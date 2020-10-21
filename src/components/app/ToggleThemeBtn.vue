<template>
  <button @click="toggleTheme">Toggle Me!</button>
</template>

<script>
export default {
  name: "ToggleThemeBtn",
  data(){
    return {
      theme:'defaultTheme'
      }
  },
  watch: {
    theme(theme) {
      document.documentElement.dataset.theme = theme
    }
  },
  methods:{
     toggleTheme() {
      this.theme = this.theme === 'defaultTheme' ? 'secondaryTheme' : 'defaultTheme' 
    }
  }
  
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
