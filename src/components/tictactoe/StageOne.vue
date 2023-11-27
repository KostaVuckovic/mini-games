<template>
  <div class="py-20 lg:py-40 flex flex-col items-center">
    <h1 class="mb-5 font-bold text-xl">Choose your play mode</h1>
    <button
      class="border border-gray-600 bg-gray-400 rounded-full px-3 py-1 mb-3 text-sm"
      @click="choosePlayMode('ai')"
    >
      With AI
    </button>
    <button
      class="border border-gray-600 bg-gray-400 rounded-full px-3 py-1 text-sm"
      @click="choosePlayMode('friend')"
    >
      With a friend
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTicTacToeStore } from '@/stores/tictactoe';

const store = useTicTacToeStore();
const { choosePlayMode } = store;
</script>

<style scoped></style>
