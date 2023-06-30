<script setup lang="ts">
import Product from "@/components/Product.vue";
import ProductFilters from "@/components/ProductFilters.vue";
import {useProductApi} from "@/composables/useProductApi";
import {ref} from "vue";
import type {IProduct} from "../../types";

const {getProducts, getProductsByCategory} = useProductApi();

const loadingProducts = ref<boolean>(false)

const productResponse = ref<IProduct[]>([]);
productResponse.value = await getProducts();

async function updateProduct(categoryId: number) {
  loadingProducts.value = true;
  productResponse.value = await getProductsByCategory(categoryId);
  console.log(productResponse.value)
  loadingProducts.value = false;
}


</script>

<template>
  <div class="products">
    <aside class="products-filters">
      <ProductFilters @change-category="updateProduct"/>
    </aside>
    <section class="products-view" :class="loadingProducts && 'products-suspense-view'">
      <span v-if="productResponse.length == 0" class="products-empty">No products with that filter</span>
      <Product v-for="product in productResponse" :key="product.id"
               :title="product.title"
               :images="product.images"
               :price="product.price"
               :description="product.description">
      </Product>
    </section>
  </div>
</template>
