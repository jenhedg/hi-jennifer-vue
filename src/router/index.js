import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/work",
    name: "Work",
    component: () => import(/* webpackChunkName: "work" */ "../views/Work.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () =>
      import(/* webpackChunkName: "resume" */ "../views/Resume.vue"),
  },
  // {
  //   path: "/contact",
  //   name: "Contact",
  //   component: () =>
  //     import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
