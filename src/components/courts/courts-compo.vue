<template>
    <div class="courts__wrapper">
        <div class="courts">
            <ul  class="courts__list">
                <li class="court__item" v-for="item in courtsArray" :key="item.name">
                     <router-link class="court__link" :to="{name: 'CourtCompo', params: {routing:`${item.routing}`, name: `${item.name}`, url: `${item.url}`}}">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "@vue/runtime-core";
import {courts} from "./courts";
    let courtsArray: Ref<Array<any>> = ref(courts);

</script>

<style scoped>
@font-face {
  font-family: "Zametka";
  src: url("../../assets/fonts/Zametka.otf") format("opentype");
}
.courts{
    margin: 0 auto;
    max-width: 500px;
}
.courts__list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Zametka";
    list-style: none;
    padding: 0;
}
.court__item{

    border: 1px solid black;
}
.court__link{
    background-color: blueviolet;
    display: block;
    padding: 10px;
    text-decoration: none;
    color:#42b983;
}
.court__link:hover{
        background-color: #42b983;
    color: blueviolet;
}
.court__item:not(:last-child){
    margin-bottom: 20px;
}

@media(max-width: 600px){
    .court__item{
    width:250px;
}

.court__link{
    font-size: 14px;
}
}
</style>



