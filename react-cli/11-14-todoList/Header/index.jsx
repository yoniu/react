import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class Header extends Component {

  addTodo = (event) => {
    const {keyCode, target } = event;
    if(keyCode !== 13) return;
    if(target.value.trim() === '') return alert("内容不能为空");
    const todoObj = {
      id: nanoid(),
      text: target.value,
      done: false
    }
    this.props.addTodo(todoObj);
    target.value = '';
  }

  render() {
    return (
      <div className="pb-3 mb-3 border-bottom">
        <input type="text" className="form-control" placeholder="请输入待办事项" onKeyUp={ this.addTodo } />
      </div>
    )
  }
}
