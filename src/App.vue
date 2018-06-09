<template>
  <div id="app">
      <p>
        <button @click='goBCak'>后退</button>
        <button @click='goGo'>前进</button>
        <button @click='gohome'>返回首页</button>
      </p>
      <router-link to='/xutao1'>阿红美</router-link>|
      <router-link to='/ahong1'>阿红好看</router-link>|
      <router-link to='/ahong2'>阿红超级好看</router-link>|
      <router-link to='/ahong3'>阿红超级完美</router-link>|
      <router-link to='/xutao/94122/xutao'>parms</router-link>
      <router-link to='/gohome'>gohome</router-link>
      <router-link to='/xutao/94122/xutao'>gohomes</router-link>
      <router-link to='/bossxu'>bossxu</router-link>
      <transition name='fade' mode='out-in'>
        <router-view></router-view>
      </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    goBCak () {
      this.$router.go(-1)
    },
    goGo () {
      this.$router.go(1)
    },
    gohome () {
      this.$router.push('/')
    }
  }
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
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
