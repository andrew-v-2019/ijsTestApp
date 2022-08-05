<template>
  <div class="bottom-menu">
    <bottom-menu-item
      :key="item.id"
      v-for="item in menuItems"
      :menu-item-model="item"
      :isActive="activeItemId === item.id"
      v-on:click="menuItemClicked(item)"
    >
      {{ item.text }}
    </bottom-menu-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MenuItemModel } from "../Models/menuItemModel";
import BottomMenuItem from "./BottomMenuItem.vue";

export default defineComponent({
  components: { BottomMenuItem },
  name: "BottomMenu",
  data() {
    return {
      menuItems: new Array<MenuItemModel>(),
      activeItemId: 5,
    };
  },
  created() {
    let items = new Array<MenuItemModel>();
    items.push(new MenuItemModel(1, `Главная`, `home`, ""));
    items.push(new MenuItemModel(2, `Каталог`, `book`, ""));
    items.push(new MenuItemModel(3, `Landscape`, `tree`, ""));
    items.push(new MenuItemModel(4, `Стройка`, `circle`, ""));
    items.push(new MenuItemModel(5, `Меню`, `body`, ""));
    this.menuItems = items;
  },

  methods: {
    menuItemClicked(menuItemModel: MenuItemModel) {
      this.activeItemId = menuItemModel.id;
    },
  },
});
</script>


<style scoped>
.bottom-menu {
  justify-content: space-around;
  display: flex;
  align-items: center;

  min-height: 90px;

  background: rgba(154, 152, 154, 0.94);
  backdrop-filter: blur(20px);

  border-radius: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>

