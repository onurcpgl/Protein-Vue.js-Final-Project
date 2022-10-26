<script setup>
const emits = defineEmits(["start"]);

function startValue() {
    emits("start",true);
}

</script>

<template>
    <div class="modal">
      <div class="game_start">
        <h2>At yarışına hoşgeldiniz...</h2>
        <button @click="startValue">START</button>
      </div>
    </div>
</template>

<style scoped>
.modal{
    background-color: orange;

}
</style>