import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
import Router from 'next/router'
import {Form, Icon, Input, Button, Checkbox, Card, Col, Row, Alert} from 'antd'
import { resetPassword } from 'actions/user'

class ResetPasswordContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {email: '', errorMessage: '', successMessage: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validateForm = this.validateForm.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        this.setState({email: value})
        this.validateForm();
    }
    validateForm() {
        if(this.state.email.length < 1){
            this.state.errorMessage = "";
            return false;
        }
        else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,4})+$/.test(this.state.email))){
            this.state.errorMessage = "Invalid Email.";
            return false;
        }else{
            this.state.errorMessage = "";
            return true;
        }
    }

    redirectToTarget(){
        Router.push('/confirmation')
    }

    handleSubmit(event) {
        event.preventDefault();
        if(!this.validateForm()){
            return;
        }
        let {resetPassword} = this.props
        resetPassword({email: this.state.email}).then(res =>{
            this.state.successMessage = "Email sent.";
        }).catch(e =>{
            this.state.errorMessage = "Invalid Email.";
            console.log(e);
            
        });
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
                                <Card style={{background:'#3a3d46', margin: '20px'}} className='p-5'>
                                    <h2 style={{color:'#FFF'}} >Reset Password</h2>
                                    <Form onSubmit={this.handleSubmit}  className='login-form'>
                                        <Form.Item>
                                            <Input
                                                onChange={this.handleChange}
                                                value={this.state.email}
                                                prefix={<Icon type='mail' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                placeholder='Email'  
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button style={{background:'#FFF', color:'#079290', borderColor:'#FFF'}} type='primary' htmlType='submit' className='login-form-button'>
                                                Submit
                                            </Button>
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
                                    {this.state.successMessage.length > 0 &&
                                        <Row>
                                            <Col>
                                                <Alert
                                                    showIcon
                                                    message={this.state.successMessage}
                                                    type="success"
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

ResetPasswordContainer.propTypes = {
    resetPassword: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {
    resetPassword
})(ResetPasswordContainer)
