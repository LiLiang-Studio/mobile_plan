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
const cls = 'page-terminal'
const imgList = [
  {
    src: 'zhongduan01.jpg'
  },
  {
    src: 'zhongduan02.jpg'
  },
  {
    src: 'zhongduan03.jpg'
  },
  {
    src: 'zhongduan05.jpg'
  }
]
</script>

<style lang="less">
.page-terminal {
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
