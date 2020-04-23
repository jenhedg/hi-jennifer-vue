<template>
  <section class="home">
    <div class="jumbotron">
      <div class="jumbotronIntro">
        <h2 class="jumbotronIntro__title">
          <span class="bgFill bgFill--pink">
            Hi, I'm Jennifer.
          </span>
        </h2>
        <h3 class="jumbotronIntro__subtitle">
          <span class="bgFill bgFill--pink">
            I'm a Web Developer in
            <a
              href="https://en.wikipedia.org/wiki/Tucson,_Arizona"
              target="_blank"
              style="text-decoration: underline;"
              >Tucson, Arizona.</a
            >
          </span>
        </h3>
        <Button label="See My Resume" />
      </div>
    </div>
    <h3>Projects:</h3>
    <ul>
      <li>Exp projct one</li>
      <li>Exp project two</li>
      <li>Exp project three</li>
    </ul>
    <hr />
    <h3>Here are links to my code examples and repos</h3>
    <ul>
      <li>Github</li>
      <li>Codepen</li>
    </ul>
  </section>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/app/Button.vue";

export default {
  name: "Home",
  components: {
    Button,
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
