import { Component } from 'react'
import './index.scss'

class Bullet extends Component {
  constructor () {
    super()
    this.state = {
      index: -1,
      effects: [{
        label: '效果1'
      }]
    }
  }

  renderDialogModule () {
    const { effects } = this.state
    const res = effects.map((e, i) => (
      <div className={`dialog effect-${i}`} id={`effect-${i}`} key={`effect-${i}`}>
        <div className="main">
          <p className="tip">弹框特效</p>
          <button className="close" onClick={ () => { this.hideDialogEffect() }}>关 闭</button>
        </div>
      </div>
    ))

    return res
  }
  renderModule () {
    const { effects, index } = this.state
    const res = effects.map((e, i) => (
      <div className={ `cell ${i === index ? 'active' : ''}` } key={`cell-${i}`} onClick={ () => { this.showDialogEffect(i) }}>
        { e.label }
      </div>
    ))

    return (
      <div className="box">{ res }</div>
    )
  }
  showDialogEffect (i) {
    const ele = document.getElementById(`effect-${i}`)

    this.setState({ index: i })
    this.effectOne(ele)
  }
  hideDialogEffect () {
    const { index } = this.state
    const ele = document.getElementById(`effect-${index}`)

    ele.style.backgroundColor = 'rgba(55, 58, 71, 0)'
    ele.children[0].style.transform = 'translate(-50%, -50%) scale(0.5, 0.5)'
    ele.children[0].style.opacity = 0
    setTimeout(() => {
      ele.style.display = 'none'
    }, 300)
  }
  // 特效1的展示动画
  effectOne (ele) {
    ele.style.display = 'block'
    setTimeout(() => {
      ele.style.backgroundColor = 'rgba(55, 58, 71, .4)'
      ele.children[0].style.transform = 'translate(-50%, -50%) scale(1, 1)'
      ele.children[0].style.opacity = 1
    }, 0)
  }


  render () {
    return (
      <div className="bullet">
        { this.renderModule() }
        { this.renderDialogModule() }
      </div>
    )
  }
}

export default Bullet
