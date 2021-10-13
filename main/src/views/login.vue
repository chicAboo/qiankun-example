<template>
  <div class="login">
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
import actions from '../shared/actions'

export default {
  name: 'Login',
  mounted() {
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log('[主应用观察者：token 改变前的值为] ', prevState.token)
      console.log(
        '[主应用观察者：登录状态发生改变，改变后的 token 的值为] ',
        state.token
      )

      this.$router.push('/')
      actions.offGlobalStateChange()
    })
  },
  methods: {
    async login() {
      // 登录成功后，设置 token
      actions.setGlobalState({ token: 'test123' })
    },
  },
}
</script>

<style scoped>
.login {
  margin: 20px;
}
</style>
