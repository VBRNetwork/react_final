import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAccessToken } from 'actions/user'
import { Helmet } from 'react-helmet'
import Router from 'next/router'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { withAuthSync } from 'libs/auth';

class Login extends Component {

    constructor (props) {
    super(props)
    this.state = { username: '', password: '', loggingIn: false, errorMessage: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateForm = this.validateForm.bind(this)

    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

    handleChange (event) {
    const target = event.target; const value = target.value; const name = target.name
    this.setState({ username: value })
  }

  handleChangePassword (event) {
    const target = event.target; const value = target.value; const name = target.name
    this.setState({ password: value })
  }

  validateForm () {
    return (this.state.username.length > 0 && this.state.password.length > 0)
  }

  handleSubmit (event) {
  		event.preventDefault()
      let { getAccessToken } = this.props
	  	if (!this.state.loggingIn) {
      this.setState({ loggingIn: true, errorMessage: '' })
      getAccessToken({ username: this.state.username, password: this.state.password }).then((res) => {
        this.redirectToTarget()
      })
    }
  }

  redirectToTarget = () => {
    Router.push('/writing')
  }

  render () {
   return (
    <article>
      <Helmet>
        <title>Marketing Page</title>
        <meta
          name='description'
          content='A React.js Boilerplate application page'
        />
      </Helmet>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='p-5' style={{ width: '400px', margin: '0 auto' }}>
              <h2>Login Page</h2>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    <Input
                        onChange={this.handleChange}
                        value={this.state.username}
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      value={this.state.password}
                      placeholder="Password"
                      onChange={this.handleChangePassword}
                    />
                </Form.Item>
                <Form.Item>
                    <Checkbox>Remember me</Checkbox>
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
              </Form>

            </div>
          </div>
        </div>
      </div>
    </article>)
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

Login.propTypes = {
  // user: PropTypes.instanceOf(Map).isRequired,
  getAccessToken: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {
  getAccessToken
})(Login)
