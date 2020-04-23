<template>
  <section class="home">
    <Jumbotron/>
    <section class ="splitCta flex" 
      style="
        background-color: pink;
      "
    >
      <h3>My Work</h3>
      <div class="ctaFeature">
        <h4>Github</h4>
        <Button label="Github"/>
      </div>
      <div class="ctaFeature">
        <h4>Codepen</h4>
        <Button label="Codepen"/>
      </div>
    </section>
    <section class="projects">
    <h3>Projects:</h3>
    <ul>
      <li>Exp projct one</li>
      <li>Exp project two</li>
      <li>Exp project three</li>
    </ul>
    </section>
    <hr />
  </section>
</template>

<script>
// @ is an alias to /src
import Jumbotron from "@/components/app/Jumbotron.vue";

export default {
  name: "Home",
  components: {
    Jumbotron,
  },
};
</script>

<style>
.jumbotron {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* text-align: center; */
  background-image: url(https://images.unsplash.com/photo-1568738351265-c7065f5d4293?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 50vh;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 700;
}

.jumbotronIntro {
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: left;
}

.jumbotronIntro__title {
  font-size: 3.25em;
  margin: 0;
}

.jumbotronIntro__subtitle {
  font-size: 2.25em;
  margin: 0;
}

.jumbotronIntro__title,
.jumbotronIntro__subtitle {
  color: #fff;
  margin: 0;
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
