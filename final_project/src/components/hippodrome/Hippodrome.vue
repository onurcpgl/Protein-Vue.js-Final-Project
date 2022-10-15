<script setup>              
import { ref,onMounted } from "vue";
const horseSpeed= ref({
    at1:68,
    at2:66,
    at3:69,
    at4:62,
    at5:68,
    at6:64
});

const horseMoov = ref({
    at1:0,
    at2:0,
    at3:0,
    at4:0,
    at5:0,
    at6:0
})

onMounted(() => {
   const at1 =  setInterval(() => {
        horseMoov.value.at1 = horseMoov.value.at1+25;
    },horseSpeed.value.at1)

    const at2 =  setInterval(() => {
        horseMoov.value.at2 = horseMoov.value.at2+25;
    },horseSpeed.value.at2)

    const at3 =  setInterval(() => {
        horseMoov.value.at3 = horseMoov.value.at3+25;
    },horseSpeed.value.at3)

    const at4 =  setInterval(() => {
        horseMoov.value.at4 = horseMoov.value.at4+25;
    },horseSpeed.value.at4)

    const at5 =  setInterval(() => {
        horseMoov.value.at5 = horseMoov.value.at5+25;
    },horseSpeed.value.at5)

    const at6 =  setInterval(() => {
        horseMoov.value.at6 = horseMoov.value.at6+25;
    },horseSpeed.value.at6)



   const myTimeout = setTimeout(()=>{
        clearTimeout(myTimeout);
        clearInterval(at1);
        clearInterval(at2);
        clearInterval(at3);
        clearInterval(at4);
        clearInterval(at5);
        clearInterval(at6);
   },5000);
   
})


</script>

<template>
 <div class="container">
    <div class="at" v-bind:style="[{left: horseMoov.at1+ 'px'}]">
       <img src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif" style="width:120px" />
    </div>
    <div class="at" v-bind:style="[{left: horseMoov.at2 + 'px'}]">
        <img src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif" style="width:120px" />
    </div>
    <div class="at" v-bind:style="[{left: horseMoov.at3 + 'px'}]">
        <img src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif" style="width:120px" />
    </div>
    <div class="at" v-bind:style="[{left: horseMoov.at4 + 'px'}]">
        <img src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif" style="width:120px" />
    </div>
    <div class="at" v-bind:style="[{left: horseMoov.at5 + 'px'}]">
        <img src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif" style="width:120px" />
    </div>
    <div class="at" v-bind:style="[{left: horseMoov.at6 + 'px'}]">
        <img src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif" style="width:120px" />
    </div>
 </div>
</template>

<style scoped>
.container{
    background-color: red;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    margin: 50px;
}
.at{
    position: relative;
    color:white;
    width: 25px;
}
</style>