import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainForm from './MainForm'
import Calendar from './Calendar'

const Pages = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainForm}/>
      <Route path='/calendar' component={Calendar}/>
      <Redirect to='/'/>
    </Switch>
  </main>
)

export default Pages
