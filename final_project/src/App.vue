<script setup>
import { ref } from "vue";
import Loading from "./components/loading/Loading.vue";
import Result from "./components/result/Result.vue";
import Start from "./components/start/Start.vue";

const startIsActive = ref(false);

function startIsActiveValue(value) {
  startIsActive.value = value;
}

</script>

<template>
  <template v-if="!startIsActive">
    <Start @start="startIsActiveValue"></Start>
  </template>
  <template v-else>
    <Loading></Loading>
  </template>
 
</template>

<style scoped>

</style>
