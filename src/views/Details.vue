<template>
  <div v-if="submenu">
    <img class="banner" :src="submenu.banner">
    <div class="title">{{ submenu.title }}</div>
    <ul class="btns">
      <li v-for="_ in submenu.items" :key="_" class="btn">{{ _ }}</li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import menu from '../assets/data'

const route = useRoute()

const submenu = computed(() => {
  return menu.find(_ => _.id === +route.params.id)
})

onBeforeMount(() => {
  document.title = submenu.value.title
})
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
}
.btns {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .btn {
    width: 40%;
    margin: 1rem 3%;
  }
}
.title {
  text-align: center;
  margin: 1em;
  font-size: 1.5rem;
  color: #333;
}
</style>
