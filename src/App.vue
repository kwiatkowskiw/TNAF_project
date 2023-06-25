<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <header>
      <img class="logo-image" src="./assets/logo.svg" alt="logo"/>
      <nav>
        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">Contact</a>
      </nav>
    </header>
    <main>
      <RouterView/>
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