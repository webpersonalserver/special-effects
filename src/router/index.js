import Home from 'views/home'
import Clock from 'views/clock'

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
  }]
}]

export default routes