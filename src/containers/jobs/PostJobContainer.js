import React, { Component, Fragment } from 'react'
import { List, Avatar, Icon, Card, Layout, Menu, Row, Col, Checkbox, Breadcrumb } from 'antd'
import Link from 'next/link'
const { Header, Content, Footer, Sider } = Layout
import { connect } from 'react-redux'
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Button,
    AutoComplete,
} from 'antd';

const { TextArea } = Input;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
import SkillsGroup from '../../components/Elements/EditableTagGroup'
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

class PostJobContainer extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
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
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        console.log(this.props.user)
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
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '+00',
        })(
            <Select style={{ width: 70 }}>
                <Option value="04">04</Option>
                <Option value="07">07</Option>
            </Select>,
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 10, offset:5 }}>
                    <h2 style={{textAlign:'center'}}>Post new job</h2>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="Title" >
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ],
                            })(<Input    placeholder="Controlled autosize" />)}
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

                            <TextArea
                                value={''}
                                onChange={this.onChange}
                                placeholder="Controlled autosize"
                                autosize={{ minRows: 3, maxRows: 5 }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={
                                <span>
                                  Skills&nbsp;
                                    <Tooltip title="What do you want others to call you?">
                                    <Icon type="question-circle-o" />
                                  </Tooltip>
                                </span>
                            }
                        >
                            <SkillsGroup/>
                        </Form.Item>

                        <Form.Item label="Location">
                            {getFieldDecorator('residence', {
                                initialValue: ['Europe', 'USA', 'Asia'],
                                rules: [
                                    { type: 'array', required: true, message: 'Please select your residence!' },
                                ],
                            })(<Cascader options={residences} />)}
                        </Form.Item>
                        <Form.Item label="Phone Number">
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: 'Please input your phone number!' }],
                            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                        </Form.Item>
                        <Form.Item label="Website">
                            {getFieldDecorator('website', {
                                rules: [{ required: true, message: 'Please input website!' }],
                            })(
                                <AutoComplete
                                    dataSource={websiteOptions}
                                    onChange={this.handleWebsiteChange}
                                    placeholder="website"
                                >
                                    <Input />
                                </AutoComplete>,
                            )}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                            })(
                                <Checkbox>
                                    I have read the <a href="">agreement</a>
                                </Checkbox>,
                            )}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Post job
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        );
    }
}

function mapStateToProps (state) {
  return {
      user:state.user
  }
}

PostJobContainer.propTypes = {}

const PostJobContainerRegistrationForm = Form.create({ name: 'PostJobContainer' })(PostJobContainer);
export default connect(mapStateToProps, {})(PostJobContainerRegistrationForm)
