import { Component } from 'react'
import './index.scss'
import renderClock from './canvas'

class Clock extends Component {
  componentDidMount () {
    renderClock(document.getElementById('clock'))
  }

  render () {
    return (
      <div className="main">
        <canvas id="clock" width="800" height="800"></canvas>
      </div>
    )
  }
}

export default Clock
