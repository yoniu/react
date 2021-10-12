import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Search from './Search';
import List from './List';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <Search></Search>
            <List></List>
          </div>
        </div>
      </div>
    )
  }
}
