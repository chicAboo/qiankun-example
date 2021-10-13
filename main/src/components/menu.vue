<template>
  <el-menu :default-openeds="['1']" class="el-menu-vertical-demo">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">Vue 模块</span>
      </template>
      <el-menu-item
        :key="route.path"
        v-for="route in menus"
        :index="route.path"
        class="sub-menu"
        @click="jumpPage(`/sub-vue/${route.path}`)"
        >{{ route.name }}</el-menu-item
      >
    </el-submenu>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">React 模块</span>
      </template>
      <el-menu-item
        :key="route.route"
        v-for="route in reactMenu"
        :index="route.route"
        class="sub-menu"
        @click="jumpPage(`/sub-react/${route.route}`)"
        >{{ route.title }}</el-menu-item
      >
    </el-submenu>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      menus: [
        {
          path: '/',
          name: 'Home',
        },
        {
          path: '/about',
          name: 'About',
        },
        {
          path: '/list',
          name: 'List',
        },
      ],
      reactMenu: [
        {
          key: 'react',
          route: '/',
          title: '主页',
        },
        {
          key: 'react-list',
          route: '/list',
          title: '列表页',
        },
        {
          key: 'react-communication',
          route: '/communication',
          title: '通讯页',
        },
      ],
    }
  },
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters(['routes']),
  },
  mounted() {
    console.log('test', this.routes)
  },
  methods: {
    jumpPage(path) {
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo /deep/ {
  height: 100vh;

  .el-submenu__title,
  .el-menu-item {
    text-align: left;
  }
}
.sub-menu {
  padding-left: 50px !important;
}
</style>
