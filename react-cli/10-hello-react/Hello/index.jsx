import { Component } from "react";
import Css from './index.module.css'

export default class Hello extends Component{
  render(){
    return (
      <h2 className={Css.title}>Hello!</h2>
    )
  }
}