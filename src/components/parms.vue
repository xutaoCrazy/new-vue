<template>
    <div>
      <p> {{ $route.params.id }} </p>
      <p>  {{ $route.params.title }} </p>
    </div>
</template>
<script>
export default {
  name: 'parms',
  data () {
    return {
      msg: 'parms page'
    }
  },
  beforeRouteEnter: (to, from, next) => { // 模板里面进入钩子函数
    console.log('准备进入路由模板')
    next()
  },
  beforeRouteLeave: (to, from, next) => { // 模板里面离开钩子函数
    console.log('准备离开路由模板')
    next()
  }
}
</script>
