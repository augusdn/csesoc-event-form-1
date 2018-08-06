import React from 'react'
import { Layout, Row, Col } from 'antd'
// import logo from './static/csesocwhiteblue.png'
// import MainForm from './components/MainForm'
import Navbar from './components/Navbar'
import Main from './components/Main'

import './styles/App.css'
// <img alt="CSESoc logo" src={logo}/>

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Layout.Header>
          <Navbar />
        </Layout.Header>
        <Layout.Content style={{padding: 80, margin: 0, minHeight: 800}}>
          <Row>
            <Col offset={4} span={16}>
              <Main />
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer>
          CSESoc 2018
        </Layout.Footer>
      </Layout>
    );
  }
}

export default App
