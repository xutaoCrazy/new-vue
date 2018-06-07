<template>
  <div id="app">
    <div>
      <router-link to='/xutao1'>阿红美</router-link>|
      <router-link to='/ahong1'>阿红好看</router-link>|
      <router-link to='/ahong2'>阿红超级好看</router-link>|
      <router-link to='/ahong3'>阿红超级完美</router-link>|
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
