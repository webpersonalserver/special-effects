import { Component } from 'react'
import './index.scss'
import logo from 'static/images/icon_logo.png'

class Header extends Component {
  toLoginPage () {
    const { history } = this.props

    history.push('/login')
  }

  render () {
    return (
      <div className="header">
        <div className="left">
          <div className="logo">
            <img src={ logo } />
            <span>特效库</span>
          </div>
        </div>
        <div className="right">
          <div className="user" onClick={ () => this.toLoginPage() }>登录/注册</div>
        </div>
      </div>
    )
  }
}

export default Header