<template>
  <div class="wrapper">
    <header>
      <img class="logo-image" src="./assets/img/logo.svg" alt="logo"/>
      <nav class="navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div class="footer-info">
        <h3>TNAF Project</h3>
        <span>designed by Wiktor Kwiatkowski</span>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
</script>