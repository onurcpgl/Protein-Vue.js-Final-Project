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
        Sayaç: {{timer}}
    </div>
    <div v-else>
        <Hippodrome></Hippodrome>
    </div>
</template>

<style scoped>

</style>