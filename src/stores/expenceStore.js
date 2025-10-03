import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useExpenseStore = defineStore("expenses", () => {
  // state
  const expenses = ref(
    JSON.parse(localStorage.getItem("expenses")) || [
      {
        id: 1,
        title: "Groceries",
        type: "Expense",
        description: "Weekly supermarket shopping",
        amount: 85.5,
      },
      {
        id: 12,
        title: "Rent",
        type: "Expense",
        description: "Monthly apartment rent",
        amount: 750,
      },

      {
        id: 17,
        title: "Salary",
        type: "Income",
        description: "My monthly salary ",
        amount: 2500,
      },
    ]
  );

  // getters
  const balance = computed(() =>
    expenses.value.reduce(
      (acu, cur) => acu + (cur.type === "Expense" ? -cur.amount : cur.amount),
      0
    )
  );

  const income = computed(() =>
    expenses.value.reduce(
      (acu, cur) => acu + (cur.type === "Income" ? cur.amount : 0),
      0
    )
  );

  const expense = computed(() =>
    expenses.value.reduce(
      (acu, cur) => acu + (cur.type === "Expense" ? cur.amount : 0),
      0
    )
  );

  // actions
  function addTransaction(newTransaction) {
    expenses.value.unshift(newTransaction);
  }

  function deleteExpense(id) {
    expenses.value = expenses.value.filter((expense) => expense.id !== id);
  }

  // persist to localStorage (like a built-in watch)
  watch(
    expenses,
    (newVal) => {
      localStorage.setItem("expenses", JSON.stringify(newVal));
    },
    { deep: true }
  );

  return {
    expenses,
    balance,
    income,
    expense,
    addTransaction,
    deleteExpense,
  };
});
