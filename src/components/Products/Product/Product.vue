<script setup lang="ts">

const props = defineProps<{
  id: number,
  title: string,
  images: string[],
  price: number,
  description: string
}>()

</script>

<template>
  <div class="product">
    <img class="product-image" :src="images[0]" :alt="title"/>
    <h4 class="product-title">{{ title }}</h4>
    <p class="product-description">{{ description }}</p>
    <h5 class="product-price">{{ price }}$</h5>
    <router-link class="product-btn-content" :to="{name: 'product', params: {id: id}}">
      <button class="product-btn" type="button">Details</button>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import "Product";
</style>