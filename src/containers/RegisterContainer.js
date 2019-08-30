
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form';
import {
    Form,
    Input,
    Icon,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    Card,
  } from 'antd';
  import Link from 'next/link'
  import {Helmet} from 'react-helmet'
import { throwStatement } from '@babel/types';
  const { Option } = Select;
  
const selector = formValueSelector('formName');

class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            userType: '',
            testVariable:false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({
        userType: event.target.value,
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      <Link href='/register' />
    }

  componentDidMount () {
    console.log('Step1 - ' + this.props.register)
  }

  
  handleSubmit = e => {
    e.preventDefault();
    
    
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    
  };

  validateToNextPassword = (rule, value, callback) => {
    
  };

  



  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };
  


  render () {

     const { autoCompleteResult ,current} = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    
    return (
        <article>
        <Helmet>
            <title>Login Page</title>
            <meta
                name='description'
                content='Login application page'
            />
        </Helmet>
        <div className='container'>
            <Row>
                <Col  xs={{span:22, offset:1}} sm={4} md={6} lg={8} xl={{span:8,offset:8}} >
                    <div >
                        <Card className='p-5' style={{margin:'20px'}}>
                            <strong><h2>User Registration</h2></strong>
                            <Form onSubmit={this.handleSubmit} className='login-form'>
                                <Form.Item>
                                    <Input
                                        onChange={this.handleChange}
                                        value={this.state.username}
                                        prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder='Email'
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Input
                                        prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        type='password'
                                        value={this.state.password}
                                        placeholder='Password'
                                        onChange={this.handleChangePassword}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button style={{background: 'rgba(0, 177, 153, 0.74)', borderColor: 'rgba(0, 177, 153, 0.74)'}} type='primary' htmlType='submit' className='login-form-button'>
                                        Register
                                    </Button>
                                </Form.Item>

                                <Form.Item>
                                    <Checkbox>I agree with VBR Terms & Conditions</Checkbox>
                                    <br/>
                                </Form.Item>
                            </Form>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    </article>
    )}}
    
    function mapStateToProps(state) {
    
    return {
      register: state.register_user,
      myuser: state.user
     };
}
    
    
    RegisterContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(RegisterContainer)
    