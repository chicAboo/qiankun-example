import Vue from 'vue'
import { registerMicroApps, start } from 'qiankun'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import shared from './shared/index'
import actions from './shared/actions'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

// 注册微应用信息
registerMicroApps(
  [
    {
      name: 'sub-vue',
      entry: '//localhost:7001',
      container: '#subapp-viewport',
      activeRule: '/sub-vue',
      props: {
        shared,
      },
    },
    {
      name: 'sub-react',
      entry: '//localhost:7002',
      container: '#subapp-viewport',
      activeRule: '/sub-react',
      props: {
        shared,
      },
    },
  ],
  {
    beforeLoad: [
      (app) => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
      },
    ],
    beforeMount: [
      (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
      },
    ],
    afterUnmount: [
      (app) => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
      },
    ],
  }
)

// setDefaultMountApp('/sub-vue')
start({ experimentalStyleIsolation: true })

actions.onGlobalStateChange((state) => {
  console.log('新的状态：', state)
  store.commit('SET_ROUTES', state.routes)
})
