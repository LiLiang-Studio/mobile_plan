<template>
  <div>
    <Swiper
      loop
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :modules="swiperMmodules">
      <SwiperSlide v-for="_ in menu" :key="_.id">
        <img class="slide" :src="_.banner">
      </SwiperSlide>
    </Swiper>
    <ul class="btns">
      <li v-for="_ in menu" :key="_.id">
        <router-link class="btn" :to="`/details/${_.id}`">{{ _.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { Autoplay, Pagination, Swiper, SwiperSlide } from '../plugins/swiper'
import menu from '../assets/data'

const swiperMmodules = [Autoplay, Pagination]
onBeforeMount(() => {
  document.title = '首页'
})
</script>

<style lang="less" scoped>
.slide {
  width: 100%;
}
.btns {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  .btn {
    box-sizing: content-box;
    width: 2.2em;
    height: 2.2em;
    border-radius: 5em;
    margin: .5em;
    padding: 1em;
  }
}
</style>
