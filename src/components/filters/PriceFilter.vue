<script setup lang="ts">
import type {IPriceFilter} from "../../../types";
import {useForm} from "vee-validate";
import * as yup from 'yup';
import {computed} from "vue";

const emit = defineEmits<{
  changePrice: [price: IPriceFilter],
}>()

const {errors, handleSubmit, defineInputBinds} = useForm({
  validationSchema: yup.object({
    price_min: yup.number().transform((value => isNaN(value) ? null : value))
        .notRequired().moreThan(0, "Invalid Price"),
    price_max: yup.number().transform((value => isNaN(value) ? null : value))
        .notRequired().moreThan(0, "Invalid price"),
  })
})

const price_min = defineInputBinds('price_min');
const price_max = defineInputBinds('price_max');

const onSubmit = handleSubmit(values => {
  emit('changePrice', <IPriceFilter>values)
})

const isDisabled = computed(() => {
  return !(price_min.value.value || price_max.value.value);
})
</script>

<template>
  <h5 class="price-title">Price</h5>
  <form @submit.prevent="onSubmit" class="price-form">
    <div class="price-input">
      <label for="price_min">Min</label>
      <input id="price_min" type="number" name="price_min" v-bind="price_min"/>
    </div>
    <div class="price-error">{{ errors.price_min }}</div>
    <div class="price-input">
      <label for="price_max">Max</label>
      <input id="price_max" type="number" name="price_max" v-bind="price_max"/>
    </div>
    <div class="price-error">{{ errors.price_max }}</div>
    <button :disabled="isDisabled" class="price-submit" type="submit">Search
    </button>
  </form>
</template>