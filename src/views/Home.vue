<template>
  <main class="py-20 lg:pt-40 flex flex-col items-center">
    <h1 class="font-bold text-4xl mb-5">Mini Games</h1>
    <ConsoleIcon class="w-48 mb-10" />
    <h1 class="mb-10 font-bold text-xl">Choose a game</h1>
    <div class="space-y-4">
      <div v-for="game in games" :key="game.id">
        <GameCard :to="game.route" :title="game.title" :icon="game.icon" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import GameCard from '@/components/GameCard.vue';
import ConsoleIcon from '@/components/icons/ConsoleIcon.vue';

const games = [
  {
    id: 1,
    title: 'Tic Tac Toe',
    route: '/tictactoe',
    icon: 'tic-tac-toe',
  },
  {
    id: 2,
    title: 'Rock Paper Scissors',
    route: '/rockpaperscissors',
    icon: 'rock-paper-scissors',
  },
];
</script>

<style lang="scss" scoped></style>
