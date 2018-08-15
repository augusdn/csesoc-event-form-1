import React from 'react'
import { Layout, Menu, Button }from 'antd'
import { Link } from 'react-router-dom'
import logo from '../static/csesocwhiteblue.png'


const Navbar = () => (

    <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' , width: '100%'}}
    >
        <Menu.Item><Link to='/app/mainform'><img alt="CSESoc logo" src={logo}/></Link></Menu.Item>
        <Menu.Item><Link to='/app/mainform'>Event-form</Link></Menu.Item>
        <Menu.Item><Link to='/app/calendar'>Calendar</Link></Menu.Item>
        <Menu.Item style><Link to='/login'><Button type="primary">Logout</Button></Link></Menu.Item>

    </Menu>

    // or a sider:
    // <Sider>
    //   <div className="logo" />
    //   <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    //     <Menu.Item key="1">
    //         <Link to='/'>
    //
    //       <span>evet-form</span>
    //       </Link>
    //     </Menu.Item>
    //     <Menu.Item key="2">
    //     <Link to='/calender'>
    //       <span>Calender</span>
    //      </Link>
    //     </Menu.Item>
    //   </Menu>
    // </Sider>

)

export default Navbar
