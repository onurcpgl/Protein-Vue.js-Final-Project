<script setup>
import { ref } from "vue";
import Hippodrome from './components/hippodrome/Hippodrome.vue';
import Announcer from './components/announcer/Announcer.vue';
import Header from './components/header/Header.vue';
const isShow = ref(true);
const gameStatusValue = ref("");

function gameStatusHandler() {
    isShow.value = false;
    gameStatusValue.value = true;
}


</script>

<template>
    <Teleport to="#modal">
        <div class="modal" v-show="isShow">
            
            <div class="game_start">
                <h2>At yarışına hoşgeldiniz...</h2>
                   <button class="start_btn" @click="gameStatusHandler()">START</button>
                </div>
        </div>
    </Teleport>

<div v-show="!isShow"> 
<!-- <Header @gameStatus="gameStatusHandler"  ></Header> -->
 <Hippodrome :gameStatusProp="gameStatusValue" />
 <Announcer />
</div>
 
</template>

<style scoped>
html, body {
  height: 100%;
}

.modal{
    background-color:azure;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin: 10% 25% 0px 25%;
    box-shadow: rgba(0, 0, 0, 0.80) 0px 54px 55px, rgba(0, 0, 0, 0.50) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.game_start{
    margin: 100px;
    width: 450px;   
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.start_btn{
    width: 100%;
    height: 15%;
    margin: 0px;
    margin: 50px;
    border-radius: 15px;
    background-color: rgb(78, 200, 124);
    color: white;
    font-size: 30px;
    font-weight: 15px;   
}
.start_btn:hover{
    width: 100%;
    height: 15%;
    margin: 50px;
    border-radius: 15px;
    background-color: rgb(16, 192, 84);
    color: white;
    font-size: 32px;
    font-weight: 18px;
    animation-duration: 1ms;
}
</style>
