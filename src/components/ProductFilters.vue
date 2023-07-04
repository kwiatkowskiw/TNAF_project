<script setup lang="ts">
import {useProductApi} from "@/composables/useProductApi";
import CategoryFilter from "@/components/filters/CategoryFilter.vue";
import {onBeforeMount, reactive, ref} from "vue";
import type {ICategories, IFilter} from "../../types";
import PriceFilter from "@/components/filters/PriceFilter.vue";

const emit = defineEmits<{
  searchProducts: [filters: IFilter],
}>()

const category = ref<ICategories>({data: [], total: 0});
const {getCategories} = useProductApi();

onBeforeMount(async () => {
  const categoryResponse = await getCategories();
  if (categoryResponse) {
    category.value = categoryResponse;
  }
})

const filters = reactive<IFilter>({price_min: undefined, price_max: undefined, categoryId: undefined});

function changeCategory(categoryId: number) {
  filters.categoryId = `category.id=${categoryId}`;
  emit('searchProducts', filters);
}

function changePriceMin(price: number) {
  if (!price) {
    filters.price_min = undefined;
    emit('searchProducts', filters);
  } else {
    filters.price_min = `price_gte=${price}`;
    emit('searchProducts', filters);
  }

}

function changePriceMax(price: number) {
  if (!price) {
    filters.price_max = undefined;
    emit('searchProducts', filters);
  } else {
    filters.price_max = `price_lte=${price}`;
    emit('searchProducts', filters);
  }
}

</script>


<template>
  <h4 class="filter-title" :style="{textAlign: 'center'}">Filters</h4>
  <CategoryFilter :filters="category.data" @change-category="changeCategory"/>
  <PriceFilter @change-min="changePriceMin" @change-max="changePriceMax"/>
</template>
