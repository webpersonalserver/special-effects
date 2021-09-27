import { Component } from 'react'
import './index.scss'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      data: [{
        label: 'canvas时钟',
        desc: '使用canvas绘制时钟',
        path: '/clock'
      }, {
        label: 'canvas转盘',
        path: '/clock'
      }]
    }
  }
  // 渲染卡片模块
  renderCard () {
    const toNextPage = path => {
      const { history } = this.props

      history.push(path)
    }
    const res = this.state.data.map((e, i) => (
      <div className="card" key={i} onClick={ () => toNextPage(e.path) }>
        <div className="card-title">{ e.label }</div>
        <div className="card-desc">{ e.desc }</div>
      </div>
    ))

    return (
      <div className="box">{ res }</div>
    )
  }

  render () {
    return (
      <div className="Home">
        { this.renderCard() }
      </div>
    )
  }
}

export default Home
