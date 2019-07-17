
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Radio
  } from 'antd';
  import Link from 'next/link'
import { throwStatement } from '@babel/types';
  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  const residences = [
    {
      value: 'Europe',
      label: 'Europe',
      children: [
        {
          value: 'Romania',
          label: 'Romania',
          children: [
            {
              value: 'Bucharest',
              label: 'Bucharest',
            },
          ],
        },
      ],
    },
    {
      value: 'USA',
      label: 'USA',
      children: [
        {
          value: 'New York',
          label: 'New York',
          children: [
            {
              value: 'New York City',
              label: 'New York City',
            },
          ],
        },
      ],
    },
  ];
  
  const selector = formValueSelector('formName');



class RegisterStepOneContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            userType: ' ',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

      this.setState({
        userType: event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      <Link href='/register' />
    }
    

  componentDidMount () {
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
      <div>
      <hr />
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="E-mail">
                <Input />
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
                <Input.Password />
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
                <Input.Password onBlur={this.handleConfirmBlur} />
            </Form.Item>
            <Form.Item label="User Type">
              <Radio.Group onSubmit={this.handleSubmit} defaultValue="a" size="small">
                <Row>
                  <Col span={12}>
                    <Radio.Button checked={this.state.userType === 'customer'} onChange={this.handleChange} value="a">Customer </Radio.Button>
                  </Col>
                  <Col span={12}>
                    <Radio.Button value="b">Freelancer</Radio.Button>
                  </Col>
                </Row>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Contry of Residence">
                <Cascader options={residences} />
            </Form.Item>
            <Form.Item label="Phone Number">
                <Input addonBefore={( <Select style={{ width: 70 }}>
                <Option style={{ color: '#2EC3AB' }} value="86">+86</Option>
                <Option style={{ color: '#2EC3AB' }} value="87">+87</Option>
                <Option style={{ color: '#2EC3AB' }} value="4">+4</Option>
                <Option style={{ color: '#2EC3AB' }} value="44">+44</Option>
            </Select>)} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Checkbox>
                I agree with<a style={{color: '#2EC3AB'}} href=""> VBR Terms of Service</a>
                </Checkbox>
            </Form.Item>
        </Form>
      </div>
    )}}
    
    function mapStateToProps(state) {
    
    return { };
}
    
    
    RegisterStepOneContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(RegisterStepOneContainer)
    