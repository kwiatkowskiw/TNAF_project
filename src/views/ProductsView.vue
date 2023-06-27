<script setup lang="ts">
import {useProductApi} from "@/composables/useProductApi";
import {Product} from "@/composables/modal/interfaces";
import {ref, Ref} from "vue";

const {getProducts} = useProductApi();
const productResponse: Ref<Product[]> = ref([]);
productResponse.value = await getProducts();
</script>

<template>
  {{ productResponse }}
</template>