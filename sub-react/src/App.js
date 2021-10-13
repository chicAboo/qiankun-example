import React, { Suspense, useState, useEffect } from 'react'
import { Menu } from 'antd'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from 'react-router-dom'

import Home from './pages/home'
import List from './pages/list'
import Communication from './pages/communication'

const menus = [
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
]

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? '/sub-react' : ''
const App = () => {
  const { pathname } = window.location
  // const history = useHistory()
  const [refresh, setRefresh] = useState(0)
  const [selectedKeys, setSelectKeys] = useState(['react'])
  useEffect(() => {
    const menu = menus.find((item) => `${BASE_NAME}${item.route}` === pathname)
    setSelectKeys(() => [menu ? menu.key : 'sub-react'])
  }, [refresh, pathname])

  return (
    <Router basename={BASE_NAME}>
      <section>
        <Menu
          onClick={() => {
            setRefresh((refresh) => ++refresh)
          }}
          selectedKeys={selectedKeys}
          mode="horizontal"
        >
          {menus.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <Link to={item.route}>{item.title}</Link>
              </Menu.Item>
            )
          })}
        </Menu>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/communication" component={Communication} />
          </Switch>
        </Suspense>
      </section>
    </Router>
  )
}

export default App
