<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="less">
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background: linear-gradient(to bottom, #2679f4, #fff);
}

a {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
}

li {
  list-style: none;
}

.btn {
  display: inline-block;
  background-color: #2196f3;
  border: 1px solid #1976d2;
  color: #fff;
  font-size: 1.2rem;
  padding: .5rem 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
