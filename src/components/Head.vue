
<template>
  <div class="main-page__head">
    <span class="main-page__head-title"> Мой ИЖС </span>

    <span class="main-page__head-status">
      <div class="main-page__head-status-icon">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.857422 6.14974C0.857422 7.88441 1.35355 9.15031 2.34579 9.94744C3.33804 10.7446 4.7046 11.1431 6.44546 11.1431C7.59275 11.1431 8.5562 10.9869 9.33583 10.6744C10.1154 10.3573 10.7179 10.0131 11.1431 9.64172V5.5383H6.29928V7.44055H8.53849V8.75854C8.25056 8.92159 7.94269 9.03481 7.6149 9.09822C7.29153 9.1571 6.90615 9.18654 6.45875 9.18654C5.58167 9.18654 4.88178 9.00084 4.35908 8.62945C3.84081 8.25353 3.58167 7.54246 3.58167 6.49622V5.49754C3.58167 4.49207 3.81645 3.79911 4.28599 3.41866C4.75997 3.03368 5.35576 2.84119 6.07337 2.84119C6.83527 2.84119 7.41556 2.95442 7.81423 3.18088C8.21733 3.40281 8.43217 3.72211 8.45875 4.1388L8.46539 4.22032H11.1232V4.11162C11.1232 2.99292 10.678 2.17088 9.78765 1.6455C8.90172 1.12011 7.69685 0.857422 6.17304 0.857422C4.60936 0.857422 3.3314 1.25599 2.33915 2.05312C1.35133 2.85025 0.857422 4.11389 0.857422 5.84402V6.14974Z"
            fill="#090909"
          />
        </svg>
      </div>
      <span class="main-page__head-status-txt">статус</span>
    </span>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Head",
});
</script>

<style scoped>
.main-page__head {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main-page__head-title {
  font-style: normal;
  font-weight: 750;
  font-size: 26px;
  line-height: 120%;

  color: #090909;
  font-stretch: 151;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 499, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
}

.main-page__head-status {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main-page__head-status-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: linear-gradient(90deg, #c5acff 0%, #fbc2eb 100%);
  border-radius: 24px;

  margin-right: 8px;
}

.main-page__head-status-txt {
  font-style: normal;
  font-weight: 750;
  font-size: 14px;
}
</style>