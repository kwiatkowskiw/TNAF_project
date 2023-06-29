<script setup lang="ts">
import Spinner from "@/components/Spinner.vue";
import Products from "@/components/Products.vue";
</script>

<template>
  <Suspense>
    <Products/>
    <template #fallback>
      <Spinner/>
    </template>
  </Suspense>
</template>