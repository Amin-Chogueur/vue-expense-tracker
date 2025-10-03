<script setup>
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";
import { useExpenseStore } from "./stores/expenceStore";
import Balance from "./components/Balance.vue";

const expenseStore = useExpenseStore();
</script>

<template>
  <div class="bg-gray-100 min-h-screen max-w-xl mx-auto px-5">
    <!-- Navbar -->
    <NavBar />
    <Balance :balance="expenseStore.balance" />
    <div class="p-2">
      <RouterView />
    </div>
  </div>
</template>
