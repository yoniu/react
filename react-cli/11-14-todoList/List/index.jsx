import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <div className="mb-2 border-bottom">
        {
          todos.map(function(todo){
            return <Item key={todo.id} {...todo} updateTodo={ updateTodo } deleteTodo={ deleteTodo } />
          })
        }
      </div>
    )
  }
}
