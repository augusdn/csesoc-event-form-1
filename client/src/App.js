import React from 'react'
import Main from './Main';    // original <App /> page
import LoginPage from './components/Login';  // new <Login /> page
import MainForm from './components/MainForm';
import { Switch, Route, Redirect } from 'react-router-dom'



class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <Switch>
            <Route name="login" path="/login" component={LoginPage}></Route>
            <Route name="app" path="/" component={Main}></Route>
        </Switch>
    );
  }



}




export default App
