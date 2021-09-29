import { Component } from 'react'
import Search from 'components/Search'
import { seModule } from 'static/js/table'
import './index.scss'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      data: seModule
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
        <Search />
        <div className="container">
          { this.renderCard() }
        </div>
      </div>
    )
  }
}

export default Home
