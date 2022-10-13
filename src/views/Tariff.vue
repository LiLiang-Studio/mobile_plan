<template>
  <div :class="cls">
    <ul :class="`${cls}_list`">
      <li v-for="_ in imgList" :key="_.src" :class="`${cls}_item`">
        <img :src="_.src">
      </li>
    </ul>
  </div>
</template>

<script setup>
const cls = 'page-tariff'
const imgList = [
  {
    src: 'zifei01.png'
  },
  {
    src: 'zifei02.png'
  },
  {
    src: 'zifei03.png'
  },
  {
    src: 'zifei04.jpg'
  }
]
</script>

<style lang="less">
.page-tariff {
  padding: .8rem;
  &_item {
    margin-bottom: .8rem;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
