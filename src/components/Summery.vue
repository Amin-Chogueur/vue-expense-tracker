<script setup>
import { useExpenseStore } from "../stores/expenceStore";
import { defineEmits } from "vue";

const emit = defineEmits(["set-filter"]);

const expenseStore = useExpenseStore();
</script>
<template>
  <div class="flex justify-center items-center bg-gray-200 shadow mb-6">
    <div
      @click="emit('set-filter', '')"
      class="cursor-pointer flex-1 p-3 flex flex-col justify-center items-center gap-2 rounded-"
    >
      <p>ALL</p>
    </div>
    <div
      @click="emit('set-filter', 'Income')"
      class="cursor-pointer flex-1 p-3 flex flex-col justify-center items-center gap-2 border-l-1 border-r-1 rounded-"
    >
      <p>INCOME</p>
      <span class="text-green-600">+${{ expenseStore.income }}</span>
    </div>
    <div
      @click="emit('set-filter', 'Expense')"
      class="cursor-pointer flex-1 p-3 flex flex-col justify-center items-center gap-2 rounded"
    >
      <p>EXPENSE</p>
      <span class="text-red-600">-${{ expenseStore.expense }}</span>
    </div>
  </div>
</template>
