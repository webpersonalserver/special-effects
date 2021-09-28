import Home from 'views/home'
import Clock from 'views/clock'
import Turntable from 'views/turntable'
import Graphics from 'views/graphics'

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
  }]
}]

export default routes