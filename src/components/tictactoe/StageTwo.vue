<template>
  <main class="py-20 text-center">
    <h3 class="text-2xl">
      Player <span class="font-bold">{{ player }}</span
      >'s turn
    </h3>
    <div class="flex flex-col items-center my-10">
      <div v-for="(row, x) in board" :key="x" class="flex">
        <div
          v-for="(cell, y) in row"
          :key="y"
          @click="makeMove(x, y)"
          :class="`border border-gray-500 w-20 h-20 lg:hover:bg-gray-700 flex items-center justify-center material-icons-outlined`"
        >
          {{ cell === 'X' ? 'close' : cell === 'O' ? 'circle' : '' }}
        </div>
      </div>
    </div>
    <button class="bg-gray-500 px-3 py-1 rounded-full mb-5" @click="resetGame">
      Reset game
    </button>
    <h2 v-if="winner" class="text-3xl">
      Player '<span class="font-bold">{{ winner }}</span
      >' wins!
    </h2>
    <h2 v-else-if="moveCounter === 9" class="text-3xl font-bold">Draw!</h2>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

type CellType = '' | 'X' | 'O';

const player = ref<'X' | 'O'>('X');
const board = ref<CellType[][]>([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]);
const moveCounter = ref<number>(0);

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const winner = computed(() => {
  return calculateWinner(board.value.flat());
});

const makeMove = (x: number, y: number) => {
  if (winner.value) return;
  if (board.value[x][y] !== '') return;
  moveCounter.value++;
  board.value[x][y] = player.value;

  player.value = player.value === 'X' ? 'O' : 'X';
};

const resetGame = () => {
  board.value = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  player.value = 'X';
  moveCounter.value = 0;
};
</script>

<style scoped></style>
