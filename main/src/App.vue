<template>
  <div id="app">
    <el-container v-show="!$route.meta.withoutLayout">
      <el-aside width="200px">
        <Menu />
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>导航一</el-breadcrumb-item>
            <el-breadcrumb-item>sub-vue页面</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main>
          <!-- 登录后主应用的路由 -->
          <router-view v-show="$route.name" />
          <!-- 微应用容器 -->
          <div v-show="!$route.name" id="subapp-viewport"></div>
        </el-main>
      </el-container>
    </el-container>

    <!-- 登录路由 -->
    <router-view v-show="$route.meta.withoutLayout" />
  </div>
</template>

<script>
import Menu from './components/menu.vue'

export default {
  components: {
    Menu,
  },
  methods: {
    jumpVue(subapp) {
      history.pushState(null, subapp, subapp)
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}

.header {
  border-bottom: 1px solid #e6e6e6;
}
.breadcrumb {
  padding: 23px 0;
}
</style>
