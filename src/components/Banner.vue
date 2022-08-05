<template>
  <div class="banner">
    <div class="banner-txt">
      Все инженеры и Росреестр за 0 ₽ — оплатите первый этап строительства
      до 25 августа и Genius активируется автоматически
    </div>

    <div class="banner-icon-wrap">
      <div class="banner-icon">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.253906 16.5882C0.253906 21.9421 1.78515 25.8492 4.84765 28.3095C7.91014 30.7698 12.1279 31.9999 17.5009 31.9999C21.042 31.9999 24.0156 31.5177 26.4218 30.5531C28.8281 29.5746 30.6874 28.5122 31.9999 27.3659V14.7011H17.0498V20.5722H23.9609V24.6401C23.0722 25.1433 22.122 25.4928 21.1103 25.6885C20.1123 25.8702 18.9228 25.9611 17.542 25.9611C14.8349 25.9611 12.6748 25.3879 11.0615 24.2417C9.4619 23.0814 8.66209 20.8867 8.66209 17.6576V14.5753C8.66209 11.472 9.3867 9.33319 10.8359 8.15896C12.2988 6.97076 14.1377 6.37665 16.3525 6.37665C18.7041 6.37665 20.4951 6.72613 21.7255 7.42507C22.9697 8.11004 23.6328 9.09555 23.7148 10.3816L23.7353 10.6332H31.9384V10.2977C31.9384 6.84495 30.5644 4.30778 27.8164 2.68623C25.082 1.06468 21.3632 0.253906 16.6601 0.253906C11.834 0.253906 7.88963 1.48405 4.82714 3.94433C1.77832 6.40461 0.253906 10.3047 0.253906 15.6447V16.5882Z"
            fill="#090909"
          />
        </svg>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Banner",
});
</script>

<style scoped>
.banner-icon {
  width: 64px;
  height: 64px;
  left: 255px;
  top: 16px;

  background: linear-gradient(90deg, #c5acff 0%, #fbc2eb 100%), #000000;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner {
  margin-top: 33px;
  height: 107px;
  background: #090909;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-icon-wrap {
  margin-right: 16px;
}

.banner-txt {
  padding: 16px;
  font-style: normal;
  font-weight: 750;
  font-size: 12px;
  line-height: 125%;
  color: #f9f9f9;
  font-stretch: 151;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 499, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
}
</style>