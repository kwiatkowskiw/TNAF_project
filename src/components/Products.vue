<script setup lang="ts">
import Product from "@/components/Product.vue";
import ProductFilters from "@/components/ProductFilters.vue";
import {useProductApi} from "@/composables/useProductApi";
import {onBeforeMount, ref} from "vue";
import type {IFilter, IProduct} from "../../types";
import Pagination from "@/components/Pagination.vue";

const {getProducts, filterProducts, filterProductsByPage} = useProductApi();
const products = ref<IProduct[]>([]);
const lengthProducts = ref<number>(0);
const limitOfProducts: number = 6;
const currentPageNumber = ref<number>(1);

onBeforeMount(async () => {
  products.value = await getProducts();
  lengthProducts.value = products.value.length;
  if (lengthProducts.value > limitOfProducts) {
    products.value = products.value.slice(0, limitOfProducts);
  }
})

const currentFilters = ref<IFilter | null>(null);
const loadingProducts = ref<boolean>(false)

async function filter(filters: IFilter) {
  currentPageNumber.value = 1;
  loadingProducts.value = true;
  currentFilters.value = filters;
  products.value = await filterProducts(filters);
  if (products) {
    lengthProducts.value = products.value.length;

    if (lengthProducts.value > limitOfProducts) {
      products.value = products.value.slice(0, limitOfProducts);
    }
  }
  loadingProducts.value = false;
}

async function nextPage(page: number) {
  loadingProducts.value = true;
  products.value = await filterProductsByPage(currentFilters.value, page);
  loadingProducts.value = false;
}


</script>

<template>
  <div class="products">
    <aside class="products-filters">
      <ProductFilters @search-products="filter"/>
    </aside>
    <template v-if="products.length > 0">
      <div class="products-container" :class="loadingProducts && 'products-suspense-view'">
        <section class="products-pagination">
          <Pagination :currentPage="currentPageNumber" :products-length="lengthProducts" @change-page="nextPage"/>
        </section>
        <section class="products-view">
          <Product v-for="product in products" :key="product.id"
                   :title="product.title"
                   :images="product.images"
                   :price="product.price"
                   :description="product.description">
          </Product>
        </section>
      </div>
    </template>
    <template v-else>
      <span class="products-empty">No products with that filter</span>
    </template>
  </div>
</template>
