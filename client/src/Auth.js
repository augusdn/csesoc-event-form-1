import React from "react"
import { withRouter } from "react-router-dom"
import { Button }from 'antd'


// with help from: https://reacttraining.com/react-router/web/example/auth-workflow
export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };


export const AuthButton = withRouter(
    ({ history }) =>
          <Button type="primary"
            onClick={() => {
              fakeAuth.signout(() => history.push("/"));
            }}
          >
            Log out
          </Button>
  );

export default fakeAuth;
