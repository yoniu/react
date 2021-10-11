import { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  state = {
    searching: false
  }

  searchAction = () => {
    const {keyWord: {value: keyword}} = this;
    if(!keyword) return alert('搜索内容不能为空');
    this.setState({searching: true});
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      response => {this.props.saveSearch(response.data)},
      error => {alert(error.msg)}
    ).then(()=>{
      this.setState({searching: false});
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
