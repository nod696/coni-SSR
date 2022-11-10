<template>
  <div class="wrapper">
    <img src="../../assets/icon.png" alt="" class="logo" />
    <div class="main__content">
      <main-navigation></main-navigation>

      <router-view v-slot="{ Component }">
        <transition mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainNavigation from "./main-navigation.vue";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.logo {
  max-width: 100px;
  max-height: 200px;
  margin: 10px 0;
}
.wrapper {
  background: linear-gradient(#6e0eeb, #9198e5);
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main__content {
  border-radius: 5%;

  width: 1100px;
  height: 700px;
  background-color: #0fc4a2;
}

@media (max-width: 1200px) {
  .main__content {
    width: 900px;
    height: 700px;
    background-color: #0fc4a2;
  }
}
@media (max-width: 1000px) {
  .main__content {
    width: 700px;
    height: 700px;
    background-color: #0fc4a2;
  }
}
@media (max-width: 800px) {
  .main__content {
    width: 500px;
    height: 700px;
    background-color: #0fc4a2;
  }
}
@media (max-width: 600px) {
  .main__content {
    width: 320px;
    height: 520px;
    background-color: #0fc4a2;
  }
  .logo {
    max-width: 60px;
    max-height: 120px;
    margin: 10px 0;
  }
}
</style>
