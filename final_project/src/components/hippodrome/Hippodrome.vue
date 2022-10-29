<script setup>
import { ref, onMounted } from "vue";
import Result from "../result/Result.vue";
const resultOff = ref(true);
const data = ref([
  {
    id: 1,
    name: "Devirhan",
    speed: 0,
    img: "h1",
  },
  {
    id: 2,
    name: "Odin",
    speed: 0,
    img: "h2",
  },
  {
    id: 3,
    name: "Sunday",
    speed: 0,
    img: "h3",
  },
  {
    id: 4,
    name: "Timurhan",
    speed: 0,
    img: "h4",
  },
  {
    id: 5,
    name: "Tansel",
    speed: 0,
    img: "h5",
  },
  {
    id: 6,
    name: "Yelhan",
    speed: 0,
    img: "h6",
  },
]);

function raceRetry(val) {
  resultOff.value = val;
  controlResultList.value = [];
  // Önceki yarışta atanan hızları siliyoruz.
  for (let i = 0; i < 6; i++) {
    data.value[i].speed = 0;
  }
  startRace();
}
onMounted(() => {
  setTimeout(() => {
    startRace();
  }, 1000);
});

//Random değerleri bu fonksiyondan alıyoruz.
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const announcer = ref();
const raceResult = ref();
const horseDom = ref();
const invisibleFinal = ref();
const final = ref();
const activeList = ref([]);
const controlResultList = ref([]);


// Yarışı başlatan fonksiyon.
function startRace() {
  const raceStartTimer = setInterval(() => {
    
    for (let i = 0; i < horseDom._rawValue.length; i++) {
      // Atığın ilerledikçe aldığını toplam mesafe.
      let horseWidht = parseInt(horseDom._rawValue[i].style.left.split("px")[0]) + horseDom._rawValue[i].width;
      
      console.log(horseDom._rawValue[i].style.left);
      // Yarışın anlık sonucu alıp sıralayan işlemler.
      data.value[i].speed = horseWidht;
      activeList.value = [...data.value];
  
      if (data.value[i].speed <= final._rawValue.offsetLeft) {
        raceResult.value = activeList.value.sort((a, b) => {
          return b.speed - a.speed;
        });
      }
      
      // Canlı yorum ekranına değerleri burada veriyoruz.
      announcer.value = `Yarışı ${raceResult.value[0].id}. kulvardaki ${raceResult.value[0].name} önde götürüyor.`;

      // Atların hepsinin çizgiyi geçmesini bekleyen koşulları sonlandıran if blogu.
      if (data.value[i].speed > invisibleFinal._rawValue.offsetLeft) {
        if (!controlResultList.value.some((x) => x.id == data.value[i].id)) {
          controlResultList.value.push(data.value[i]);
          if (controlResultList.value.length == 6) {
            clearInterval(raceStartTimer);
            setTimeout(() => {
              resultOff.value=false;
            },1000)
          }
        }
      }

      // Atların yarışı bitirdikten sonra ilerlemesini sonlandıran koşul.
      if (!controlResultList.value.some((x) => x.id == data.value[i].id)) 
      {
        horseDom._rawValue[i].style.left = parseInt(horseDom._rawValue[i].style.left.split("px")[0]) + random(1, 10) + "px";
      }
    }
  }, 10);
}

function imageSrc(img) {
  return new URL(`../../assets/horse/${img}.gif`, import.meta.url).href;
}


</script>

<template>
  
  <template v-if="resultOff">
    <div class="hippodrome_ground">
      <div class="container">
        <div class="horse" v-for="horse in data">
          <img ref="horseDom" :src="imageSrc(horse.img)" style="left: 1px" />
        </div>
      </div>
      <div ref="final" class="final"></div>
      <div ref="invisibleFinal" class="invisibleFinal"></div>
    </div>

    <div class="list">
      <p>{{ announcer }}</p>
      <ol>
        <li v-for="item in raceResult" :key="item">
          {{ item.name }} 
        </li>
      </ol>
    </div>
  </template>
  <template v-else>
    <Result @resultPageOff="raceRetry" :raceResultList="raceResult"></Result>
  </template>
</template>

<style scoped>
.container {
  display: grid;
}
img {
  width: 200px;
  position: absolute;
  margin-top: 10px;
}
.horse {
  margin-top: 50px;
}
.list{
  margin-top: 10%;
  background-color: orange;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 15px;
}
.list p{
  text-align: center;
  font-size: 25px;
}
.list ul{
  margin: 10px;
}
li{
  padding: 10px;
  font-size: 30px;
}
.final {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: black;
  left: 90%;
  margin-right: 20px;
  height: 50%;
  margin-top: 10px;
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
