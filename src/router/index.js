import Home from 'views/home'
import Login from 'views/login'
import Clock from 'views/clock'
import Turntable from 'views/turntable'
import Graphics from 'views/graphics'
import Compass from 'views/compass'

const routes = [{
  path: '/',
  exact: true,
  routes: [{
    path: '/',
    name: 'Home',
    exact: true,
    meta: {
      title: '首页',
      bgColor: '#F4F4F4',
      hasHeader: true
    },
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    exact: true,
    meta: {
      title: '登录',
      bgColor: '#000000'
    },
    component: Login
  }, {
    path: '/clock',
    name: 'Clock',
    meta: {
      title: 'canvas时钟',
      bgColor: '#1A1A1A'
    },
    component: Clock
  }, {
    path: '/turntable',
    name: 'Turntable',
    meta: {
      title: 'canvas转盘',
      bgColor: '#1A1A1A'
    },
    component: Turntable
  }, {
    path: '/graphics',
    name: 'Graphics',
    meta: {
      title: '图形',
      bgColor: '#87CEFF'
    },
    component: Graphics
  }, {
    path: '/compass',
    name: 'Compass',
    meta: {
      title: '罗盘',
      bgColor: '#1A1A1A'
    },
    component: Compass
  }]
}]

export default routes