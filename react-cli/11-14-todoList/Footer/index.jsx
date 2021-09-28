import React, { Component } from 'react'

export default class Footer extends Component {

  handleCheckAll = (event) => {
    this.props.checkedAll(event.target.checked)
  }

  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props;
    const todosLength = todos.length;
    const todosDone = todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0);
    return (
      <div className="d-flex justify-content-between align-items-center">
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="checkbox"
            checked={ todosDone===todosLength && todosLength > 0 }
            onChange={ this.handleCheckAll }
          />
          <span> 已完成 {todosDone} / {todosLength}</span>
        </label>
        <button type="button" className="btn btn-danger" onClick={this.handleClearAllDone}>删除已完成</button>
      </div>
    )
  }
}
