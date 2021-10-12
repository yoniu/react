import { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

  state = {
    searching: false
  }

  searchAction = () => {
    const {keyWord: {value: keyword}} = this;
    if(!keyword) return alert('搜索内容不能为空');
    this.setState({searching: true});
    PubSub.publish('setState', {isLoading: true, isFirst: false});
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      response => {
        PubSub.publish('setState', {
          users: response.data.items
        });
      },
      error => {
        PubSub.publish('setState', {
          users: [],
          isError: error.message
        });
      }
    ).then(()=>{
      this.setState({searching: false});
      PubSub.publish('setState', {isLoading: false});
    });
  }

  render() {
    return (
      <div className="row g-2 my-3">
        <div className="col-8">
          <input
            ref={element => this.keyWord = element}
            type="text"
            className="form-control"
            placeholder="输入搜索内容"
          />
        </div>
        <div className="col-4 row">
          <button
            className="btn btn-primary col"
            disabled={this.state.searching}
            onClick={this.searchAction}
          >搜索</button>
        </div>
      </div>
    )
  }
}
