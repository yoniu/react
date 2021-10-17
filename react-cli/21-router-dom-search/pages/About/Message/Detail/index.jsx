import React, { Component } from 'react'
import qs from 'qs'

export default class Detail extends Component {
  state = {
    dataDetail: [
      {id: '1', content: 'nmsl8'},
      {id: '2', content: 'awsl8'}
    ]
  }
  render() {
    const { search } = this.props.location
    const { id, message } = qs.parse(search.slice(1))
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
