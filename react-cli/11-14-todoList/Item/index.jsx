import React, { Component } from 'react'

export default class Item extends Component {

  state = {
    mouse: false
  }

  onMouse = (flag) => {
    return () => {
      this.setState({mouse: flag});
    }
  }

  handleUpdate = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    }
  }

  handleDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm("是否删除")){
      this.props.deleteTodo(id);
    }
  }

  render() {
    const { id, text, done } = this.props;
    return (
      <div
        className="rounded d-flex justify-content-between align-items-center p-2 border mb-3"
        onMouseEnter={this.onMouse(true)}
        onMouseLeave={this.onMouse(false)}
        style={{backgroundColor: this.state.mouse ? '#dee2e6' : 'transparent'}}
      >
        <div className="form-check flex-fill">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" checked={done} onChange={ this.handleUpdate(id) } />
            <span>{text}</span>
          </label>
        </div>
        <button
          type="button"
          className="btn btn-danger"
          style={ { visibility: this.state.mouse ? 'visible' : 'hidden' } }
          onClick={ () => this.handleDelete(id) }
        >删除</button>
      </div>
    )
  }
}
