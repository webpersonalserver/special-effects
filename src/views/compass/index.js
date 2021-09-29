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
      hourEle: document.getElementById('hour'),
      minuteEle: document.getElementById('minute'),
      secondEle: document.getElementById('second'),
    })
  }

  render () {
    return (
      <div className="compass">
        <canvas id="year" width="940" height="940"></canvas>
        <canvas id="month" width="940" height="940"></canvas>
        <canvas id="day" width="940" height="940"></canvas>
        <canvas id="week" width="940" height="940"></canvas>
        <canvas id="hour" width="940" height="940"></canvas>
        <canvas id="minute" width="940" height="940"></canvas>
        <canvas id="second" width="940" height="940"></canvas>
      </div>
    )
  }
}

export default Compass
