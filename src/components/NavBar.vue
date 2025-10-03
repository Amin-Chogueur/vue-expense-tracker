<script setup>
import { RouterLink, useRoute } from "vue-router";
function isActive(path) {
  const currentRout = useRoute();
  return currentRout.path === path;
}
</script>
<template>
  <nav class="bg-gray-100 shadow-md px-6 py-2 mb-6">
    <h1 class="text-center text-blue-600 font-bold text-2xl mb-1">
      Expense Tracker
    </h1>
    <ul>
      <li class="text-right" v-if="isActive('/')">
        <RouterLink
          to="/new"
          class="text-sm text-white bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-md transition"
        >
          + New Transaction
        </RouterLink>
      </li>
      <li class="text-left" v-else-if="isActive('/new')">
        <RouterLink
          to="/"
          class="text-sm text-blue-600 hover:text-blue-700 transition"
        >
          &larr; Transaction History
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
