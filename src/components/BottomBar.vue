<template>
  <footer>
    <ul>
      <li v-for="_ in items" :key="_.icon">
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

</style>
