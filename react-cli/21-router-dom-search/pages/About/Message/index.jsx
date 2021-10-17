import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    data: [
      {id: '1', message: 'nmsl'},
      {id: '2', message: 'awsl'}
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.data.map(current => {
              return (
                <li key={current.id}>
                  <Link to={`/about/message/detail?id=${current.id}&message=${current.message}`}>{current.message}</Link>
                </li>
              )
            })
          }
        </ul>
        <Route path="/about/message/detail" component={Detail} />
      </div>
    )
  }
}
