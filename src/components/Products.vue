<script setup lang="ts">
import Product from "@/components/Product.vue";
import ProductFilters from "@/components/ProductFilters.vue";
import {useProductApi} from "@/composables/useProductApi";
import {ref} from "vue";
import type {IFilter, IProducts} from "../../types";
import Pagination from "@/components/Pagination.vue";

const {getProducts, filterProducts} = useProductApi();

const products = ref<IProducts>({data: [], total: 0});
products.value = await getProducts();
const currentFilters = ref<IFilter>();

const loadingProducts = ref<boolean>(false)

async function filter(filters: IFilter) {
  loadingProducts.value = true;
  currentFilters.value = filters;
  products.value = await filterProducts(currentFilters.value)
  loadingProducts.value = false;
}

async function nextPage(page: number) {
  loadingProducts.value = true;
  products.value = await filterProducts(currentFilters.value, page);
  loadingProducts.value = false;
}
</script>

<template>
  <div class="products">
    <aside class="products-filters">
      <ProductFilters @search-products="filter"/>
    </aside>
    <template v-if="products.data.length > 0">
      <div class="products-container" :class="loadingProducts && 'products-suspense-view'">
        <section class="products-pagination">
          <Pagination :productsLength="products.total!" @change-page="nextPage"/>
        </section>
        <section class="products-view">
          <Product v-for="product in products.data" :key="product.id"
                   :id="product.id"
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
