<template>
    <div>
      <router-link :to="{name:'xutao1',params:{username:'xutao',id:'122'}}">徐涛帅</router-link>
      <router-link to='/xutao2'>徐涛好看</router-link>
      <router-link to='/xutao3'>徐涛是阿红男神</router-link>
      <router-link to='/xutao4'>徐涛一直都很帅</router-link>
      <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.$router.push({ path: '/xutao1' })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
