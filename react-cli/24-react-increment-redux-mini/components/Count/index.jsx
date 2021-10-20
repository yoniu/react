import React, { Component } from 'react'

import store from '../../redux/store'

export default class Count extends Component {

  componentDidMount () {
    store.subscribe(() => {
      this.setState({})
    })
  }

  increment = () => {
    const { value } = this.selectValue
    store.dispatch({ type: 'increment', data: value * 1 })
  }

  decrement = () => {
    const { value } = this.selectValue
    store.dispatch({ type: 'decrement', data: value * 1 })
  }

  incrementOdd = () => {
    const count = store.getState()
    const { value } = this.selectValue
    if (count % 2 !== 0) {
      store.dispatch({ type: 'increment', data: value * 1 })
    }
  }

  incrementAsync = () => {
    const { value } = this.selectValue
    setTimeout(() => {
      store.dispatch({ type: 'increment', data: value * 1 })
    }, 1000)
  }


  render() {
    return (
      <div>
        <h2>求和结果：{store.getState()}</h2>
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
