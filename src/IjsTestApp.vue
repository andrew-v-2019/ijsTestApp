<template>
  <MainPage />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainPage from "./components/MainPage.vue";

export default defineComponent({
  name: "IjsTestApp",
  components: {
    MainPage,
  },
});
</script>

<style>
@font-face {
  font-family: "RobotoFlex";
  src: local("RobotoFlex"), url(./fonts/RobotoFlex.ttf) format("truetype");
}
</style>
