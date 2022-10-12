<template>
  <div :class="cls">
    <div :class="`${cls}_content`">
      <router-view />
    </div>
    <UiBottomBar :class="`${cls}_bottom-bar`" />
  </div>
</template>

<script setup>
import UiBottomBar from '../components/BottomBar.vue'
const cls = 'page-home-layout'
</script>

<style lang="less">
.page-home-layout {
  padding-bottom: 50px;
  &_content {

  }
  &_bottom-bar {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
  }
}
</style>
