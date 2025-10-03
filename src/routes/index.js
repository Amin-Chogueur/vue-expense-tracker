import { createRouter, createWebHistory } from "vue-router";
import AddTransaction from "./views/AddTransaction.vue";
import TransactionHistory from "./views/TransactionHistory.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Transaction-Hostory",
      component: TransactionHistory,
    },
    {
      path: "/new",
      name: "Add-transaction",
      component: AddTransaction,
    },
  ],
  // 👇 this fixes the scroll issue
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // when using back/forward buttons
    } else {
      return { top: 0 }; // always scroll to top on navigation
    }
  },
});

export default router;
