import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Footer extends Component {

  goForward = () => {
    this.props.history.goForward()
  }

  goBack = () => {
    this.props.history.goBack()
  }

  replace = () => {
    this.props.history.replace('/about/message')
  }

  render() {
    return (
      <div>
        <button onClick={this.goBack}>返回</button>
        <button onClick={this.goForward}>前进</button>
        <button onClick={this.replace}>替换</button>
      </div>
    )
  }
}

export default withRouter(Footer)