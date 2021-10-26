import React, { Component } from 'react'
import {connect} from 'react-redux'
import { incrementAction, decrementAction, incrementActionAsync } from '../../redux/actions/count'

class Count extends Component {

  increment = () => {
    const { value } = this.selectValue
    this.props.handleIncrement(value * 1)
  }

  decrement = () => {
    const { value } = this.selectValue
    this.props.handleDecrement(value * 1)
  }

  incrementOdd = () => {
    const { count } = this.props
    const { value } = this.selectValue
    if (count % 2 !== 0) {
      this.props.handleIncrement(value * 1)
    }
  }

  incrementAsync = () => {
    const { value } = this.selectValue
    this.props.handleIncrementAsync(value * 1, 1000)
  }


  render() {
    return (
      <div>
        <h2>求和结果：{this.props.count}</h2>
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

export default connect(
  state => ({ count: state.he}),
  {
    handleIncrement: incrementAction,
    handleDecrement: decrementAction,
    handleIncrementAsync: incrementActionAsync
  }
)(Count)