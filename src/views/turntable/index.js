import { Component } from 'react'
import './index.scss'
import pointerImg from 'static/images/turntable/icon_pointer.png'
import { renderTurntable, lottery } from './canvas'

class Turntable extends Component {
  componentDidMount () {
    renderTurntable(document.getElementById('turntable'))
  }

  render () {
    return (
      <div className="canvas-outer">
        <div className="canvas-inner">
          <canvas id="turntable" width="600" height="600"></canvas>
        </div>
        <div className="pointer" style={{backgroundImage: `url(${pointerImg})`}} onClick={ () => lottery() }></div>
      </div>
    )
  }
}

export default Turntable
