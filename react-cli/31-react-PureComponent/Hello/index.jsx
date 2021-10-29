import React, { Fragment, PureComponent } from "react";

export default class Hello extends PureComponent {

  state = {
    carName: '宝马'
  }

  newCar = () => {
    this.setState({carName: '奔驰'})
  }

  render() {
    console.log('Component Hello')
    return (
      <div>
        <h2>My car name is {this.state.carName}</h2>
        <button onClick={this.newCar}>buy a new car</button> <br />
        <B car={this.state.carName} />
      </div>
    )
  }
}

function B (props) {
  console.log('Component B')
  return (
    <Fragment>
      I got your car is {props.car}
    </Fragment>
  )
}
