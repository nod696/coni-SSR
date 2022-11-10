<template>
  <div class="">
    <img class="loader" src="./law.gif" alt="" v-if="!courtData" />
  <div v-if="courtData" class="info__wrapper">
    <table>
      <tr class="judge">
        <td v-for="item in courtData.judge" :key="item">{{ item }}</td>
      </tr>
      <tr class="time">
        <td v-for="item in courtData.time" :key="item">{{ item }}</td>
      </tr>
      <tr class="category">
        <td
          class="category__cell"
          v-for="item in courtData.category"
          :key="item"
        >
          <p class="category__info">
            {{ item }}
          </p>
        </td>
      </tr>
      <tr class="number">
        <td v-for="item in courtData.number" :key="item">{{ item }}</td>
      </tr>
    </table>
  </div>
    <p v-if="!isTrials">На сегодня дел не назначено</p>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { setData } from "../../server/api";
import { onMounted, ref, Ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";

    const route = useRoute();
    const courtData: Ref<any> = ref(null);
    let isTrials: Ref<boolean> = ref(false);
    function loadData() {
      isTrials.value = true;
      setData(route.params.routing, route.params.url).then((data: any) => {
        if(data.time){
        courtData.value = data;
        isTrials.value = true;
        return courtData;
        }
      });
    }

    onMounted(loadData);

// <div class="info__category">
//   <ul class="info category__list">
//     <li class="info__item" v-for="item in courtData.category" :key="item">
//       {{ item }}
//     </li>
//   </ul>
// </div>
// <div class="info__judge">
//   <ul class="info judge__list">
//     <li class="info__item" v-for="item in courtData.judge" :key="item">
//       {{ item }}
//     </li>
//   </ul>
// </div>
// <div class="info__number">
//   <ul class="info number__list">
//     <li class="info__item" v-for="item in courtData.number" :key="item">
//       {{ item }}
//     </li>
//   </ul>
// </div>
// <div class="info__time">
//   <ul class="info time__list">
//     <li class="info__item" v-for="item in courtData.time" :key="item">
//       {{ item }}
//     </li>
//   </ul>
// </div>
</script>

<style scoped>
table {
  display: table;
  border: 1px solid black;
  font-weight: 700;
}
table tr {
  display: table-cell;
}
table tr td {
  width: 150px;
  height: 150px;
  overflow: auto;
  border: 1px solid black;
  display: block;
}

.judge {
  background-color: aquamarine;
}
.time {
  background-color: antiquewhite;
}
.category {
  background-color: rgb(206, 113, 113);
}
.category__cell {
  width: 350px;
  height: 150px;
  overflow: auto;
  position: relative;
}
.number {
  background-color: rgb(137, 132, 219);
}
.info__wrapper {
  max-height: 600px;
  overflow: auto;
  display: flex;
  justify-content: center;
}
.info {
  width: 300px;
  height: 500px;
  overflow: scroll;
}

.info__item {
  background-color: aqua;
  border: 1px solid black;
}
.loader{
  width: 150px;
  height: 150px;
}
@media(max-width: 1200px){
  table {
  font-size: 14px;
}
table tr {
  display: table-cell;
}
table tr td {
  width: 120px;
  height: 150px;
}
}

@media(max-width: 1000px){
  table {
  font-size: 12px;
}
table tr {
  display: table-cell;
}
table tr td {
  width: 90px;
  height: 150px;
}
}

@media(max-width: 800px){
  table {
  font-size: 10px;
}
table tr {
  display: table-cell;
}
table tr td {
  width: 80px;
  height: 100px;
}
.category__cell {
  width: 120px;
  height: 100px;
}
}
</style>
