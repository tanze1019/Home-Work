import React from 'react';
import 'antd/dist/antd.css';
// import 'antd-mobile/dist/antd-mobile.css';
import "./rem"
import "./reset.css"
import "./style.less"
import {Switch,Route } from "react-router-dom"
import Home from "./views/Home/index"
import Login from "./views/Login/index"

 class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
        <Route path="/home"  component={Home} />
        <Route path="/login"  component={Login} />
        <Route path="/" exact component={Home} />
        </Switch>
      </div>
    )
  }
}



export default App;
