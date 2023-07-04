<script setup lang="ts">
import {ref, watch} from "vue";
import {VueAwesomePaginate} from "vue-awesome-paginate";

const props = defineProps<{
  productsLength: number;
}>()

const emit = defineEmits<{
  changePage: [page: number],
}>()

const currentPage = ref<number>(1);

const onClickHandler = (page: number) => {
  emit('changePage', page);
};

watch(() => props.productsLength, (newValue, oldValue) => {
  if(newValue !== oldValue){
    currentPage.value = 1;
  }
});
</script>
<template>
  <div>
    <vue-awesome-paginate
        :total-items="productsLength"
        :items-per-page="6"
        v-model="currentPage"
        :on-click="onClickHandler"
    />
  </div>
</template>