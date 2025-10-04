<script setup>
import { reactive } from "vue";
import { useExpenseStore } from "../../stores/expenceStore";
import router from "../index";
import { useToast } from "vue-toastification";
// state

const toast = useToast();
const expenseStore = useExpenseStore();

const transactionData = reactive({
  title: "",
  type: "",
  description: "",
  amount: "",
});

// methods
function addTransaction() {
  if (
    transactionData.title.trim() === "" ||
    transactionData.type === "" ||
    transactionData.amount === ""
  ) {
    toast.error("Please fill out the necessary fields marked with *");
    return;
  }
  const newTransaction = {
    id: Date.now(),
    title: transactionData.title,
    description: transactionData.description,
    type: transactionData.type,
    amount: Number(transactionData.amount),
  };
  expenseStore.addTransaction(newTransaction);
  toast.success("transaction added successfully");
  router.push("/");
  transactionData.description = "";
  transactionData.title = "";
  transactionData.type = "";
  transactionData.amount = "";
}
</script>

<template>
  <div class="flex justify-center items-center bg-gray-100">
    <div class="bg-white shadow-xl rounded-2xl p-5 w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-8">
        New Transaction
      </h1>

      <form @submit.prevent="addTransaction" class="space-y-6">
        <!-- Title -->
        <div>
          <label class="block text-gray-700 font-medium mb-2"
            >Title <span class="text-red-600">*</span></label
          >
          <input
            v-model="transactionData.title"
            type="text"
            placeholder="e.g. Groceries"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Type -->
        <div>
          <p class="text-gray-700 font-medium mb-2">
            Type <span class="text-red-600">*</span>
          </p>
          <div class="flex items-center gap-6">
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                v-model="transactionData.type"
                type="radio"
                value="Income"
                class="text-blue-500 focus:ring-blue-500"
              />
              <span>Income</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                v-model="transactionData.type"
                type="radio"
                value="Expense"
                class="text-red-500 focus:ring-red-500"
              />
              <span>Expense</span>
            </label>
          </div>
        </div>
        <!-- amount -->
        <div>
          <label class="block text-gray-700 font-medium mb-2"
            >Amount <span class="text-red-600">*</span></label
          >
          <input
            v-model="transactionData.amount"
            type="number"
            placeholder="$..."
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <!-- Description -->
        <div>
          <label class="block text-gray-700 font-medium mb-2"
            >Description</label
          >
          <textarea
            v-model="transactionData.description"
            placeholder="e.g. Buy bread and milk"
            rows="3"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <!-- Submit button -->
        <button
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200"
        >
          + Add Transaction
        </button>
      </form>
    </div>
  </div>
</template>
