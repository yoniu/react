import { Component } from "react";
import { Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import Page from './pages/Page'

export default class App extends Component{
  render(){
    return (
      <div>
        <div>
          <Link to="/Home">Home</Link> | 
          <Link to="/Page">Page</Link>
        </div>
        <Route path="/Home" component={Home} />
        <Route path="/Page" component={Page} />
      </div>
    )
  }
}