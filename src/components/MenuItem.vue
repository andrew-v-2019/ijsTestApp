<template>
  <div class="menu-item" v-bind:class="{ 'menu-item_active': isActive }">
    <div
      class="menu-item__icon-wrap"
      v-bind:style="{ background: menuItemModel.color }"
    >
      <img v-bind:src="'/icons/' + menuItemModel.icon + '.svg'" />
    </div>
    <div class="menu-item__text">{{ menuItemModel.text }}</div>

    <div class="menu-item__arr">
      <img src="/icons/arr.svg" class="menu-item__arr-image" />
    </div>
  </div>
</template>

<script lang="ts">
import { MenuItemModel } from "@/Models/menuItemModel";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuItem",
  props: {
    menuItemModel: MenuItemModel,
    isActive: Boolean,
  },
  created() {},
  methods: {},
});
</script>

<style scoped>
.menu-item__icon-wrap {
  width: 32px;
  height: 32px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-item__text {
  margin-left: 12px;
  flex: 1;
  font-style: normal;
  font-weight: 750;
  font-size: 16px;
  line-height: 120%;
  color: #2d2d2d;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 499, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
}
.menu-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.1s;
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;
}

.menu-item_active {
  background: #d0d0d0;
}
.menu-item:not(.menu-item_active):hover {
  background: #f5f5f5;
}

.menu-item__arr-image {
  transition: all 0.2s;
}

.menu-item:hover .menu-item__arr-image {
  transform: scale(1.5);
}

.menu-item__arr {
  height: 14.92px;
}
</style>