<script setup>
import { ref, watch, onMounted } from "vue";
import Result from "../result/Result.vue";
const raceStatus = ref(true);
const firstHorse = ref([]);

const data = ref([
  {
    id: 1,
    name: "Devirhan",
    speed: 0,
  },
  {
    id: 2,
    name: "Odin",
    speed: 0,
  },
  {
    id: 3,
    name: "Sunday",
    speed: 0,
  },
  {
    id: 4,
    name: "Timurhan",
    speed: 0,
  },
  {
    id: 5,
    name: "Tansel",
    speed: 0,
  },
  {
    id: 6,
    name: "Yelhan",
    speed: 0,
  },
]);

onMounted(() => {
  startGame();
});

function retryGame(params) {
  raceStatus.value = params;
  firstHorse.value = [];
  startGame();
}

function startGame() {
  randomHorseSpeed(data.value[0]);
  randomHorseSpeed(data.value[1]);
  randomHorseSpeed(data.value[2]);
  randomHorseSpeed(data.value[3]);
  randomHorseSpeed(data.value[4]);
  randomHorseSpeed(data.value[5]);
}

function randomHorseSpeed(horse) {
  const horseSpeed = setInterval(() => {
    if (horse.speed < 1050) {
      horse.speed = horse.speed + Math.floor(Math.random() * 100);
    } else {
      firstHorse.value.push(`id: ${horse.id} name:${horse.name}`);
      clearInterval(horseSpeed);
      //yeri doğru değil.
      setTimeout(() => {
        raceStatus.value = false; 
      }, 1200);
    }
  }, 100);
  
  horse.speed = 0;
  
}

watch(raceStatus, () => {});
</script>

<template>
  <template v-if="raceStatus">
    <div style="background-color: white; font-size: 30px">
      Kazanan {{firstHorse.name }} numaralı at.
    </div>

    <div class="container" id="att">
      <div class="at" v-bind:style="[{ left: data[0].speed + 'px' }]">
        <img
          src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif"
          style="width: 120px"
        />
      </div>
      <div class="at" v-bind:style="[{ left: data[1].speed + 'px' }]">
        <img
          src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif"
          style="width: 120px"
        />
      </div>
      <div class="at" v-bind:style="[{ left: data[2].speed + 'px' }]">
        <img
          src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif"
          style="width: 120px"
        />
      </div>
      <div class="at" v-bind:style="[{ left: data[3].speed + 'px' }]">
        <img
          src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif"
          style="width: 120px"
        />
      </div>
      <div class="at" v-bind:style="[{ left: data[4].speed + 'px' }]">
        <img
          src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif"
          style="width: 120px"
        />
      </div>
      <div class="at" v-bind:style="[{ left: data[5].speed + 'px' }]">
        <img
          src="https://galeri14.uludagsozluk.com/760/gunun-gif-i_1299032.gif"
          style="width: 120px"
        />
      </div>
    </div>
  </template>
  <template v-else>
    <Result @resultPageOff="retryGame"  :raceResult="firstHorse"></Result>
  </template>
</template>

<style scoped>
.container {
  background-image: url("../../../public/green.png");
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin: 50px;
}
.at {
  position: relative;
  color: white;
  width: 25px;
  animation-duration: 4s;
}
</style>
