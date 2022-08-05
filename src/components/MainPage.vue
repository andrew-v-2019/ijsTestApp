<template>
  <div class="main-page">
    <Head />
    <banner />
    <main-menu />
    <bottom-menu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Head from "./Head.vue";
import Banner from "./Banner.vue";
import MainMenu from "./MainMenu.vue";
import BottomMenu from "./BottomMenu.vue";

export default defineComponent({
  name: "MainPage",
  components: {
    Head,
    Banner,
    MainMenu,
    BottomMenu,
  },
});
</script>

<style scoped>
.main-page {
  font-family: "RobotoFlex";
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
