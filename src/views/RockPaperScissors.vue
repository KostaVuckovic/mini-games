<template>
  <main>
    <div class="mt-10">
      <div class="flex justify-center items-center flex-col">
        <button @click="chooseSign('rock')">Rock</button>
        <button @click="chooseSign('paper')">Paper</button>
        <button @click="chooseSign('scissors')">Scissors</button>
      </div>

      <p>{{ choosenSign }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const choosenSign = ref('');
const computerChoice = ref('');
const choises = ['rock', 'paper', 'scissors'];

const chooseSign = (sign: string) => {
  console.log(sign);
};

const chooseSignComp = () => {
  const randomIndex = Math.floor(Math.random() * choises.length);
  computerChoice.value = choises[randomIndex];
  console.log(computerChoice.value);
};

onMounted(() => {
  chooseSignComp();
});
</script>

<style lang="scss" scoped></style>
