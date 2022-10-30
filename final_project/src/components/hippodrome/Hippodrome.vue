<script setup>
import { ref, onMounted } from "vue";
import Result from "../result/Result.vue";
import { useHorseStore } from "../../stores/horseRace";
import ActiveResult from "../activeResult/ActiveResult.vue";
const horseStore = useHorseStore();

const resultOff = ref(true);
const announcer = ref();
const horseDom = ref();
const invisibleFinal = ref();
const final = ref();
const activeList = ref([]);
const controlResultList = ref([]);

function raceRetry(value) {
  resultOff.value = value;
  controlResultList.value = [];
  // Önceki yarışta atanan hızları siliyoruz.
  for (let i = 0; i < 6; i++) {
    horseStore.horseList[i].speed = 0;
  }
  setTimeout(() => {
    startRace();
  }, 1000);
}

onMounted(() => {
    startRace();
});

// Yarışı başlatan fonksiyon.
function startRace() {
  const raceStartTimer = setInterval(() => {
    
    for (let i = 0; i < horseDom._rawValue.length; i++) {
      // Atın ilerledikçe aldığını mesafe.
      let horseWidht = parseInt(horseDom._rawValue[i].style.left.split("px")[0]) + horseDom._rawValue[i].width;
      
      
      // Yarışın anlık sonucu alıp sıralayan işlemler.
      horseStore.horseList[i].speed = horseWidht;
      activeList.value = [...horseStore.horseList];
      if (horseStore.horseList[i].speed <= final._rawValue.offsetLeft) {
        horseStore.raceResult = activeList.value.sort((a, b) => {
          return b.speed - a.speed;
        });
      }
      
      // Canlı yorum ekranına değerleri burada veriyoruz.
      announcer.value = `Yarışı ${horseStore.raceResult[0].id}. kulvardaki ${horseStore.raceResult[0].name} önde götürüyor.`;

      // Atların hepsinin çizgiyi geçmesini bekleyen koşulları sonlandıran if blogu.
      if (horseStore.horseList[i].speed > invisibleFinal._rawValue.offsetLeft) {
        if (!controlResultList.value.some((x) => x.id == horseStore.horseList[i].id)) {
          controlResultList.value.push(horseStore.horseList[i]);
          if (controlResultList.value.length == horseStore.horseList.length) {
            clearInterval(raceStartTimer);
            setTimeout(() => {
              resultOff.value = false;
            },1000)
          }
        }
      }

      // Atların yarışı bitirdikten sonra ilerlemesini sonlandıran koşul.
      if (!controlResultList.value.some((x) => x.id == horseStore.horseList[i].id)) 
      {
        horseDom._rawValue[i].style.left = parseInt(horseDom._rawValue[i].style.left.split("px")[0]) + horseStore.random(1, 10) + "px";
      }
    }
  }, 25);
}


</script>

<template>
  
  <template v-if="resultOff">
    <div class="hippodrome_ground">
      <div class="container">
          <div class="horse" v-for="horse in horseStore.horseList">
            <img ref="horseDom" :src="horseStore.imageSrc(horse.img)" style="left: 1px" />
          
          </div>
      </div>
      <div ref="final" class="final"></div>
      <div ref="invisibleFinal" class="invisibleFinal"></div>
    </div>

    <div class="list">
      <ActiveResult></ActiveResult>
    </div>
  </template>
  <template v-else>
    <Result @resultPageOff="raceRetry" ></Result>
  </template>
</template>

<style scoped>
.hippodrome_ground{
  background-image: url("../../assets/horse/ground.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  background-position-y: center;
  height: 500px;
}
.container {
  display: grid;
}
img {
  width: 10%;
  position: absolute;
  margin-top: 10px;
}

.horse {
  margin-top: 40px;
  z-index: 3;
}
.list{
  width: 80%;

  margin-top: 1%;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 15px;
}

.final {
  background-image: url("../../assets/horse/finishLane.png");
  position: absolute;
  top: 5%;
  bottom: 0;
  width: 55px;
  left: 90%;
  margin-right: 20px;
  height: 400px;
  z-index: 1;
}

.invisibleFinal {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  left: 99%;
  margin-right: 20px;
}
</style>
