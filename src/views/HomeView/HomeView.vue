<template>
  <div class="home">
    <h2 class="home-headline">Welcome to design Platzi Fake Store Api</h2>
    <img class="home-image" src="@/assets/img/home.png" alt="home-image"/>
    <div class="home-items">
      <div class="home-item">
        <div class="item-header">
          <img class="item-icon" src="@/assets/img/product.svg" alt="icon-product"/>
          <h3 class="item-title">Products</h3>
        </div>
        <span class="item-description">Get existing products. Select with categories</span>
      </div>
      <div class="home-item">
        <div class="item-header">
          <img class="item-icon" src="@/assets/img/category.svg" alt="icon-category"/>
          <h3 class="item-title">Categories</h3>
        </div>
        <span class="item-description">Get existing categories</span>
      </div>
      <div class="home-item">
        <div class="item-header">
          <img class="item-icon" src="@/assets/img/user.svg" alt="icon-user"/>
          <h3 class="item-title">Users</h3>
        </div>
        <span class="item-description">Get users to contact with specific user</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/homeView";
</style>