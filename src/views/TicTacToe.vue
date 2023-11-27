<template>
  <main>
    <StageOne v-if="currentStage === 1" />
    <StageTwo v-else-if="currentStage === 2" />
  </main>
</template>

<script setup lang="ts">
import StageOne from '@/components/tictactoe/StageOne.vue';
import StageTwo from '@/components/tictactoe/StageTwo.vue';

import { useTicTacToeStore } from '@/stores/tictactoe';
import { storeToRefs } from 'pinia';

const store = useTicTacToeStore();
const { currentStage } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>
