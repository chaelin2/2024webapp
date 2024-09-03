<template>
  <MenubarView />
</template>

<script>
import MenubarView from "./components/MenubarView.vue";

export default {
  components: {
    MenubarView: MenubarView,
  },
};
</script>

<style lang="scss" scoped>
.conWrap {
  width: 100%;
  //    background-color: skyblue;
}
.container {
  width: 1000px;
  margin: 0 auto;

  img {
    display: block;
  }
}
</style>
