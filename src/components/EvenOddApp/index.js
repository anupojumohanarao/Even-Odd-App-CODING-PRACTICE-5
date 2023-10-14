// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {onIncrease: 0}

  onRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncreaseButton = () => {
    const getRandomNumberDigit = this.onRandomNumber()
    this.setState(prevState => ({
      onIncrease: prevState.onIncrease + getRandomNumberDigit,
    }))
  }

  render() {
    const {onIncrease} = this.state
    const mainButtonText = onIncrease % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="main-bg-container">
        <h1 className="main-heading">Count {onIncrease}</h1>
        <p className="main-paragraph">Count is {mainButtonText}</p>
        <button
          type="button"
          onClick={this.onIncreaseButton}
          className="main-button"
        >
          Increment
        </button>
        <p className="next-paragraph">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
