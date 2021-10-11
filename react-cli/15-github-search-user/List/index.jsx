import { Component } from 'react'

export default class List extends Component {
  render() {
    const users = this.props.users;
    return (
      <div className="row">
        {
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
