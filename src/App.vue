<script setup lang="ts">
import Spinner from "@/components/Spinner.vue";
</script>
<template>
  <div class="wrapper">
    <header>
      <img class="logo-image" src="./assets/img/logo.svg" alt="logo"/>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
        <a href="/">Contact</a>
      </nav>
    </header>
    <main>
      <router-view v-slot="{Component}">
        <Suspense timeout="0">
          <template #default>
            <component :is="Component" :key="$route.path"/>
          </template>
          <template #fallback>
            <Spinner/>
          </template>
        </Suspense>
      </router-view>
    </main>
    <footer>
      <div class="footer-info">
        <h3>TNAF Project</h3>
        <span>designed by Wiktor Kwiatkowski</span>
      </div>
      <div class="footer-logos">
        <i class="gg-instagram"></i>
        <i class="gg-facebook"></i>
      </div>
    </footer>
  </div>
</template>