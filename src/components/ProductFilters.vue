<script setup lang="ts">
import {useProductApi} from "@/composables/useProductApi";
import CategoryFilter from "@/components/filters/CategoryFilter.vue";
import {ref} from "vue";
import {ICategory} from "../../types";

const emit = defineEmits<{
  changeCategory: [id: number],
}>()

const {getCategories} = useProductApi();
const categoryResponse = ref<ICategory[]>([]);
categoryResponse.value = await getCategories();

function changeCategory(categoryId: number){
  emit('changeCategory', categoryId);
}

</script>


<template>
  <h4 class="filter-title" :style="{textAlign: 'center'}">Filters</h4>
  <CategoryFilter :filters="categoryResponse" @change-category="changeCategory"/>
</template>
