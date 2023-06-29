<script setup lang="ts">
import Product from "@/components/Product.vue";
import {useProductApi} from "@/composables/useProductApi";
import {ref} from "vue";
import type {IProduct} from "../../types";

const {getProducts} = useProductApi();
const productResponse = ref<IProduct[]>([]);
productResponse.value = await getProducts();
</script>


<template>
  <div class="products">
    <Product v-for="product in productResponse" :key="product.id"
             :title="product.title"
             :images="product.images"
             :price="product.price"
             :description="product.description">
    </Product>
  </div>
</template>
