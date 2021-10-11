import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Search from './Search';
import List from './List';

export default class App extends Component {

  state = {
    users: []
  }

  saveSearch = (request) => {
    this.setState({
      users: request.items
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <Search saveSearch={this.saveSearch}></Search>
            <List users={this.state.users}></List>
          </div>
        </div>
      </div>
    )
  }
}
