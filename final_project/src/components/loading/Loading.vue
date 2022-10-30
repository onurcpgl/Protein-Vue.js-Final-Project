<script setup>
import { ref, onMounted } from "vue";
import Hippodrome from "../hippodrome/Hippodrome.vue";
const timerOff = ref(false);
const timer = ref(3);
const loadingTitle = ref("The game starting.");

onMounted(() => {
    const timerInterval = setInterval(() => {
    if(timer.value == 0)
    {
        clearInterval(timerInterval);
        timerOff.value = true;
    }else{
        loadingTitle.value = loadingTitle.value + ".";
        timer.value = timer.value -1;
    }
   },1000)
});

</script>

<template>
    
    <div class="loading" v-if="!timerOff">
        <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p class="text-center m-14 text-7xl font-light text-gray-900 dark:text-white">{{timer}}</p>
            <p class="p-5 text-center text-3xl font-light text-gray-900 dark:text-white">{{loadingTitle}}</p>
        </a>  
    </div>
    <div v-else>
        <Hippodrome></Hippodrome>
    </div>
</template>

<style scoped>
.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10%;
}
.timer{ 
    background-color: #d7f4e4;
    border-radius: 15px;
    width: 500px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
}
.timer > h2{
    font-size: 85px;
    padding: 15px;
}
.timer > p{
    font-size: 25px;
}
</style>