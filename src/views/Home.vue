<template>
  <div class="container">
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
            <div class="icon">
              <img :src="_.icon">
            </div>
            <div>{{ _.title }}</div>
          </router-link>
        </li>
      </ul>
      <img class="img img-combo" src="/2.png">
    </div>
    <div class="bottom"></div>
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
.container {
  padding-bottom: 60px;
}
.slide {
  width: 100%;
  height: 180px;
}
.content {
  padding: .6rem;
}
.btns {
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  border-radius: 6px;
  background: url('/0.png') no-repeat center center;
  background-size: cover;
  font-size: .8rem;
  li {
    text-align: center;
    padding: 0 .3rem;
  }
  a {
    display: block;
    color: #616161;
  }
  img {
    height: 1.6em;
  }
  .icon {
    width: 3.2em;
    height: 3.2em;
    border-radius: 4em;
    margin: 0 auto .3em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ebf4fb;
  }
}
.img {
  width: 100%;
  &.img-combo {
    margin: .6rem 0;
  }
}
.bottom {
  display: flex;
  height: 52px;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff url('/3.png') no-repeat center center;
  background-size: contain;
  background-origin: content-box;
  padding: .3rem;
}
</style>
