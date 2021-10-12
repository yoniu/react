import { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {

  state = {
    users: [],
    isError: undefined,
    isLoading: false,
    isFirst: true
  }

  componentDidMount(){
    PubSub.subscribe('setState', (_, stateObject) => {
      this.setState(stateObject);
    });
  }

  render() {
    const { users, isError, isLoading, isFirst } = this.state;
    return (
      <div className="row">
        {
          isFirst ? <div class="alert alert-primary col-12" role="alert">Search users from Github.com</div> :
          isLoading ? <div class="alert alert-success col-12" role="alert">The data is Loading...</div> :
          isError ? <div class="alert alert-danger col-12" role="alert">${isError}</div> :
          users.map(user => {
            return (
              <div className="col-4" key={user.id}>
                <div className="card px-1 mb-1">
                  <img src={user.avatar_url} className="card-img-top" alt="avatar" />
                  <div className="card-body">
                    <h5 className="card-title">{user.login}</h5>
                    <a href={user.html_url} className="btn btn-primary">直达</a>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    )
  }
}
