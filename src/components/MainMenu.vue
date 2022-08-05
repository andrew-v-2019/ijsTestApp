<template>
  <div class="main-menu">
    <menu-item
      :key="item.id"
      v-for="item in menuItems"
      :menu-item-model="item"
      :isActive="activeItemId === item.id"
      v-on:click="menuItemClicked(item)"
    >
      {{ item.text }}
    </menu-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MenuItemModel } from "../Models/menuItemModel";
import MenuItem from "./MenuItem.vue";

export default defineComponent({
  components: { MenuItem },
  name: "MainMenu",
  data() {
    return {
      menuItems: new Array<MenuItemModel>(),
      activeItemId: 0,
    };
  },
  created() {
    let items = new Array<MenuItemModel>();
    items.push(new MenuItemModel(1, `Избранное`, `heart`, `#5437FF`));
    items.push(new MenuItemModel(2, `Партнёрам`, `bodies`, `#34D1BF`));
    items.push(new MenuItemModel(3, `Промокоды`, `perc`, ` #FF6700`));
    items.push(new MenuItemModel(4, `Помощь`, `info`, ` #56ABFF`));
    items.push(new MenuItemModel(5, `Росреестр`, `flag`, `#FFBF00`));
    items.push(new MenuItemModel(6, `Договоры`, `sheet`, `#883FFF`));

    items.push(new MenuItemModel(7, `ИЖС Стандарт`, `shield`, `#23CE6B`));
    items.push(new MenuItemModel(8, `Как это работает`, `question`, `#5437FF`));

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
.main-menu {
  margin-top: 32px;
  flex: 1 0 auto;
}
</style>