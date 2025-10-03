<script setup>
import { defineProps } from "vue";

defineProps({
  balance: {
    type: Number,
    default: 0,
  },
});
</script>
<template>
  <div class="p-3">
    <h2 class="text-2xl">YOUR BALANCE</h2>
    <span class="text-2xl font-bold">${{ balance }}</span>
  </div>
</template>
