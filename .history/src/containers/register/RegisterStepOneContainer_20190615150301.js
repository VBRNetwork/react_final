
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
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
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
                <Radio.Button style={{borderColor: 'rgb(46, 195, 171)', color: 'rgb(46, 195, 171)'}} value="a">Customer</Radio.Button>
                <Radio.Button style={{borderColor: 'rgb(46, 195, 171)', color: 'rgb(46, 195, 171)'}} value="b">Freelancer</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Habitual Residence">
                <Cascader options={residences} />
            </Form.Item>
            <Form.Item label="Phone Number">
                <Input addonBefore={( <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
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
                I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                Register
            </Button>
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
    