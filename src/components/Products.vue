<script setup lang="ts">
import Product from "@/components/Product.vue";
import ProductFilters from "@/components/ProductFilters.vue";
import {useProductApi} from "@/composables/useProductApi";
import {ref} from "vue";
import type {IFilter, IProduct} from "../../types";
import Pagination from "@/components/Pagination.vue";

const {getProducts, getProductsByFilters} = useProductApi();

const loadingProducts = ref<boolean>(false)

const productResponse = ref<IProduct[]>([]);
productResponse.value = await getProducts();

async function updateProduct(filters: IFilter) {
  loadingProducts.value = true;
  productResponse.value = await getProductsByFilters(filters);
  loadingProducts.value = false;
}


</script>

<template>
  <div class="products">
    <aside class="products-filters">
      <ProductFilters @search-products="updateProduct"/>
    </aside>
    <span v-if="productResponse.length === 0" class="products-empty">No products with that filter</span>
    <div v-else class="products-container"
         :class="loadingProducts && 'products-suspense-view'">
      <Pagination/>
      <section class="products-view">
        <Product v-for="product in productResponse" :key="product.id"
                 :title="product.title"
                 :images="product.images"
                 :price="product.price"
                 :description="product.description">
        </Product>
      </section>
    </div>
  </div>
</template>
