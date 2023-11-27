<template>
  <RouterLink :to="to">
    <div class="p-6 border border-gray-600">
      <h1 class="text-xl mb-5">{{ title }}</h1>
      <component :is="iconComponent" class="w-full max-w-[200px]" />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import RockPaperScissorsIcon from '@/components/icons/RockPaperScissorsIcon.vue';
import TicTacToeIcon from '@/components/icons/TicTacToeIcon.vue';

interface Props {
  to: string;
  title: string;
  icon: string;
}

const props = defineProps<Props>();

const iconComponent = computed(() => {
  switch (props.icon) {
    case 'rock-paper-scissors':
      return RockPaperScissorsIcon;
    default:
      return TicTacToeIcon;
  }
});
</script>

<style scoped></style>
