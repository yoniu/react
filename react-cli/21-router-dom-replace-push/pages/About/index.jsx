import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import MyNavLink from '../../component/MyNavLink'
import Notice from './Notice'
import Message from './Message'

export default class About extends Component {
  render() {
    return (
      <div>
        About
        <div>
          <MyNavLink to="/about/notice">notice</MyNavLink>
          <MyNavLink to="/about/message">message</MyNavLink>
        </div>
        <Switch>
          <Route path="/about/notice" component={Notice}/>
          <Route path="/about/message" component={Message}/>
        </Switch>
      </div>
    )
  }
}
