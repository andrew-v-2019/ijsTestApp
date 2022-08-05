<template>
  <div class="bottom-menu-item">
    <div class="bottom-menu-item__icon">
      <img
        v-if="!isActive"
        v-bind:src="'/icons/' + menuItemModel.icon + '.svg'"
      />

      <img
        v-if="isActive"
        v-bind:src="'/icons/' + menuItemModel.icon + '_active.svg'"
      />
    </div>
    <div
      class="bottom-menu-item__text"
      v-bind:class="{ 'bottom-menu-item__text_active': isActive }"
    >
      {{ menuItemModel.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MenuItemModel } from "../Models/menuItemModel";
import MenuItem from "./MenuItem.vue";

export default defineComponent({
  components: { MenuItem },
  name: "BottomMenuItem",
  props: {
    menuItemModel: MenuItemModel,
    isActive: Boolean,
  },
  data() {
    return {};
  },
  created() {},

  methods: {},
});
</script>


<style scoped>
.bottom-menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.1;
  flex: 1 0 auto;
  height: 100%;
}

.bottom-menu-item:hover {
  background: rgba(154, 152, 154, 0.5);
}

.bottom-menu-item__text_active {
  color: #deb1e3 !important;
}

.bottom-menu-item__text {
  transition: all 0.2s;
  margin-right: 12px;
  margin-left: 12px;
  margin-top: 10.6px;
  font-style: normal;
  font-weight: 750;
  line-height: 100%;
  font-size: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #090909;
  font-stretch: 151;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 499, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
}
</style>