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
  <h5 class="category-title">Category</h5>
  <ul class="category-filter">
    <li v-for="filter in filters"
        :key="filter.id"
        class="filter"
        :class="{'filter-active': filter.id === activeItem}"
        @click="setActiveItem(filter.id)">
      {{ filter.name }}
    </li>
  </ul>
</template>