<script setup lang="ts">
import {useProductApi} from "@/composables/useProductApi";
import {ref, Ref} from "vue";
import {Product} from "@/composables/modal/interfaces";

const {getProducts} = useProductApi();
const productResponse: Ref<Product[]> = ref([]);
productResponse.value = await getProducts();
</script>


<template>
  <div class="products">
    <div class="product">
      <img class="product-image" src="public/favicon.ico" alt="product-image"/>
      <h3>Watch</h3>
      <p>Lorem ipssum is simply</p>
      <h3>$100.00</h3>
      <button class="product-btn" type="button">Details</button>
    </div>
    <div class="product">
      <img class="product-image" src="public/favicon.ico" alt="product-image"/>
      <h3>Watch</h3>
      <p>Lorem ipssum is simply</p>
      <h3>$100.00</h3>
      <button class="product-btn" type="button">Details</button>
    </div>
    <div class="product">
      <img class="product-image" src="public/favicon.ico" alt="product-image"/>
      <h3>Watch</h3>
      <p>Lorem ipssum is simply</p>
      <h3>$100.00</h3>
      <button class="product-btn" type="button">Details</button>
    </div>
    <div class="product">
      <img class="product-image" src="public/favicon.ico" alt="product-image"/>
      <h3>Watch</h3>
      <p>Lorem ipssum is simply</p>
      <h3>$100.00</h3>
      <button class="product-btn" type="button">Details</button>
    </div>
    <div class="product">
      <img class="product-image" src="public/favicon.ico" alt="product-image"/>
      <h3>Watch</h3>
      <p>Lorem ipssum is simply</p>
      <h3>$100.00</h3>
      <button class="product-btn" type="button">Details</button>
    </div>
  </div>
</template>
