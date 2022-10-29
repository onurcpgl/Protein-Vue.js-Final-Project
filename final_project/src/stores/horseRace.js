import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHorseStore = defineStore('horseRace', () => {
  //Yarış sonuçlarını tuttuğumuz listemiz.
  const raceResultt = ref();
  // Atlarımızın bilgilerinin olduğu referancımız.
  const horseList = ref([
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
  
  //Resimleri src'ye atmak için kullanılan fonksiyon.
  function imageSrc(img) {
    return new URL(`../assets/horse/${img}.gif`, import.meta.url).href;
  }

 // Random fonksiyonu
  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return { raceResultt, random, horseList, imageSrc }
})
