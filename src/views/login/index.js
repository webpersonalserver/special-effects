import { Component } from 'react'
import './index.scss'
import CanvasParticle from './canvas'
import logo from 'static/images/icon_logo.png'

class Login extends Component {
  componentDidMount () {
    CanvasParticle({
      ele: 'effects', // 目标元素id名称
      vx: 4,	//小球x轴速度,正为右，负为左
      vy: 4,	//小球y轴速度
      height: 2,	//小球高宽，其实为正方形，所以不宜太大
      width: 2,
      count: 200,		//点个数
      color: "121, 162, 185", 	//点颜色
      stroke: "130,255,255", 		//线条颜色
      dist: 6000, 	//点吸附距离
      e_dist: 20000, 	//鼠标吸附加速距离
      max_conn: 10 	//点到点最大连接数
    })
  }

  render () {
    return (
      <div className="main">
        <div id="effects"></div>
        <div className="body">
          <div className="logo">
            <img src={ logo } />
            <span>特效库</span>
          </div>
          <p className="title">使用邮箱注册用户登录</p>
          <div className="column">
            <div className="column-icon"><i className="iconfont icon-zhanghao"></i></div>
            <input className="column-input" placeholder="邮箱地址" />
          </div>
          <div className="column">
            <div className="column-icon"><i className="iconfont icon-mima"></i></div>
            <input className="column-input" type="password" placeholder="密码" />
          </div>
          <button className="btn">登 录</button>
        </div>
      </div>
    )
  }
}

export default Login
