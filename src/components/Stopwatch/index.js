// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  onStart = () => {
    this.intervalId = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onStop = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const miuntes = Math.floor(timeElapsedInSeconds / 60)
    if (miuntes < 10) {
      return `0${miuntes}`
    }
    return miuntes
  }

  renderSecondes = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSecondes()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time} </h1>
            <div className="timer-buttons">
              <button
                className="button green"
                type="button"
                onClick={this.onStart}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="button red"
                type="button"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                className="button yellow"
                type="button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
