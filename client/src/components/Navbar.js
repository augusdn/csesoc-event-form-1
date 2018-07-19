import React from 'react'
import Menu from 'antd'


const Navbar = () => (
    <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
    >
        <Menu.Item><Link to='/'>Event-from</Link></Menu.Item>
        <Menu.Item><Link to='/calender'>Calender</Link></Menu.Item>
    </Menu>
)

export default Navbar
