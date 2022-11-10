<template>
  <div class="load__component">
  <h2 class="loader__title">Нагрузка судов</h2>
  <ul class="loader__list">
    <li
      ref="courtItem"
      class="loader__item"
      v-for="court in courtsArray"
      :key="court.name"
    >
      {{ court.name }}
    </li>
  </ul>
  <div class="loader__wrapper">
    <h3 class="loader__subtitle" v-if="!info">Выберите суд</h3>
    <img class="loader" src="./law.gif" alt="" v-if="loaderFlag" />
    <Transition>
    <div class="loader__content" v-if="infoFlag">
      <h3 class="loader__name">{{ selectedItem.name }}</h3>
      <h3 class="loader__category">
        Самая популярная категория дел на сегодня:
      </h3>
      <h3 class="loader__count">
        Общее количество дел на сегодня: {{ info.category }}
      </h3>
      <h3 class="loader__judge">
        Самый нагруженный сегодня судья: {{ info.maxJudge }}
      </h3>
      <h3 class="loader__cases">Число дел у судьи: {{ info.maxCount }}</h3>
    </div>
  </Transition>
    <h3 class="loader__nothing" v-if="!info && selectedItem">
      На сегодня дел нет
    </h3>
  </div>
</div>
</template>

<script setup lang="ts">
import { Ref, ref } from "@vue/runtime-core";
import { courts } from "./../courts/courts";
// @ts-ignore
import { useDragnDrop } from "./dragNdrop";
let courtsArray: Ref<Array<any>> = ref(courts);
let courtItem: Ref<any> = ref(null);
let selectedItem: Ref<any> = ref(null);
let info: Ref<any> = ref({});
let infoFlag: Ref<boolean> = ref(false);
let loaderFlag: Ref<boolean> = ref(false);

useDragnDrop(courtItem, selectedItem, courtsArray, info, loaderFlag, infoFlag);
</script>

<style>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
@font-face {
  font-family: "Arina";
  src: url("../../assets/fonts/Arina.ttf") format("truetype");
}
@font-face {
  font-family: "Zametka";
  src: url("../../assets/fonts/Zametka.otf") format("opentype");
}
.loader {
  width: 300px;
  height: 300px;
}
.loader__title {
  font-family: "Zametka";
}
.loader__wrapper {
  margin: 0 auto;
  width: 600px;
  height: 450px;
  border: 2px solid black;
}
.loader__list {
  padding: 0;
  display: flex;
  list-style: none;
}
.loader__item {
  position: static;
  user-select: none;
  background-color: blueviolet;
  border: 1px solid #42b983;
  border-radius: 10px;
  color: #42b983;
  cursor: pointer;
  font-family: "Zametka";
  font-size: 14px;
}
.loader__item {
  margin: 0 10px 0 10px;
}
.loader__content {
  font-family: "Zametka";
}

@media (max-width: 1200px) {
  .loader__item {
    font-size: 12px;
  }
}

@media (max-width: 1000px) {
  .loader__item {
    font-size: 10px;
  }
}

@media (max-width: 800px) {
  .loader__item {
    font-size: 10px;
  }
  .loader__wrapper {
    width: 400px;
    height: 350px;
  }
  .loader__list {
    height: 200px;
    width: 500px;
    flex-flow: wrap;
  }
  .loader__item {
    width: 140px;
    height: 30px;
  }
}
@media (max-width: 600px) {
  .loader__item {
    font-size: 10px;
  }
  .loader__wrapper {
    width: 270px;
    height: 250px;
  }
  .loader__list {
    height: 120px;
    width: 320px;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
  }
  .loader__item {
    width: 70px;
    height: 30px;
  }
  .loader__content {
    font-size: 10px;
  }
  .loader__title {
    font-size: 14px;
  }
}
</style>
