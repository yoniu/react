import React, { Fragment } from "react"

const MyContext = React.createContext()

const {Provider, Consumer} = MyContext

export default function Demo () {

  const [count, setCount] = React.useState(0)

  // React.useEffect(() => {
  //   //setCount(count => count + 1)
  // }, [count])  没学好，需要补充


  function countPlus () {
    setCount(count => count + 1)
  }

  return (
    <Fragment>
      my name is demo.<br />
      count: {count} <br />
      <button onClick={countPlus}>plus</button>
      <Provider value={count}>
        <A />
      </Provider>
    </Fragment>
  )
}

function A () {
  return (
    <div>
      Component A <br/>
      I got the count from Component Demo:
      <Consumer>
        {
          value => value
        }
      </Consumer>
      <B />
    </div>
  )
}

class B extends React.Component {
  static contextType = MyContext

  render () {
    return (
      <div>
        Component B <br />
        I got the count from Component Demo：{this.context}
      </div>
    )
  }

}
