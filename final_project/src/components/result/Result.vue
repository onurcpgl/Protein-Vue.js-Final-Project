<script setup>
import { useHorseStore } from "../../stores/horseRace";
const emits = defineEmits(["resultPageOff"]);
const horseStore = useHorseStore();

function resultOff() {
    emits("resultPageOff",true);
}
</script>

<template>
    <div class="modal_container">
    
        <div class="modal">
            <li class="title">İsim  Kulvar no</li>
            <ol>
                <li v-for="item in horseStore.raceResultt">
                    {{item.name}} Kulvar no: {{item.id}}
                </li>
            </ol>
            <button class="retry_button" @click="resultOff" >Retry Game</button>
        </div>
    </div>
</template>

<style scoped>
.modal_container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10%;
}
.modal{
    background-color: #d7f4e4;
    border-radius: 15px;
    width: 500px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
}
.title{
    list-style: none;
    margin-top: 5px;
    background-color: rgb(117, 255, 117);
    font-size: 25px;
    width: 80%;
    text-align: center;
    margin-left: 25px;
    border-radius: 15px;
}
.modal > ol{
    font-size: 25px;
     width: 80%;
}
.modal > ol> li{
    background-color: rgb(117, 255, 117);
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    text-align: center;
   
}
.retry_button{
    border-radius: 18px;
    background: linear-gradient(to bottom, #00cc00 0%, #ccff33 100%);
    font-size: 25px;
    margin: 10px;
    padding: 10px;
    width: 65%;
    height: 20%;
}
.retry_button:hover{
    border-radius: 18px;
    background: linear-gradient(to bottom, #00cc00 0%, #ccff33 80%);
    width: 65%;
    height: 20%; 
}
</style>