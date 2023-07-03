import "./assets/scss/base.scss";
import "vue-awesome-paginate/dist/style.css";

import { createApp } from "vue";
import VueAwesomePaginate from "vue-awesome-paginate";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductsView from "@/views/ProductsView.vue";

const routes = [
  { path: "/", component: HomeView, name: "home" },
  { path: "/products", component: ProductsView, name: "products" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(VueAwesomePaginate);
app.mount("#app");
