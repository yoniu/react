import React, { Component } from 'react'

export default class Detail extends Component {
  state = {
    dataDetail: [
      {id: '1', content: 'nmsl8'},
      {id: '2', content: 'awsl8'}
    ]
  }
  render() {
    const { id, message } = this.props.match.params
    const { content } = this.state.dataDetail.find(detailObj => {
      return detailObj.id === id
    })
    return (
      <div>
        <ul>
          <li>Id: {id}</li>
          <li>message: {message}</li>
          <li>content: { content }</li>
        </ul>
      </div>
    )
  }
}
