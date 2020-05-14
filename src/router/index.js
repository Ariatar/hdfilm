import Vue from "vue";
import VueRouter from "vue-router";
import AuthConfirm from "../views/auth/AuthConfirm";
import AuthRegister from "../views/auth/AuthRegister";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "AuthRegister",
    component: AuthRegister,
  },
  {
    path: "/confirm",
    name: "AuthConfirm",
    component: AuthConfirm,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
