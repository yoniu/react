import React, { Component } from 'react'

export default class Count extends Component {

  state = {
    count: 0
  }

  increment = () => {
    const { count } = this.state
    const { value } = this.selectValue
    this.setState({
      count: count + value * 1
    })
  }

  decrement = () => {
    const { count } = this.state
    const { value } = this.selectValue
    this.setState({
      count: count - value * 1
    })
  }

  incrementOdd = () => {
    const { count } = this.state
    const { value } = this.selectValue
    if (count % 2 !== 0) {
      this.setState({
        count: count + value * 1
      })
    }
  }

  incrementAsync = () => {
    const { count } = this.state
    const { value } = this.selectValue
    setTimeout(() => {
      this.setState({
        count: count + value * 1
      })
    }, 1000)
  }


  render() {
    return (
      <div>
        <h2>求和结果：{this.state.count}</h2>
        <select ref={c => this.selectValue = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp;
        <button onClick={this.incrementOdd}>结果为奇数时+</button> &nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
