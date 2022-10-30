<script setup>
import { useHorseStore } from "../../stores/horseRace";
const emits = defineEmits(["start"]);
const horseStore = useHorseStore();
function startValue() {
    emits("start",true);
}

</script>

<template>
    <div class="box">
      <a href="#" class="block p-2 max-w-md w-1/2 text-center bg-slate-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <img :src="horseStore.imageSrc(horseStore.horseList[0].img)" />
        <p class="text-2xl mb-5 p-5 font-normal text-gray-900 dark:text-white">Wellcome to horse racing</p>
        <button  @click="startValue" type="button" class="text-white w-56 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Start Game</button>
    </a>  
    </div>
</template>

<style scoped>
.box{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10%;
}

</style>