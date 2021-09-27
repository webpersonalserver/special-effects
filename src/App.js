import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import 'App.scss'
import routes from 'router'
import Header from 'components/Header'

class App extends Component {
  // 监听路由变化，并返回当前路由元信息
  watchRoutes () {
    const { pathname } = this.props.location
    const route = routes[0].routes.find(e => {
      return e.path === pathname
    })
    const { meta = { title: '特效库', bgColor: '#F4F4F4', hasHeader: false } } = route
    let style

    // 设置页面背景色
    document.body.style.backgroundColor = meta.bgColor
    // 设置页面标题
    document.title = meta.title
    // 设置body模块的style
    style = { marginTop: meta.hasHeader ? '50px' : 0 }

    return {
      route,
      style
    }
  }

  render () {
    // 监听路由变化，并处理相关逻辑
    const { route: { meta: {
      hasHeader
    } }, style } = this.watchRoutes()

    return (
      <div className="App">
        { hasHeader ? <Header /> : null }
        <div className="body" style={ style }>
          { renderRoutes(routes[0].routes) }
        </div>
      </div>
    )
  }
}

export default withRouter(App)
