<script setup lang="ts">
import type {IPriceFilter} from "../../../types";
import {ref} from "vue";

const emit = defineEmits<{
  changePrice: [price: IPriceFilter],
}>()

const form = ref<IPriceFilter>({price_min: null, price_max: null});

</script>

<template>
  <h5 class="price-title">Price</h5>
  <form @submit.prevent="emit('changePrice', form)" class="price-form">
    <div class="price-input">
      <label for="price_min">Min</label>
      <input id="price_min" type="number" name="price_min" v-model="form.price_min"/>
    </div>
    <div class="price-input">
      <label for="price_max">Max</label>
      <input id="price_max" type="number" name="price_max" v-model="form.price_max"/>
    </div>
    <button class="price-submit" type="submit">Search</button>
  </form>
</template>