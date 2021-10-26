import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import { connect } from 'react-redux'

import { addPerson } from "../../redux/actions/person"

class Person extends Component {

  handleAdd = () => {
    const personObj = {
      id: nanoid(),
      name: this.nameNode.value,
      age: this.ageNode.value
    }
    this.props.addHandle(personObj)
  }

  render() {
    return (
      <div>
        <h2>上方求和为：{this.props.count}</h2>
        <input ref={ c => this.nameNode = c } type="text" placeholder="name" />
        <input ref={ c => this.ageNode = c } type="text" placeholder="age" />
        <button onClick={this.handleAdd}>Add</button><br/>
        <ul>
          {
            this.props.personList.map(obj => {
              return <li key={obj.id}>{obj.name}---{obj.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    personList: state.rens,
    count: state.he
  }),
  { addHandle: addPerson }
)(Person)
