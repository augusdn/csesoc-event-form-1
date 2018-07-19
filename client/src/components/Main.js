import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainForm from './MainForm'
import Calender from './Calender'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainForm}/>
      <Route path='/calender' component={Calender}/>
    </Switch>
  </main>
)

export default Main
