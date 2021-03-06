
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
  

class RegisterStepOneContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
        };
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
              <Radio.Group defaultValue="a" size="small">
                <Row>
                  <Col span={12}>
                <Radio.Button value="a">Customer</Radio.Button>
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
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
                <Option value="4">+4</Option>
                <Option value="44">+44</Option>
            </Select>)} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Website">
                <AutoComplete
                    dataSource={websiteOptions}
                    onChange={this.handleWebsiteChange}
                    placeholder="website"
                    >
                    <Input />
                    </AutoComplete>
            </Form.Item>
            <Form.Item label="Captcha" extra="We must make sure that your are a human.">
            <Row gutter={8}>
                <Col span={12}>
                    <Input />
                </Col>
                <Col span={12}>
                <Button>Get captcha</Button>
                </Col>
            </Row>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Checkbox>
                I agree with<a style={{color: '#2EC3AB'}} href=""> VBR Terms of Service</a>
                </Checkbox>
            </Form.Item>
           
        </Form>
      </div>
    )}}
    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    RegisterStepOneContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(RegisterStepOneContainer)
    