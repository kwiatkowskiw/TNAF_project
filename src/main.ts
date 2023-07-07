import "./assets/scss/base.scss";
import "vue-awesome-paginate/dist/style.css";

import { createApp } from "vue";
import VueAwesomePaginate from "vue-awesome-paginate";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView/HomeView.vue";
import ProductsView from "@/views/ProductsView/ProductsView.vue";
import ProductView from "@/views/ProductView.vue";

const routes = [
  { path: "/", component: HomeView, name: "home" },
  { path: "/products", component: ProductsView, name: "products" },
  { path: "/products/:id", component: ProductView, name: "product" },
];

const router = createRouter({
  history: createWebHistory("/TNAF_project/"),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(VueAwesomePaginate);
app.mount("#app");
