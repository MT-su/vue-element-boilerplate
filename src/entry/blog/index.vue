<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  created () {
    console.log(111)
  }
}
</script>

<style lang="less">
</style>
