<template>
  <div class="header">
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys1"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">nav 1</a-menu-item>
      <a-menu-item key="2">nav 2</a-menu-item>
      <a-menu-item key="3">nav 3</a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      selectedKeys1: ref(['3']),
    };
  },
};
</script>

<style lang="less" scoped>
.header{
  width: 100%;
}
</style>
