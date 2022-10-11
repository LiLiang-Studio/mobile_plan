<template>
  <div v-if="submenu">
    <img class="banner" :src="submenu.banner">
    <div class="content">
      <div class="title">{{ submenu.title }}</div>
      <ul class="btns">
        <li v-for="_ in submenu.items" :key="_" class="btn">{{ _ }}</li>
      </ul>
    </div>
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
.content {
  margin: 1.2rem .6rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: #fff;
}
.btns {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .btn {
    width: 42%;
    padding-top: .6rem;
    padding-bottom: .6rem;
    margin: .6rem 2%;
  }
}
.title {
  text-align: center;
  margin: .5rem 0 .8rem;
  font-size: 1.5rem;
  color: #333;
}
</style>
