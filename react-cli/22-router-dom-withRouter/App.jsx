import { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import MyNavLink from "./component/MyNavLink";
import Footer from "./component/Footer";
import About from "./pages/About"
import Home from "./pages/Home"

export default class App extends Component{
  render(){
    return (
      <HashRouter>
        <div>
          <MyNavLink to="/home">主页</MyNavLink>
          <MyNavLink to="/about">关于</MyNavLink>
        </div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </HashRouter>
    )
  }
}