<template>
  <div>
    <el-button @click="login">登录测试</el-button>
  </div>
</template>

<script>
import loginApi from '@/api/login'
export default {
  data () {
    return {

    }
  },
  methods: {
    login () {
      loginApi.login({
        username: '22',
        password: '11'
      }).then(res => {

      })
    }
  },
  created () {

  }
}
</script>

<style scoped>
</style>
