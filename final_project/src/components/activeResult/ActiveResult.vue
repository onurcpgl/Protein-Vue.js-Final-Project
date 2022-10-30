<script setup>
import { useHorseStore } from "../../stores/horseRace";
const horseStore = useHorseStore();
</script>

<template>

<div class=" overflow-x-auto relative shadow-md sm:rounded-xl" v-if="horseStore.raceResult">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Horse name
                </th>
                <th scope="col" class="py-3 px-6">
                    Horse lane
                </th>
                <th scope="col" class="py-3 px-6">
                    Horse image
                </th>
            </tr>
        </thead>
        <tbody >
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="horse in horseStore.raceResult">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{horse.name}} 
                </th>
                <td class="py-4 px-6">
                    {{horse.id}}
                </td>
                <td class="py-4 px-6">
                    <img class="w-12" :src="horseStore.imageSrc(horse.img)"/>
                </td>               
            </tr>
        </tbody>
    </table>
</div>

</template>