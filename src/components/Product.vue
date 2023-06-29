<script setup lang="ts">

const props = defineProps<{
  title: string,
  images: string[],
  price: number,
  description: string
}>()

</script>

<template>
  <div class="product">
    <img class="product-image" :src="images[0]" :alt="title"/>
    <h3>{{title}}</h3>
    <p>{{description}}</p>
    <h3>{{price}}$</h3>
    <button class="product-btn" type="button">Details</button>
  </div>
</template>