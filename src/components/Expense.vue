<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
import { useExpenseStore } from "../stores/expenceStore";
import { useToast } from "vue-toastification";
// state

const toast = useToast();
const expenseStore = useExpenseStore();

defineProps({
  expense: Object,
});

const showDescription = ref(false);

function handleDeleteExpense(id) {
  const confirm = window.confirm(
    "Are you sue you want to delete this expense?"
  );
  if (confirm) {
    expenseStore.deleteExpense(id);
    toast.success("transaction deleted successfully");
  }
}

function toggleShowDescription() {
  showDescription.value = !showDescription.value;
}
</script>
<template>
  <div
    class="relative bg-gray-200 shadow p-3 rounded border-r-4"
    :class="
      expense.type === 'Expense' ? 'border-r-red-500' : 'border-r-green-500'
    "
  >
    <button
      @click="handleDeleteExpense(expense.id)"
      class="absolute right-[-30px] bg-red-500 h-5 w-5 flex justify-center items-center text-white cursor-pointer"
    >
      X
    </button>
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <button
          @click="toggleShowDescription"
          class="bg-blue-500 w-5 h-5 cursor-pointer rounded-full flex justify-center items-center text-white"
        >
          {{ showDescription ? "-" : "+" }}
        </button>
        <p>{{ expense.title }}</p>
      </div>

      <span
        >{{ expense.type === "Expense" ? "-" : "" }}${{ expense.amount }}</span
      >
    </div>
    <p v-if="showDescription" class="text-gray-700 mt-3 pl-6">
      {{ expense.description }}
    </p>
  </div>
</template>
