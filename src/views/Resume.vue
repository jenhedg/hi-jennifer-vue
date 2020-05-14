<template>
  <section class="resume">
    <div class="resume__header">
      <h1 class="resume__name">Jennifer Hedgcock</h1>
      <div class="resume__contact">
        <ul class="contact__inner--top">
          <li>Tucson, Arizona | 520.400.2722</li>
          <li>
            <a
              class="hover--grow"
              href="mailto:jennifernhf@gmail.com"
              target="_blank"
              >jennifernhf@gmail.com</a
            >
          </li>
          <li>
            <a
              class="hover--grow"
              href="http://www.hi-jennifer.com"
              target="_blank"
              >hi-jennifer.com</a
            >
          </li>
        </ul>
        <ul class="contact__inner--bottom">
          <li>
            <a
              class="hover--grow"
              href="https://www.linkedin.com/in/jhedgcock/"
              target="_blank"
            >
              <i class="resume__icon fab fa-linkedin"></i>LinkedIn
            </a>
          </li>
          <li>
            <a
              class="hover--grow"
              href="https://github.com/jenhedg"
              target="_blank"
            >
              <i class="resume__icon fab fa-github"></i>Github
            </a>
          </li>
          <li>
            <a
              class="hover--grow"
              href="https://codepen.io/sparkleOven"
              target="_blank"
            >
              <i class="resume__icon fab fa-codepen"></i>Codepen
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="hr" />
    <h2 class="resume__category">Summary</h2>
    <p class="resume__copy">
      I am Front End Web Developer with a self-starting customer service and
      digital marketing background. I have over 4 years of experience helping
      clients to bridge the gap between tech and marketing using modern web
      technologies.
    </p>
    <div class="resume__techlist">
      <ul class>
        <h3>Technical Experience</h3>
        <li>HTML, CSS/SCSS/Less, Javascript, jQuery, React.js, Vue.js</li>
        <li>Templating engines&mdash; Handlebars, Freemarker, Jinja</li>
        <li>Build tools and task runners&mdash; Webpack, NPM, Gulp, Grunt</li>
        <li>Version control&mdash; Git, Mercurial</li>
      </ul>
    </div>
    <h2 class="resume__category">Experience</h2>
    <div class="resume__pos">
      <h3>
        Front-End Web Developer,
        <span>Crescendo Collective</span>
      </h3>
      <h5>Feb 2016 - Mar 2020</h5>
      <p class="resume__copy">
        Worked daily with client-led and internal teams, including offshore QA
        teams. Programmed enterprise-level webapps, microsites and marketing
        tools. Integrated front-end with Magnolia CMS and Java backend. Led
        daily/weekly releases and deployment processes. Created documentation
        and style guides for both clients and internal teams.
      </p>
    </div>
    <div class="resume__pos">
      <h3>
        Spanish Tutor,
        <span>Wyzant</span>
      </h3>
      <h5>Jan 2015 - Dec 2015</h5>
      <p class="resume__copy">
        Independently tutored K-12 and college students with Spanish coursework
        and test preparation.
      </p>
    </div>
    <div class="resume__pos">
      <h3>
        Weights & Measures Lab Assistant,
        <span>Gemological Institute of America</span>
      </h3>
      <h5>Jul 2013 - Aug 2014</h5>
      <p class="resume__copy">
        Processed 400+ samples daily using proprietary diagnostic technologies.
        Supported research team to develop and test diagnostic technologies, and
        project initiatives.
      </p>
    </div>
    <div class="resume__pos">
      <h3>
        Student Advisor,
        <span>Jones International University</span>
      </h3>
      <h5>Jul 2013 - Aug 2014</h5>
      <p class="resume__copy">
        Guided and mentored prospective and incoming students on academic for
        academic prep and success in an online-learning environment. Assisted
        student with registration, onboarding-procedures. Successfully
        maintained metric goals for quarterly student retention rates.
      </p>
    </div>
    <h2 class="resume__category">Education</h2>
    <div class="resume__ed">
      <h4>
        AA, Web Development &amp; Design,
        <span>MiraCosta College, 2015</span>
      </h4>
    </div>
    <div class="resume__ed">
      <h4>
        BA, Latin American Studies &amp; Political Science,
        <span>The University of Arizona, 2007</span>
      </h4>
    </div>
  </section>
</template>
<script>
export default {
  name: "Resume",
};
</script>
