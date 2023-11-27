import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTicTacToeStore = defineStore('tictactoe', () => {
  // Choosing stage
  const currentStage = ref(1);

  const changeStage = (newStage: number) => {
    currentStage.value = newStage;
  };

  // Choosing play mode
  type PlayModeType = 'ai' | 'friend' | null;

  const playMode = ref<PlayModeType>(null);

  const choosePlayMode = (newPlayMode: PlayModeType) => {
    playMode.value = newPlayMode;
    changeStage(2);
  };

  // Reseting states
  const resetAll = () => {
    currentStage.value = 1;
    playMode.value = null;
  };

  return {
    currentStage,
    changeStage,
    choosePlayMode,
    resetAll,
    playMode,
  };
});
