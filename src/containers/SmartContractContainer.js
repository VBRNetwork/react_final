import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment';
import moment from '../../node_modules/moment';
import {
    Icon,
    Button,
    Avatar,
    Row,
    Layout,
    Col,
    Select,
    Form, Input, Tooltip, Cascader, Checkbox, Menu, Upload, Dropdown, DatePicker, TimePicker
} from 'antd'
import PropTypes from 'prop-types'
// import '../styles/kyc.css'
import CountDown from '../../src/components/CountDown'

let id = 0;

const { TextArea } = Input

class SmartContractContainer extends Component {

    constructor (props) {
        super(props)
        this.state = {

            user: '',
            form: '',
        };

    }

    remove = k => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
          return;
        }
    
        // can use data-binding to set
        form.setFieldsValue({
          keys: keys.filter(key => key !== k),
        });
      };
    
      add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
          keys: nextKeys,
        });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            const { keys, names } = values;
            console.log('Received values of form: ', values);
            console.log('Merged values:', keys.map(key => names[key]));
          }
        });
      };
    
    render () {

    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
        xl: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
        xl: { span: 10 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
        xl: { span: 16 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <Form.Item 
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={index === 0 ? <div><span className="smart-contract-milestone">Milestones</span></div> : ''}
        required={false}
        key={k}
      >
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input milestone or delete this field.",
            },
          ],
        })(<Input className="kyc-input" placeholder="Add Milestone"  />)}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));

        return (
            <div className="smart-contract-container">
<CountDown />

                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 24}}>
                        <h2 
                            style={{ 
                                textAlign: 'center', 
                                marginBottom: '5%',
                                marginTop: '2%',
                                color: '#FFF'}}
                        >
                            Veelancing - Smart Contract Creation
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={{ span: 16}}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 24, offset: 1 }}>
                        <div className="smart-contract-text">
                            <strong>
                                <p>
                                    Welcome to Veelancing Smart Contract Creation Form. 
                                    <br />
                                    By submitting this form, 
                                    you will generate a smart contract between you and the other user.
                                    <br />
                                    In order for the submit button to be available, all fileds from both sides must match. 
                                </p>
                            </strong>
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <Form  onSubmit={this.handleSubmit}>
                    {formItems}
                    
                    <Form.Item {...formItemLayoutWithOutLabel}>
                    <Button className="smart-contract-btn " type="dashed" onClick={this.add} style={{ width: '60%' }}>
                        <Icon type="plus" /> Add milestone
                    </Button>
                    </Form.Item>
                    <Form.Item   label={<div><span className="smart-contract-label" >Job Title</span></div>} {...formItemLayout}>
                        <Input  className="kyc-input" placeholder={'Enter Job Title'}/>
                    </Form.Item>
                    <Form.Item label={<div><span className="smart-contract-label">Job Description</span></div>} {...formItemLayout}>
                        <TextArea  className="kyc-input" placeholder={'Enter Job Desctiption'}/>
                    </Form.Item>
                    <Form.Item   label={<div><span className="smart-contract-label">Approximate ETA</span></div>} {...formItemLayout}>
                        <Input  className="kyc-input" placeholder={'Enter Approximate Deadline'}/>
                    </Form.Item>
                    <Form.Item {...formItemLayoutWithOutLabel}>
                    <Button className="smart-contract-submit" htmlType="submit">
                        Submit
                    </Button>
                    </Form.Item>
                </Form>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={{span: 8, pull: 3}} xxl={{ span: 8, pull: 3}}>
                <img src="../../static/images/talent_seeker_imagery@1x.png"/>
                </Col>
                </Row>

                
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
    }
}

SmartContractContainer.propTypes = {}

const WrappedSmartContractContainer = Form.create()(SmartContractContainer)

export default  connect (mapStateToProps, {}) (WrappedSmartContractContainer)
