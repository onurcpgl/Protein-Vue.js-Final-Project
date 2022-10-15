<script setup>

</script>

<template>
    <div class="container">
        
        <div class="title">
            Merhaba yarışa hoşgeldiniz.
        </div>
        <div class="start_btn">
            <button class="btn">START</button>
        </div>
    </div>
</template>


<style scoped >
.container{
    display: flex;
    justify-content: space-between;
    margin: 50px;
    border: 1px solid black;
    border-radius: 25px;
    width: 95%;
    height: 20%;
}
.title{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    font-size: 30px;
}
.start_btn{
    align-items: flex-start;
    display: flex;
    justify-content: right;
}
.btn{
    margin: 50px;
    width: 255px;
    height: 55px;
    font-size: 25px;
    background-color: coral;
    border-radius: 25px;
    
}
.btn:hover{
    background-color: rgb(251, 98, 42);
    box-shadow: 2px 1px black;
}
</style>
