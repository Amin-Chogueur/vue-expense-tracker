<template>
  <div class="flex flex-col items-center justify-center text-center py-12 px-4">
    <div class="bg-gray-200 p-6 rounded-2xl shadow-md max-w-md">
      <!-- Icon -->
      <div class="flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <!-- Message -->
      <h2 class="text-xl font-semibold text-gray-700">No Transactions Found</h2>
      <p class="text-gray-500 mt-2">
        You don’t have any recorded expenses yet. Add your first transaction to
        get started!
      </p>
    </div>
  </div>
</template>
