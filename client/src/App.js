import React from 'react'
import Main from './Main';    // original <App /> page
import LoginPage from './components/Login';  // new <Login /> page
import MainForm from './components/MainForm';
import { Switch, Route, Redirect } from 'react-router-dom'

// const App = () => {
//     return (
//           <Switch>
//             <Route exact path="/" component={Main} />
//             <Route path="/login" component={LoginPage} />
//             <Redirect to ="/login" />
//           </Switch>
//     );
// }


// copy from: https://medium.com/@daoanhvu/authenticate-navigation-with-react-router-53462f4fa91c
class App extends React.Component {
  constructor() {
    super();
    this.requireAuth = this.requireAuth.bind(this);
  }

  render() {
    return (
        <Switch>
        <Route name="login" path="/login" component={LoginPage} onEnter={this.logout}></Route>
        <Route name="app" path="/" component={Main} onEnter={this.requireAuth}></Route>
        </Switch>
    );
  }

  logout(nextState, replace) {
    delete window.sessionStorage.token;
  }

  requireAuth(nextState, replace, callback) {
    const token = window.sessionStorage.token;
    if (!token) {
      replace('/login');
      callback();
      return;
    }
    fetch('/api/auth/check', { headers: {'Authorization': token} })
    .then(res => callback())
    .catch(err => {
      replace('/login');
      callback();
    })
  }
}




export default App
