import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tictactoe',
      name: 'tictactoe',
      component: () => import('@/views/TicTacToe.vue'),
    },
    {
      path: '/rockpaperscissors',
      name: 'rockpaperscissors',
      component: () => import('@/views/RockPaperScissors.vue'),
    },
  ],
});

export default router;
