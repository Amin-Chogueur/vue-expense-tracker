<script setup>
import Expense from "./Expense.vue";
import Summery from "./Summery.vue";
import { useExpenseStore } from "../stores/expenceStore";
import NoTransaction from "./NoTransaction.vue";
import { computed, ref } from "vue";

const filter = ref("");

const expenseStore = useExpenseStore();

function setFilter(value) {
  filter.value = value;
}

const computedExpenses = computed(() => {
  if (filter.value === "") return expenseStore.expenses;

  return expenseStore.expenses.filter(
    (expense) => expense.type === filter.value
  );
});
</script>

<template>
  <NoTransaction v-if="expenseStore.expenses.length === 0" />
  <div v-else class="space-y-3 mb-4 px-3">
    <Summery @set-filter="setFilter" />
    <Expense
      v-for="expense in computedExpenses"
      :key="expense.id"
      :expense="expense"
    />
  </div>
</template>
