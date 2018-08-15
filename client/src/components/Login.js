import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button, message } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Redirect } from 'react-router-dom'


const { Content, Footer } = Layout;
const FormItem = Form.Item;

// username and Password
const user = 'qiwei'
const pass = '1234'

class LoginForm extends React.Component {
    constructor () {
      super();
      this.state = {
        fireRedirect: false
      }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
            if (values.userName === 'qiwei' && values.password === '1234') {
                console.log('Received values of form: ', values);
                message.success('This is a message of success');
                this.setState({ fireRedirect: true })
            } else {
                message.error('wrong username or password');
            }
        } else {
          message.error('This is a message of error');
        }
      });
    }


    render() {
      const { getFieldDecorator } = this.props.form;
      const { fireRedirect } = this.state

      return (
        <Layout className="layout">
            <Content style={{padding: 40, margin: 0, minHeight: 800}}>

              <Form onSubmit={this.handleSubmit} className="login-form" style={{ margin: 'auto', width: 300, padding: 10 }}>
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                  )}
                </FormItem>
                <FormItem>
                  <Button type="primary" htmlType="submit" style={{ width: '100%' }} >
                    Log in
                  </Button>
                </FormItem>
              </Form>
              {fireRedirect && (
                  <Redirect to={'/'}/>
              )}

          </Content>
          <Footer>
            CSESoc 2018
          </Footer>
      </Layout>
    );
  }
}

const LoginPage = Form.create()(LoginForm);

export default LoginPage
