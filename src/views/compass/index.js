import { Component } from 'react'
import './index.scss'
import renderCompass from './canvas'

class Compass extends Component {
  componentDidMount () {
    renderCompass({
      yearEle: document.getElementById('year'),
      monthEle: document.getElementById('month'),
      dayEle: document.getElementById('day'),
      weekEle: document.getElementById('week'),
      nicknameEle: document.getElementById('nickname'),
      hourEle: document.getElementById('hour'),
      minuteEle: document.getElementById('minute'),
      secondEle: document.getElementById('second'),
    })
  }

  render () {
    return (
      <div className="compass">
        <canvas id="year"></canvas>
        <canvas id="month"></canvas>
        <canvas id="day"></canvas>
        <canvas id="week"></canvas>
        <canvas id="nickname"></canvas>
        <canvas id="hour"></canvas>
        <canvas id="minute"></canvas>
        <canvas id="second"></canvas>
        <div className="masking"><div></div></div>
      </div>
    )
  }
}

export default Compass
