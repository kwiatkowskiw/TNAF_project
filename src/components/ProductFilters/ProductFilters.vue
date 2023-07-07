<script setup lang="ts">
import {useProductApi} from "@/composables/useProductApi";
import CategoryFilter from "@/components/ProductFilters/filters/CategoryFilter/CategoryFilter.vue";
import {onBeforeMount, reactive, ref} from "vue";
import type {ICategory, IFilter} from "../../../types";
import PriceFilter from "@/components/ProductFilters/filters/PriceFilter/PriceFilter.vue";

const emit = defineEmits<{
  searchProducts: [filters: IFilter],
}>()

const {getCategories} = useProductApi();
const categoryResponse = await getCategories();
const category = ref<ICategory[]>(categoryResponse.data);

onBeforeMount(async () => {
  const categoryResponse = await getCategories();
  if (categoryResponse) {
    category.value = categoryResponse.data;
  }
})

const filters = reactive<IFilter>({price_min: undefined, price_max: undefined, categoryId: undefined});

function changeCategory(categoryId: number) {
  filters.categoryId = `category.id=${categoryId}`;
  emit('searchProducts', filters);
}

function changePriceMin(price: string) {
  if(price === ""){
    filters.price_min = undefined
  }
  else if(+price < 0){
    filters.price_min = `price_gte=undefined`
  }
  else{
    filters.price_min = `price_gte=${price}`
  }
  emit('searchProducts', filters);
}

function changePriceMax(price: string) {
  if(price === ""){
    filters.price_max = undefined
  }
  else if(+price < 0){
    filters.price_max = `price_lte=undefined`
  }
  else{
    filters.price_max = `price_lte=${price}`
  }
  emit('searchProducts', filters);
}

</script>

<template>
  <div class="products-filters">
    <h4 class="filter-title" :style="{textAlign: 'center'}">Filters</h4>
    <CategoryFilter :filters="category" @change-category="changeCategory"/>
    <PriceFilter @change-min="changePriceMin" @change-max="changePriceMax"/>
  </div>
</template>

<style scoped lang="scss">
@import "ProductFilters";
</style>
