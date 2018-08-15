import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainForm from './MainForm'
import Calendar from './Calendar'

const Pages = () => (
  <main>
    <Switch>
      <Route exact path='/app/mainform' component={MainForm}/>
      <Route path='/app/calendar' component={Calendar}/>
    </Switch>
  </main>
)

export default Pages
