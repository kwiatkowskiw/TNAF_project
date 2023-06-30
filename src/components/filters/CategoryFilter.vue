<script setup lang="ts">
import type {ICategory} from "../../../types";
import {ref} from "vue";

const props = defineProps<{
  filters: ICategory[],
}>()

const emit = defineEmits<{
  changeCategory: [id: number],
}>()

const activeItem = ref<number>(null);

function setActiveItem(id) {
  activeItem.value = id;
  emit('changeCategory', id);
}

</script>


<template>
  <ul class="category-filter">
    <h5>Category</h5>
    <li v-for="filter in filters"
        :key="filter.id"
        class="filter"
        :class="{'filter-active': filter.id === activeItem}"
        @click="setActiveItem(filter.id)">
      {{ filter.name }}
    </li>
  </ul>
</template>