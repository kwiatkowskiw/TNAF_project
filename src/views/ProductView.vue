<script setup lang="ts">
import ProductDetails from "@/components/ProductDetails.vue";
import Spinner from "@/components/Spinner.vue";
</script>

<template>
  <Suspense>
    <ProductDetails/>
    <template #fallback>
      <Spinner/>
    </template>
  </Suspense>
</template>


