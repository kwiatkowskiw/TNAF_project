<script setup lang="ts"></script>

<template>
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
  <footer></footer>
</template>