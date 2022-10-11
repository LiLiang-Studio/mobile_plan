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
    <div class="content">
      <ul class="btns">
        <li v-for="_ in menu" :key="_.id">
          <router-link :to="`/details/${_.id}`">
            <img :src="_.icon">
            <div>{{ _.title }}</div>
          </router-link>
        </li>
      </ul>
    </div>
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
.content {
  padding: .6rem;
}
.btns {
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  background-color: #fff;
  border-radius: 6px;
  li {
    text-align: center;
    padding: 0 .3rem;
  }
  a {
    display: inline-block;
    font-size: .9rem;
    color: #616161;
  }
  img {
    height: 1.5em;
  }
}
</style>
