import React from 'react'
import { Layout, Menu, Button }from 'antd'
import { Link } from 'react-router-dom'
import logo from '../static/csesocwhiteblue.png'
import { fakeAuth, AuthButton } from '../Auth.js'

const Navbar = () => (

    <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' , width: '100%'}}
    >
        <Menu.Item><Link to='/'><img alt="CSESoc logo" src={logo}/></Link></Menu.Item>
        <Menu.Item><Link to='/'>Event-form</Link></Menu.Item>
        <Menu.Item><Link to='/calendar'>Calendar</Link></Menu.Item>
        <Menu.Item style><AuthButton/></Menu.Item>

    </Menu>

)

export default Navbar
