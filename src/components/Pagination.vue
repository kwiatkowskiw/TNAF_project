<script setup lang="ts">

const props = defineProps<{
  productsLength: number;
  currentPage: number;
}>()

const emit = defineEmits<{
  changePage: [page: number],
}>()

const onClickHandler = (page: number) => {
  emit('changePage', page);
};
</script>

<template>
  <vue-awesome-paginate
      :total-items="productsLength"
      :items-per-page="6"
      v-model="currentPage"
      :on-click="onClickHandler"
  />
</template>