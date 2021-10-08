import './public-path'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import VueRouter from 'vue-router'
import actions from './shared/actions'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
let instance = null

Vue.use(ElementUI)

function render(props = {}) {
  if (props) {
    // 注入 actions 实例
    actions.setActions(props)
  }

  const { container } = props
  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/sub-vue' : '/',
    mode: 'history',
    routes,
  })

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

export async function mount(props) {
  console.log('[vue] props from main framework', props)

  props.onGlobalStateChange((state) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('子应用监听的全局状态', state)
  })

  // 注册子应用路由
  props.setGlobalState({ routes })

  render(props)
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
