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
    <a href="#" class="block p-2 max-w-xl w-3/4 text-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Horse Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Horse Lane
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="horse in horseStore.raceResult">
                        <th scope="row" class="px-8 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                            {{horse.name}} 
                        </th>
                        <td class="py-4 px-6">
                            {{horse.id}}
                        </td>              
                    </tr>
                </tbody>
            </table>
        </div>
        <button @click="resultOff" type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-5 mr-2 mb-2">Retry Game</button>
    </a>    
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