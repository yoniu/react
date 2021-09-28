import React, { Component } from 'react';
import Header from './Header'
import List from './List'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  state = {
    todos: [
      {
        id: "1",
        text: '吃饭',
        done: true
      },
      {
        id: "2",
        text: '睡觉',
        done: false
      },
      {
        id: "3",
        text: '游戏',
        done: true
      },
    ],
  }

  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [ todoObj, ...todos ];
    this.setState({
      todos: newTodos
    });
  }

  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj)=>{
      if( todoObj.id === id ) todoObj.done = done;
      return todoObj;
    });
    this.setState({
      todos: newTodos
    });
  }

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter(todoObj => todoObj.id !== id);
    this.setState({
      todos: newTodos
    });
  }

  checkedAll = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map(todoObj => {
      return {...todoObj, done};
    });
    this.setState({
      todos: newTodos
    });
  }

  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter(todoObj => !todoObj.done);
    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <h1 className="mt-2">TodoList</h1>
            <Header addTodo={ this.addTodo } />
            <List todos={ this.state.todos } updateTodo={ this.updateTodo } deleteTodo={ this.deleteTodo } />
            <Footer todos={ this.state.todos } checkedAll={this.checkedAll} clearAllDone={this.clearAllDone} />
          </div>
        </div>
      </div>
    )
  }
}
