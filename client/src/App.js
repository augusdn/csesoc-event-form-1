import React from 'react'
import Main from './Main';    // original <App /> page
import LoginPage from './components/Login';  // new <Login /> page
import { Switch, Route, Redirect } from 'react-router-dom'

const App = () => {
    return (
          <Switch>
            <Route exact path="/app/mainform" component={Main} />
            <Route path="/login" component={LoginPage} />
            <Redirect path ="/login" />
          </Switch>
    );
}

export default App
