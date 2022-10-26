<script setup>
import { ref, onMounted } from "vue";
import Hippodrome from "../hippodrome/Hippodrome.vue";
const timerOff = ref(false);
const timer = ref(3);

onMounted(() => {
    const timerInterval = setInterval(() => {
    if(timer.value == 0)
    {
        clearInterval(timerInterval);
        timerOff.value = true;
    }else{
        timer.value = timer.value -1;
    }
   },1000)
});

</script>

<template>
    <div class="loading" v-if="!timerOff">
        <div class="timer">
            <h2>{{timer}}</h2>
            <p>Oyun başlıyor...</p>
        </div>
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