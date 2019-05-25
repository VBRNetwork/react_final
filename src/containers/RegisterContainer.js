
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
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
} from 'antd';
import PropTypes from 'prop-types'
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
import { connect } from 'react-redux'

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

class Register extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

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

  render() {
    const { autoCompleteResult } = this.state;

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

        <Row>
              <h3 style={{textAlign:'center'}}>Register</h3>
            <Col span={12} offset={4}>
              
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
                    <Form.Item
                    label={
                        <span>
                        Nickname&nbsp;
                        <Tooltip title="What do you want others to call you?">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        </span>
                    }
                    >
                    <Input />
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
                
            </Col>
        </Row>

    )
  }
}


function mapStateToProps (state) {
    return {
      user: state.user
    }
  }
  
  Register.propTypes = {
    // user: PropTypes.instanceOf(Map).isRequired,
  }
  
  export default connect(mapStateToProps, {
    
  })(Register)
  