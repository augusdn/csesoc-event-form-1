import React from 'react'
import { Layout, Row, Col } from 'antd'
// import logo from './static/csesocwhiteblue.png'
// import MainForm from './components/MainForm'
import Navbar from './components/Navbar'
import Pages from './components/Pages'

import './styles/App.css'
// <img alt="CSESoc logo" src={logo}/>

class Main extends React.Component {
  render() {
    return (
      <Layout>
        <Layout.Header>
          <Navbar />
        </Layout.Header>
        <Layout.Content style={{padding: 40, margin: 0, minHeight: 800}}>
          <Row>
            <Col>
              <Pages />
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

export default Main
