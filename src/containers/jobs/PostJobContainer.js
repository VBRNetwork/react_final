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
const jobCat = [
    {
        value: 'Writing & Translation',
        label: 'Writing & Translation',
        children: [
            {
                value: 'Article Writing',
                label: 'Article Writing',

            },

            {
                value: 'Blog Posts',
                label: 'Blog Posts',

            },

            {
                value: 'Simple Content Writing',
                label: 'Simple Content Writing',

            },
            {
                value: 'Copywriting',
                label: 'Copywriting',

            },
            {
                value: 'Complex Content Writing',
                label: 'Complex Content Writing',

            },
            {
                value: 'Translation',
                label: 'Translation',

            },
        ],
    },

    {
        value: 'Digital Marketing',
        label: 'Digital Marketing',
        children: [
            {
                value: 'SEO',
                label: 'SEO',

            },

            {
                value: 'Google AddWords',
                label: 'Google AddWords',

            },

            {
                value: 'Email Marketing',
                label: 'Email Marketing',

            },

            {
                value: 'Social Media Marketing',
                label: 'Social Media Marketing',

            },

            {
                value: 'Marketing Strategy',
                label: 'Marketing Strategy',

            },

        ],


    },

    {
        value: 'Web & Graphic Design',
        label: 'Web & Graphic Design',
        children: [

            {
                value: '3D Animation',
                label: '3D Animation',

            },

            {
                value: 'PhotoShop',
                label: 'PhotoShop',

            },

            {
                value: 'Logo Design',
                label: 'Logo Design',

            },

            {
                value: '3D Design',
                label: '3D Design',

            },

            {
                value: 'Web Design',
                label: 'Web Design',

            },

            {
                value: 'Graphic Design',
                label: 'Graphic Design',

            },

            {
                value: '3D-Rendering',
                label: '3D-Rendering',

            },

        ],
    },

    {
        value: 'Business Consultancy',
        label: 'Business Consultancy',
        children: [
            {
                value: 'Business Analysis',
                label: 'Business Analysis',

            },

            {
                value: 'Project Management',
                label: 'Project Management',

            },

            {
                value: 'Legal Consultancy',
                label: 'Legal Consultancy',

            },

            {
                value: 'Finance',
                label: 'Finance',

            },

            {
                value: 'Business Plans',
                label: 'Business Plans',

            },

            {
                value: 'Project Management',
                label: 'Project Management',

            },


        ],


    },

    {
        value: 'IT & Programming',
        label: 'IT & Programming',
        children: [
            {
                value: 'JavaScript',
                label: 'JavaScript',

            },

            {
                value: 'HTML5',
                label: 'HTML5',

            },

            {
                value: 'Web Programming',
                label: 'Web Programming',

            },

            {
                value: 'Desktop & Mobile Apps',
                label: 'Desktop & Mobile Apps',

            },

            {
                value: 'e-Commerce Platforms',
                label: 'e-Commerce Platforms',

            },

            {
                value: 'WordPress',
                label: 'WordPress',

            },

        ],


    },
];

class PostJobContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: '',
            title: '',
            description: '',
            skills: '',
            category: '',
            budget: '',
            tos: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeSkills = this.handleChangeSkills.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeBudget = this.handleChangeBudget.bind(this);
        this.tosAccepted = this.tosAccepted.bind(this);



    }

    handleChange(event) {
        this.setState({
            job: event.target.value,
        });
    }

    handleChangeTitle(event) {
        this.setState({
            title: event.target.value,
        });
    }

    handleChangeDescription(event) {
        this.setState({
            description: event.target.value,
        });
    }

    handleChangeSkills(event) {
        this.setState({
            skills: event.target.value,
        });
    }

    handleChangeCategory(event) {
        this.setState({
            category: event.target.value,
        });
    }

    handleChangeBudget(event) {
        this.setState({
            budget: event.target.value,
        });
    }



    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    tosAccepted() {
        this.setState({
            tos: !this.state.tos
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
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

        return (
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 10, offset:5 }}>
                    <h2 style={{textAlign:'center'}}>Post new job</h2>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="Job Title" >
                            <Input    placeholder="Enter Job Title" />
                        </Form.Item>

                        <Form.Item
                            label={
                                <span>
                                    Job Description&nbsp;
                                    <Tooltip title="Describe clearly the job you need, including all particularities.">
                                        <Icon type="question-circle-o" />
                                    </Tooltip>
                                </span>
                            }
                        >
                            <TextArea
                                onChange={this.onChange}
                                placeholder="Enter Job Description"
                                autosize={{ minRows: 3, maxRows: 5 }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={
                                <span>
                                  Skills&nbsp;
                                    <Tooltip title="Enter necessary skills for the job you want to post.">
                                    <Icon type="question-circle-o" />
                                  </Tooltip>
                                </span>
                            }
                        >
                            <SkillsGroup/>
                        </Form.Item>

                        <Form.Item label="Job Category">
                            <Cascader options={jobCat} />
                        </Form.Item>
                        <Form.Item label="Available Budget" >

                            <Input    placeholder="Enter amount" />
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>

                                <Checkbox checked={this.state.tos} name={'tos'} onChange={this.tosAccepted}>
                                    I agree with <strong>VBR Network</strong> <a href="">Terms & Conditions</a>
                                </Checkbox>,
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary"
                                    htmlType="submit"
                                    disabled={!this.state.tos}
                                    style={{
                                        background: 'rgb(46, 195, 171)',
                                        borderColor: 'rgb(46, 195, 171)'}}
                                    >
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
