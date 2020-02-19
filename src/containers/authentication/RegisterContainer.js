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
import ReCAPTCHA from "react-google-recaptcha";
import Router from 'next/dist/client/router'
import withoutAuth from  '../../libs/withoutAuth'


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
                if(error && error.response){
                    Object.keys(error.response.data).map(function(e,i){
                        errorText += error.response.data[e][0]+'\n'
                    });
                    this.setState({
                        errorMessage: errorText,
                        loggingIn: false
                    })
                }else{
                    this.redirectToTarget()
                }
            })
        }
    };

    redirectToTarget(){
        Router.push('/dashboard?reg_form=1')
    }

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
                    <title>Create account</title>
                    <meta
                        name='description'
                        content='Register account'
                    />
                </Helmet>
                <div className='container'>
                    <Row>
                        <Col xs={{span: 20, offset:2}} sm={{span:12,offset:4}} md={{span:14,offset:4}} lg={{span:16,offset:4}} xl={{span: 7, offset: 3}}>
                            <Card  className='p-5' style={{margin: '20px'}}>
                                <strong><h2>Be one of the first!</h2></strong>
                                <img src="../../../static/images/asset_job1.jpeg" style={{width:'100%'}} alt=""/>
                                <div className="" style={{ marginTop: '50px', marginBottom: '50px' }}>
                                    <h4 className="stay-up-to-date" style={{color:'#000'}}>
                                        Be part of our community to find a job or hire experts.
                                        We are launching soon, but until then, join our DEMO version!
                                    </h4>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={{span: 20, offset:2}} sm={{span:12,offset:4}} md={{span:14,offset:4}} lg={{span:16,offset:4}} xl={{span: 7, offset: 3}}>
                            <div>
                                <Card className='p-5' style={{margin: '20px'}}>
                                    <strong><h2>Create free account</h2></strong>
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

export default connect(mapStateToProps, {registerAccount})(withoutAuth(RegisterContainer))
