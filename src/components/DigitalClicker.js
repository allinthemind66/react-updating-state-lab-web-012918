// Code DigitalClicker Component Here
import React from 'react'
import ReactDOM from 'react-dom'
class DigitalClicker extends React.Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState({timesClicked: parseInt(this.state.timesClicked) + 1}, ()=> console.log(this.state.timesClicked))
  }

  render(){
    return (
    <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
