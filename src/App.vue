<template>
  <div id="app">
    <NavBarMenu />
    <MainData />
  </div>
</template>

<script>
import NavBarMenu from '@/components/NavBarMenu.vue'
import MainData from '@/components/MainData.vue'

export default {
  name: 'App',
  components: {
    NavBarMenu,
    MainData
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  background: #efefef;
}

#app {
  width: 100%;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #24292e;
  font-size: 16px;
}
</style>
