<script setup>

</script>
<template>
    <div class="modal_container">
        <div class="modal">
            sonuclar
        </div>
        <button class="button"  >Tekrar başlat</button>
    </div>
</template>

<style scoped>

.modal_container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: auto;
    flex-direction: column;
    z-index: 99;
}
.modal{
    background-color: orange;
    width: 800px;
    height: 500px;
    margin: 10px;
    padding: 10px;
}
.button{
    width: 250px;
    height: 50px;
    border-radius: 15px;
    margin: 10px;   
    background-color: rgb(193, 248, 248);
}
.button:hover{
    width: 250px;
    height: 50px;
    border-radius: 15px;
    margin: 10px;
    background-color: azure; 
}
</style>
