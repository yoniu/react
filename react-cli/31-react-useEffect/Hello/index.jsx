import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Css from './index.module.css'

export default function Hello () {

  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  function plus () {
    setCount(count => count + 1)
  }
  function destory () {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }


  return (
    <Fragment>
      <h2 className={Css.title}>Current count：{count}</h2>
      <button onClick={plus}>play</button>
      <button onClick={destory}>destory</button>
    </Fragment>
  )
}