<script setup>
const emits = defineEmits(["start"]);

function startValue() {
    emits("start",true);
}

</script>

<template>
    <div class="container">
      <div class="game_start">
        <h2 class="title">At yarışına hoşgeldiniz...</h2>
        <button class="start_button" @click="startValue">START</button>
      </div>
    </div>
</template>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10%;
}
.game_start{
    background-color: #d7f4e4;
    border-radius: 15px;
    width: 500px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.title{
  margin: 10px;
  padding: 10px;
}
.start_button{
  border-radius: 18px;
  background: linear-gradient(to bottom, #00cc00 0%, #ccff33 100%);
  font-size: 25px;
  width: 65%;
  height: 20%;
}
.start_button:hover{
  border-radius: 18px;
  background: linear-gradient(to bottom, #00cc00 0%, #ccff33 80%);
  width: 65%;
  height: 20%;
}
</style>