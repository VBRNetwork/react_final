import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAccessToken } from 'actions/user'
import { Helmet } from 'react-helmet'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Router from 'next/router'

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

  render = () => (
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
          <div className='col-lg-12 text-center'>
            <div className='p-5' style={{ width: '400px', margin: '0 auto' }}>
              <h2>Login Page</h2>
              <form onSubmit={this.handleSubmit}>
          
              </form>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
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

export { Login }
export default connect(mapStateToProps, {
  getAccessToken
})(Login)
