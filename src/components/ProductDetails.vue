<script setup lang="ts">
import {useRoute} from "vue-router";
import {useProductApi} from "@/composables/useProductApi";
import type {IProduct, IProductPromise} from "../../types";
import {ref} from "vue";

const {getProduct} = useProductApi();

const route = useRoute();

const productResponse: IProductPromise = await getProduct(route.params.id);
const product = ref<IProduct>(productResponse.data[0]);

const activeImageId = ref<number>(0);
const currentImage = ref<string>(product.value.images[0])

function changeItem(id: number, imageUrl: string) {
  activeImageId.value = id;
  currentImage.value = imageUrl;
}

</script>

<template>
  <div class="product-details">
    <div class="product-gallery">
      <img :src="currentImage" class="product-main-image" alt="main-image"/>
    </div>
    <div class="product-details-container">
      <h2 class="product-details-title">{{ product.title }}</h2>
      <h3 class="product-details-price">{{ product.price }}$</h3>
      <div class="product-details-desc">{{ product.description }}</div>
      <div class="product-images">
        <template v-for="(image, index) of product.images" :key="`image${index}`">
          <img class="image-item"
               :class="{'image-active': index == activeImageId}"
               @click="changeItem(index, image)"
               :src="image"
               alt="product-image"/>
        </template>
      </div>
    </div>
  </div>
</template>