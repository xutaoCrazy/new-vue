<template>
    <div>
        {{ msg }}-{{ $route.params.username }}-{{ $route.params.id }}
    </div>
</template>

<script>
export default {
  name: 'xutao1',
  data () {
    return {
      msg: '阿红是我心中的女神徐涛1'
    }
  }
}
</script>

<style scoped>

</style>
