<script setup>
import { ref } from "vue";
const emits = defineEmits(["gameStatus"]);
const gameIsActive = ref(false);

function gameAction() {
    gameIsActive.value = !gameIsActive.value;
    emits("gameStatus",gameIsActive.value);
}

</script>

<template>
    <div class="header_container">
        
        <div class="title">
            Merhaba yarışa hoşgeldiniz.
        </div>
        <div class="start_btn">
            <button :class="{btn_start : gameIsActive, btn_stop : !gameIsActive}" 
            @click="gameAction">
            {{gameIsActive ? "START" : "STOP"}}
        </button>
        </div>
    </div>
</template>


<style scoped>
.header_container{
    display: flex;
    justify-content: space-between;
    margin: 50px;
    border: 1px solid black;
    border-radius: 25px;
    width: 95%;
    height: 20%;
}
.title{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    font-size: 30px;
}
.start_btn{
    align-items: flex-start;
    display: flex;
    justify-content: right;
}
.btn_start{
    margin: 50px;
    width: 255px;
    height: 55px;
    font-size: 25px;
    background-color: rgb(11, 248, 11);
    border-radius: 25px;
    
}
.btn_stop{
    margin: 50px;
    width: 255px;
    height: 55px;
    font-size: 25px;
    background-color: red;
    border-radius: 25px;
    
}
.btn:hover{
    background-color: rgb(251, 98, 42);
    box-shadow: 2px 1px black;
}
</style>
