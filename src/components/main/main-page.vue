<template>
  <div class="main__wrapper">
    <h2 class="main__title">CONI</h2>
    <h3 class="main__subtitle">Правосудие в вашем кармане</h3>
    <img src="../../../assets/mainIcon.png" alt="" class="main__icon">
    <ul class="social__list">
      <li class="social__item">
        <a href="" class="social__link">
          <img src="../../../assets/fb.png" alt="" class="social__icon" />
        </a>
      </li>
      <li class="social__item">
        <a href="" class="social__link">
          <img src="../../../assets/in.png" alt="" class="social__icon" />
        </a>
      </li>
      <li class="social__item">
        <a href="" class="social__link">
          <img src="../../../assets/vk.png" alt="" class="social__icon" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
//@ts-ignore


</script>

<style scoped>

@font-face {
  font-family: "Arina";
  src: url("../../assets/fonts/Arina.ttf") format("truetype");
}
@font-face {
  font-family: "Zametka";
  src: url("../../assets/fonts/Zametka.otf") format("opentype");
}
table {
  display: table;
}
table tr {
  display: table-cell;
}
table tr td {
  display: block;
}
.main__wrapper {
  display: grid;
}
.main__title {
  margin-block-end: 0;
  align-self: center;
  font-family: "Arina";
  font-size: 40px;
}
.main__subtitle {
  font-family: "Zametka";
}
.social__list {
  padding: 0;
  margin-top: 30px;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
}
.social__icon {
  width: 40px;
  height: 40px;
}

@media(max-width: 600px){
  .main__title {
  font-size: 20px;
}
.main__subtitle {
  font-size: 14px;
}
.social__icon {
  width: 20px;
  height: 20px;
}
}
.main__icon{
  align-self: center;
  justify-self: center;
  width: 150px;
  height: 150px;
}
</style>
