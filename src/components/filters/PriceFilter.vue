<script setup lang="ts">
import type {IPriceFilter} from "../../../types";
import {useForm} from "vee-validate";
import * as yup from 'yup';
import {watchEffect} from "vue";

const emit = defineEmits<{
  changePrice: [price: IPriceFilter],
}>()

const {errors, defineInputBinds} = useForm({
  validationSchema: yup.object({
    price_min: yup.number().transform((value => isNaN(value) ? null : value)).notRequired()
        .moreThan(0, 'Invalid Type'),
    price_max: yup.number().transform((value => isNaN(value) ? null : value)).notRequired()
        .moreThan(0, 'Invalid Type')
  })
})

const priceMin = defineInputBinds('price_min');
const priceMax = defineInputBinds('price_max');

watchEffect(() => {
  if(priceMin.value.value <= 0 || priceMax.value.value <= 0){
    emit('changePrice', <IPriceFilter>{price_min: null, price_max: null})
  }
  else if(priceMin.value.value > 0 && priceMax.value.value > 0){
    emit('changePrice', <IPriceFilter>{price_min: priceMin.value.value, price_max: priceMax.value.value})
  }
})


</script>

<template>
  <h5 class="price-title">Price</h5>
  <form class="price-form">
    <div class="price-input">
      <label for="price_min">Min</label>
      <input id="price_min" type="number" name="price_min" v-bind="priceMin"/>
    </div>
    <div class="price-error">{{ errors.price_min }}</div>
    <div class="price-input">
      <label for="price_max">Max</label>
      <input id="price_max" type="number" name="price_max" v-bind="priceMax"/>
    </div>
    <div class="price-error">{{ errors.price_max }}</div>
  </form>
</template>