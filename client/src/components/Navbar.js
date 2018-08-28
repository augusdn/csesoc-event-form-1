import React from 'react'
import { Menu }from 'antd'
import { Link } from 'react-router-dom'
import logo from '../static/csesocwhiteblue.png'
import { AuthButton } from '../Auth.js'

import { Affix } from 'antd';

const Navbar = () => (

    <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' , width: '100%'}}
    >
        <Menu.Item disabled={true}><img alt="CSESoc logo" src={logo}/></Menu.Item>
        <Menu.Item key="1"><Link to='/'>Event-form</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/calendar'>Calendar</Link></Menu.Item>
        <Affix style={{ position: 'absolute', top: '1px', right: 20}}>
         <AuthButton/>
        </Affix>
    </Menu>

)

//<Menu.Item style={{justify: "end"}}><AuthButton/></Menu.Item>
export default Navbar
