<script setup>          
import { ref,onMounted, onUpdated,watch} from "vue";
const props = defineProps(["gameStatusProp"]);

const data = ref([
    {
        id:1,
        name:"Devirhan",
        speed:0,
    },
    {
        id:2,
        name:"Odin",
        speed:500,
    },
    {
        id:3,
        name:"Sunday",
        speed:0,
    },
    {
        id:4,
        name:"Timurhan",
        speed:0,
    },
    {
        id:5,
        name:"Tansel",
        speed:0,
    },
    {
        id:6,
        name:"Yelhan",
        speed:0,
    }
])



const firstHorse = ref([]);



function randomHorseSpeed(horse) {
    
    const horseSpeed = setInterval(() => {
        if(horse.speed < 1100)
        {
            horse.speed = horse.speed+(Math.floor(Math.random() * 10)*10);
        }
        else
        {
            firstHorse.value.push(horse.name);
            clearInterval(horseSpeed);
        }
    },100)
}


watch(props,() => {
    if(props.gameStatusProp){
        randomHorseSpeed(data.value[0]);
        randomHorseSpeed(data.value[1]);
        randomHorseSpeed(data.value[2]);
        randomHorseSpeed(data.value[3]);
        randomHorseSpeed(data.value[4]);
        randomHorseSpeed(data.value[5]);
    }
})


</script>

<template>
    <div style="background-color:white; font-size: 30px;">
    Kazanan at{{firstHorse[0]}}
    </div>
 <div class="container" id="att">
    <div class="at" v-bind:style="[{left: data[0].speed+ 'px'}]" >
       <img src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif" style="width:120px" />
    </div>
    <div class="at" v-bind:style="[{left: data[1].speed + 'px'}]">
        <img src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif" style="width:120px" />
    </div>
    <div class="at" v-bind:style="[{left: data[2].speed + 'px'}]">
        <img src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif" style="width:120px" />
    </div>
    <div class="at" v-bind:style="[{left: data[3].speed + 'px'}]">
        <img src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif" style="width:120px" />
    </div>
    <div class="at" v-bind:style="[{left: data[4].speed + 'px'}]">
        <img src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif" style="width:120px" />
    </div>
    <div class="at" v-bind:style="[{left: data[5].speed + 'px'}]">
        <img src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif" style="width:120px" />
    </div>
 </div>


</template>

<style scoped>
.container{
    background-image: url("../../../public/green.png");
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    margin: 50px;
}
.at{
    position: relative;
    color:white;
    width: 25px;
    animation-duration: 4s;

}
</style>