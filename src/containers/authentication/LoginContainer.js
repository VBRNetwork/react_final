import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getAccessToken} from 'actions/user'
import {Helmet} from 'react-helmet'
import Router from 'next/router'
import {Form, Icon, Input, Button, Checkbox, Card, Col, Row, Alert} from 'antd'

class LoginContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {username: '', password: '', loggingIn: false, errorMessage: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validateForm = this.validateForm.bind(this)

        this.handleChangePassword = this.handleChangePassword.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name
        this.setState({username: value})
    }

    handleChangePassword(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name
        this.setState({password: value})
    }

    validateForm() {
        return (this.state.username.length > 0 && this.state.password.length > 0)
    }

    redirectToTarget(){
        Router.push('/dashboard?register_success=1')
    }

    handleSubmit(event) {
        event.preventDefault();
        let {getAccessToken} = this.props
        if (!this.state.loggingIn) {
            this.setState({loggingIn: true, errorMessage: ''})
            getAccessToken({username: this.state.username, password: this.state.password}).then((res) => {
                this.redirectToTarget()
            }).catch((error) => {
                let errorText = '';
                if(error.response){
                    Object.keys(error.response.data).map(function(e,i){
                        errorText += error.response.data[e][0] + '\n'
                    });
                    this.setState({
                        errorMessage: errorText,
                        loggingIn: false
                    })
                }else {
                    this.redirectToTarget()
                }
            })
        }
    }

    render() {
        return (
            <article>
                <Helmet>
                    <title>Login to Veelancing</title>
                    <meta
                        name='description'
                        content='Login Veelacing Platform'
                    />
                </Helmet>
                <div className='container' >
                    <Row>
                        <Col xs={{span: 20, offset: 2}} sm={{span:20,offset:4}} md={{span:14,offset:4}} lg={{span:8,offset:4}} xl={{span: 8, offset: 8}}>
                            <div>
                                <Card className='p-5' style={{margin: '20px'}}>
                                    <h2>Login Page</h2>
                                    <Form onSubmit={this.handleSubmit} className='login-form'>
                                        <Form.Item>
                                            <Input
                                                onChange={this.handleChange}
                                                value={this.state.username}
                                                prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                placeholder='Username'
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Input.Password
                                                prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                type='password'
                                                value={this.state.password}
                                                placeholder='Password'
                                                onChange={this.handleChangePassword}
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type='primary' htmlType='submit' className='login-form-button'>
                                                Log in
                                            </Button>
                                        </Form.Item>

                                        <Form.Item>
                                            <Checkbox>Remember me</Checkbox>
                                            <br/>
                                            <a className='login-form-forgot' href=''>
                                                Forgot password
                                            </a>
                                            or <a href='/register'>register now!</a>
                                        </Form.Item>

                                    </Form>
                                    {this.state.errorMessage.length > 0 &&
                                    <Row>
                                        <Col>
                                            <Alert
                                                showIcon
                                                message={this.state.errorMessage}
                                                type="error"
                                            />
                                        </Col>
                                    </Row>
                                    }
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </article>)
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

LoginContainer.propTypes = {
    // user: PropTypes.instanceOf(Map).isRequired,
    getAccessToken: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {
    getAccessToken
})(LoginContainer)
