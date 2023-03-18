import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.scss";
import App from "./App.vue";

import Home from "./views/Home.vue";
import Repo from "./views/Repo.vue";
import SingleRepo from "./views/SingleRepo.vue";
import NotFound from "./views/NotFound.vue";

import { addIcons, OhVueIcon } from "oh-vue-icons";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaQuora,
  FaTwitter,
  FaYoutube,
} from "oh-vue-icons/icons";

// register the icons
addIcons(
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaQuora,
  FaTwitter,
  FaYoutube
);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/repo",
      name: "Project",
      component: Repo,
    },
    {
      path: "/repo/:id",
      name: "SingleRepo",
      component: SingleRepo,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
      props: true,
    },
  ],
});

createApp(App).component("v-icon", OhVueIcon).use(router).mount("#app");
