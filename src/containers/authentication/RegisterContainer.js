import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {connect} from 'react-redux'
import {
    Form,
    Input,
    Icon,
    Row,
    Col,
    Checkbox,
    Button,
    Card, Alert,
} from 'antd';
import PropTypes from "prop-types";
import {registerAccount} from '../../actions/user'
import Router from "next/dist/client/router";
import ReCAPTCHA from "react-google-recaptcha";
class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password1: '',
            password2: '',
            first_name: '',
            last_name: '',
            tos: false,
            loggingIn: false,
            errorMessage: '',
            captcha:false,
            captchaKey:'6LfHWsQUAAAAAEDzYgjRyY2bftAt_lO-yF9qmFcN'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeRepeatPassword = this.handleChangeRepeatPassword.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.tosAccepted = this.tosAccepted.bind(this);
        this.captchaResponse = this.captchaResponse.bind(this);
    }

    handleChangeLastName(event) {
        this.setState({
            last_name: event.target.value,
        });
    }

    handleChangeFirstName(event) {
        this.setState({
            first_name: event.target.value,
        });
    }

    handleChange(event) {
        this.setState({
            email: event.target.value,
            username: event.target.value
        });
    }

    handleChangePassword(event) {
        this.setState({
            password1: event.target.value,
        });
    }

    handleChangeRepeatPassword(event) {
        this.setState({
            password2: event.target.value,
        });
    }


    handleSubmit = e => {
        e.preventDefault();
        let {registerAccount} = this.props;
        if (!this.state.loggingIn) {
            this.setState({loggingIn: true, errorMessage: ''});
            registerAccount(this.state).then((res) => {
                this.redirectToTarget()
            }).catch((error) => {
                let errorText = '';
                Object.keys(error.response.data).map(function(e,i){
                    errorText += error.response.data[e][0]+'\n'
                });
                this.setState({
                    errorMessage: errorText,
                    loggingIn: false
                })
            })
        }
    };

    tosAccepted() {
        this.setState({
            tos: !this.state.tos
        })
    }

    captchaResponse(value){
        this.setState({
            captcha: value
        })
    }

    render() {
        let securityPassed = true;
        if(this.state.tos && this.state.captcha){
            securityPassed = false;
        }

        return (
            <article>
                <Helmet>
                    <title>Register Page</title>
                    <meta
                        name='description'
                        content='Register account application page'
                    />
                </Helmet>
                <div className='container'>
                    <Row>
                        <Col xs={{span: 22, offset: 1}} sm={4} md={6} lg={8} xl={{span: 8, offset: 8}}>
                            <div>
                                <Card className='p-5' style={{margin: '20px'}}>
                                    <strong><h2>User Registration</h2></strong>
                                    <Form onSubmit={this.handleSubmit} className='login-form'>
                                        <Form.Item>
                                            <Input
                                                onChange={this.handleChangeFirstName}
                                                value={this.state.first_name}
                                                name={'first_name'}
                                                prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                placeholder='First Name'
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Input
                                                onChange={this.handleChangeLastName}
                                                value={this.state.last_name}
                                                prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                placeholder='Last Name'
                                                name={'last_name'}
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Input
                                                onChange={this.handleChange}
                                                value={this.state.email}
                                                prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                placeholder='Email'
                                                name={'email'}
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Input
                                                prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                type='password'
                                                value={this.state.password1}
                                                placeholder='Password'
                                                onChange={this.handleChangePassword}
                                                name={'password1'}
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Input
                                                prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                type='password'
                                                value={this.state.password2}
                                                placeholder='Confirm Password'
                                                name={'password2'}
                                                onChange={this.handleChangeRepeatPassword}
                                            />
                                        </Form.Item>

                                        {this.state.errorMessage.length > 0 &&
                                        <Row>
                                            <Col>
                                                <ul>
                                                    <Alert
                                                        showIcon
                                                        message={this.state.errorMessage}
                                                        type="error"
                                                    />
                                                </ul>
                                            </Col>
                                        </Row>
                                        }

                                        <ReCAPTCHA
                                            sitekey={this.state.captchaKey}
                                            onChange={this.captchaResponse}
                                        />

                                        <Form.Item>
                                            <Checkbox checked={this.state.tos} name={'tos'} onChange={this.tosAccepted}>
                                                I agree with
                                                VBR Platform Terms & Conditions
                                            </Checkbox>
                                            <br/>
                                        </Form.Item>



                                        <Form.Item>
                                            <Button style={{
                                                background: 'rgba(0, 177, 153, 0.74)',
                                                borderColor: 'rgba(0, 177, 153, 0.74)',
                                            }} type='primary' htmlType='submit'
                                                    disabled={securityPassed}
                                                    className='login-form-button'>
                                                Create account
                                            </Button>
                                        </Form.Item>



                                    </Form>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </article>
        )
    }
}

function mapStateToProps(state) {

    return {
        registerUser: state.register_user,
        authUser: state.user
    };
}


RegisterContainer.propTypes = {
    registerAccount: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {registerAccount})(RegisterContainer)
    