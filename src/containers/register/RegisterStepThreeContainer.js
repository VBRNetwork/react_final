import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Form, Input, Select, Row, Col, Radio, DatePicker, Icon, Button ,Alert } from 'antd';
  const { MonthPicker } = DatePicker;
  const { Option } = Select;

  function onChange(date, dateString) {
  }

  class RegisterStepOneContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
        };
    }

    
    handleSubmit = e => {
        e.preventDefault();
    
        this.props.form.validateFields((err, fieldsValue) => {
          if (err) {
            return;
          }
    
        });
      };
    
      componentDidMount () {
      }
    
  
  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

 
  render () {

    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
          md: { span: 12 }, 
          lg: { span: 12 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
          md: { span: 12 }, 
          lg: { span: 12 },
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
    
    return (
            <div>
            <hr />
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Row>
                        <Row>
                            <Col>
                                <Alert
                                    message="Success Text"
                                    description="Success Description Success Description Success Description"
                                    type="success"
                                />
                                <br/>
                                <Alert
                                    message="Error Text"
                                    description="Error Description Error Description Error Description Error Description"
                                    type="error"
                                    />
                                <br/>
                            </Col>
                        </Row>
                        <Row>
                            <div style={{textAlign: 'center'}}>
                                <strong>Add Payment Method</strong>
                                
                            </div>
                            <div style={{ fontSize: '30px', marginTop: '-5%' }}>
                            <Icon  type="credit-card" />
                            </div>
                            <hr />
                            <Col>
                                <Form.Item label="Payment Method" >
                                    <Select placeholder="Select Payment Method">
                                        <Option value="visa">Visa</Option>
                                        <Option value="mastercard">Mastercard</Option>
                                        <Option value="crypto">Crypto</Option>
                                        <Option value="paypal">PayPal</Option>
                                    </Select>  
                                </Form.Item>
                            </Col>
                        </Row>
                        <Col>
                            <Form.Item label="Card NO/Crypto Address">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="Expiration Date">
                                    <MonthPicker onChange={onChange} placeholder="Select" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="CVV Code">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <hr />
                        <Row gutter={24}>
                            <div style={{textAlign: 'center'}}>
                                <strong>Add Payout Method</strong>
                                
                            </div>
                            <div style={{  fontSize: '35px', marginTop: '-5%' }}>
                            <Icon  type="bank" />
                            </div>

                            <hr />
                            <Radio.Group defaultValue="b" size="small" >
                            <Col span={10} >
                                <Radio.Button  value="a">Bank Account</Radio.Button>
                            </Col>
                           
                            <Col  span={10} >
                                <Radio.Button  value="b">Crypto Wallet</Radio.Button>
                            </Col>
                            
                            <Col  span={4} >
                                <Radio.Button  value="c">PayPal</Radio.Button>
                            </Col>
                            </Radio.Group>
                        </Row>
                        <br />
                        <Row>
                            <Col span={20}>
                                <Form.Item>
                                    <Input  size='small' placeholder="Add account or email address" />
                                    
                                </Form.Item>
                            </Col>
                            <Col span={4} pull={10}>
                                <Button type='primary' 
                                        className='ant-btn-sm' 
                                        block ={true}
                                        size='large' 
                                        style={{
                                            backgroundColor: '#2EC3AB',
                                            borderColor: '#2EC3AB',
                                            marginTop: '7%'
                                        }}>
                                        Add
                                </Button>
                            </Col>
                        </Row>
                    </Row>
                </Form>
            </div>
    )}}

    
    function mapStateToProps (state) {
      return {
        register: state.register_user
      }
    }
    
    RegisterStepOneContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(RegisterStepOneContainer)
    