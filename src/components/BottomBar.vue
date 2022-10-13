<template>
  <footer :class="cls">
    <ul :class="`${cls}_list`">
      <li v-for="_ in items" :key="_.icon" :class="`${cls}_item`">
        <router-link :to="_.route">
          <img :src="_.icon">
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script setup>
import { getSrc } from '../utils'

const cls = 'ui-bottom-bar'
const items = [
  { route: '/', icon: getSrc('home.png') },
  { route: '/tariff', icon: getSrc('zf.png') },
  { route: '/terminal', icon: getSrc('zd.png') },
  { route: '/mine', icon: getSrc('me.png') }
]
</script>

<style lang="less">
.ui-bottom-bar {
  background-color: #fff;
  &_list, &_item, a, img {
    height: 100%;
  }
  &_list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: .3rem;
  }
  &_item {
    a {
      display: block;
    }
    img {
    }
  }
}
</style>
