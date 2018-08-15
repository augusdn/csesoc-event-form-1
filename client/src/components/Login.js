import React from 'react'
import { Link } from 'react-router-dom'


const LoginPage = () => (
        <div>
          <h1>Login Page</h1>
          <p>
            there is no authemtification here
          </p>
          <button><Link to='/app/mainform'>Login</Link></button>
        </div>
)

export default LoginPage
