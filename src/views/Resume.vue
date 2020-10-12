<template>
  <section class="resume">
    <div class="resume__header">
      <h1 class="resume__name">Jennifer Hedgcock</h1>
      <div class="resume__contact">
        <ul class="contact__inner--top">
          <li>
            <a class="hover--grow" href="http://hi-jennifer.com" target="_blank">
              <i class="resume__icon fas fa-map-pin"></i>Tucson, Arizona
            </a>
          </li>
          <li>
            <a class="hover--grow" href="http://hi-jennifer.com" target="_blank">
              <i class="resume__icon fas fa-globe"></i>hi-jennifer.com
            </a>
          </li>
          <li>
            <a class="hover--grow" href="mailto:hijenniferaz@gmail.com" target="_blank">
              <i class="resume__icon far fa-envelope"></i>hijenniferaz@gmail.com
            </a>
          </li>
        </ul>
        <ul class="contact__inner--bottom">
          <li>
            <a class="hover--grow" href="https://www.linkedin.com/in/jhedgcock/" target="_blank">
              <i class="resume__icon fab fa-linkedin"></i>LinkedIn
            </a>
          </li>
          <li>
            <a class="hover--grow" href="https://github.com/jenhedg" target="_blank">
              <i class="resume__icon fab fa-github"></i>Github
            </a>
          </li>
          <li>
            <a class="hover--grow" href="https://codepen.io/sparkleOven" target="_blank">
              <i class="resume__icon fab fa-codepen"></i>Codepen
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="hr" />
    <h2 class="resume__category">Summary</h2>
    <p
      class="resume__copy"
    >I have 5 years of experience planning, programming and implementing tech solutions. I have worked with companies in many industries where I have proven to be an effective collaborator on teams of all sizes. My diverse experience and background gives me the ability to analyze problems and craft effective solutions that help clients reach their goals.</p>
    <ul class="resume__techlist">
      <h3>Technical Background</h3>
      <li class="resume__techItem">HTML, CSS/SCSS/Less, Javascript, jQuery, React.js, Vue.js</li>
      <li class="resume__techItem">
        Dynamic templating&mdash; Jsx, Jsp Handlebars, Freemarker,
        Jinja
      </li>
      <li class="resume__techItem">Build tools and task runners&mdash; Webpack, NPM, Gulp, Grunt</li>
      <li class="resume__techItem">Version control&mdash; Git, Mercurial</li>
      <li class="resume__techItem">Agile Development&mdash;Jira, Confluence</li>
      <li class="resume__techItem">Dev Ops&mdash; CLI, Team City, Bamboo, Vercel</li>
      <li class="resume__techItem">CMS&mdash; Magnolia, Salesforce, Contentful, Gatsby</li>
    </ul>
    <h2 class="resume__category">Experience</h2>
    <div class="resume__pos">
      <h3 class="resume__title">
        Front-End Developer,
        <span>PetSmart</span>
      </h3>
      <h5 class="resume__date">Aug 2020 - present</h5>
      <p class="resume__copy">
        Partner with business teams to deliver eCommerce web experiences. Upgrade legacy codebase tech stack to improve site performance, accessibility and
        development environment. Update and maintain marketing content in Salesforce CommerceCloud CMS. Develop and document new processes to optimize front-end workflow and
        cross-team communication.
      </p>
    </div>
    <div class="resume__pos">
      <h3 class="resume__title">
        Front-End Developer,
        <span>Crescendo Collective</span>
      </h3>
      <h5 class="resume__date">Feb 2016 - Mar 2020</h5>
      <p class="resume__copy">
        Partnered with client-led and internal teams, including offshore QA
        teams. Programmed enterprise-level webapps, microsites and marketing
        tools. Integrated front-end with Magnolia CMS and Java backend. Led
        daily/weekly releases and deployments. Created documentation and style
        guides for both clients and internal teams.
      </p>
    </div>
    <div class="resume__pos">
      <h3 class="resume__title">
        Spanish Tutor,
        <span>Wyzant</span>
      </h3>
      <h5 class="resume__date">Jan 2015 - Dec 2015</h5>
      <p class="resume__copy">
        Independently tutored K-12 and college students with Spanish coursework
        and test preparation.
      </p>
    </div>
    <div class="resume__pos">
      <h3 class="resume__title">
        Weights & Measures Lab Assistant,
        <span>Gemological Institute of America</span>
      </h3>
      <h5 class="resume__date">Jul 2013 - Aug 2014</h5>
      <p class="resume__copy">
        Accurately and efficienty processed 400+ precious stones daily using
        various diagnostic testing technologies. Promoted to operate more
        specialized machinery and interpret results of more complex samples.
        Supported research team to develop and test proprietary diagnostic
        technologies. Worked independently and in team environement.
      </p>
    </div>
    <div class="resume__pos">
      <h3 class="resume__title">
        Student Advisor,
        <span>Jones International University</span>
      </h3>
      <h5 class="resume__date">Jul 2013 - Aug 2014</h5>
      <p class="resume__copy">
        Guided and mentored prospective and incoming students on academic for
        academic prep and success in an online-learning environment. Assisted
        student with registration, onboarding-procedures. Successfully
        maintained metric goals for quarterly student retention rates.
      </p>
    </div>
    <h2 class="resume__category">Education</h2>
    <div class="resume__ed">
      <h4 class="resume__degree">
        AA, Web Development &amp; Design,
        <span>MiraCosta College, 2015</span>
      </h4>
    </div>
    <div class="resume__ed">
      <h4 class="resume__degree">
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
