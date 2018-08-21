import React from 'react'
import Main from './Main';    // original <App /> page
import LoginPage from './components/Login';  // new <Login /> page
import MainForm from './components/MainForm';
import { Switch, Route, Redirect } from 'react-router-dom'
import fakeAuth from './Auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );



class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <Switch>
            <Route name="login" path="/login" component={LoginPage}></Route>
            <PrivateRoute name="app" path="/" component={Main}></PrivateRoute>
        </Switch>
    );
  }

}




export default App
