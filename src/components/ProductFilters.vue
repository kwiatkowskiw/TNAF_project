<script setup lang="ts">
import {useProductApi} from "@/composables/useProductApi";
import CategoryFilter from "@/components/filters/CategoryFilter.vue";
import {reactive, ref} from "vue";
import {ICategory, IFilter, IPriceFilter} from "../../types";
import PriceFilter from "@/components/filters/PriceFilter.vue";

const emit = defineEmits<{
  searchProducts: [filters: IFilter],
}>()

const filters = reactive<IFilter>({price_min: null, price_max: null, categoryId: null});

const {getCategories} = useProductApi();
const categoryResponse = ref<ICategory[]>([]);
categoryResponse.value = await getCategories();

function changeCategory(categoryId: number | null) {
  filters.categoryId = categoryId;
  emit('searchProducts', filters);
}

function changePrice(price: IPriceFilter) {
  filters.price_min = price.price_min;
  filters.price_max = price.price_max;
  emit('searchProducts', filters);
}

</script>


<template>
  <h4 class="filter-title" :style="{textAlign: 'center'}">Filters</h4>
  <CategoryFilter :filters="categoryResponse" @change-category="changeCategory"/>
  <PriceFilter @change-price="changePrice"/>
</template>
