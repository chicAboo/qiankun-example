import './public-path'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'antd/dist/antd.css'
import actions from './shared/actions'

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

function render(props = {}) {
  if (props) {
    // 注入 actions 实例
    actions.setActions(props)
  }
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

export async function bootstrap() {
  console.log('react app bootstraped')
}

export async function mount(props) {
  console.log('reactApp mount', props)
  render(props)
}

export async function unmount() {
  console.log('react unmount')
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
