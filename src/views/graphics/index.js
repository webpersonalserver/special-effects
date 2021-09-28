import { Component } from 'react'
import './index.scss'
import contourImg from 'static/images/graphics/cow.png'
import renderGraphics from './canvas'

class Graphics extends Component {
  componentDidMount () {
    renderGraphics(document.getElementById('graphics'), contourImg)
  }

  render () {
    return (
      <canvas id="graphics"></canvas>
    )
  }
}

export default Graphics
