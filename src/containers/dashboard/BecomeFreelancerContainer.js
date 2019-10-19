import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
    Icon,
    Button,
    Avatar,
    Row,
    Layout,
    Col,
    Form, Input, Tooltip, Cascader, Checkbox
} from 'antd'
const { Header, Content, Footer, Sider } = Layout
const { TextArea } = Input;
import '../../styles/dashboard.css'
import SkillsGroup from '../../components/Elements/EditableTagGroup'

const lang = [
    {
        value: 'English',
        label: 'English',
        children: [
            {
                value: 'Beginner',
                label: 'Beginner',
            },

            {
                value: 'Intermediate',
                label: 'Intermediate',
            },

            {
                value: 'Advanced',
                label: 'Advanced',
            },

            {
                value: 'Native',
                label: 'Native',
            },
        ],
    },

    {
        value: 'Spanish',
        label: 'Spanish',
        children: [
            {
                value: 'Beginner',
                label: 'Beginner',
            },

            {
                value: 'Intermediate',
                label: 'Intermediate',
            },

            {
                value: 'Advanced',
                label: 'Advanced',
            },

            {
                value: 'Native',
                label: 'Native',
            },
        ],
    },

    {
        value: 'Mandarin',
        label: 'Mandarin',
        children: [
            {
                value: 'Beginner',
                label: 'Beginner',
            },

            {
                value: 'Intermediate',
                label: 'Intermediate',
            },

            {
                value: 'Advanced',
                label: 'Advanced',
            },

            {
                value: 'Native',
                label: 'Native',
            },
        ],
    },

    {
        value: 'French',
        label: 'French',
        children: [
            {
                value: 'Beginner',
                label: 'Beginner',
            },

            {
                value: 'Intermediate',
                label: 'Intermediate',
            },

            {
                value: 'Advanced',
                label: 'Advanced',
            },

            {
                value: 'Native',
                label: 'Native',
            },
        ],
    },

    {
        value: 'German',
        label: 'German',
        children: [
            {
                value: 'Beginner',
                label: 'Beginner',
            },

            {
                value: 'Intermediate',
                label: 'Intermediate',
            },

            {
                value: 'Advanced',
                label: 'Advanced',
            },

            {
                value: 'Native',
                label: 'Native',
            },
        ],
    },

    {
        value: 'Italian',
        label: 'Italian',
        children: [
            {
                value: 'Beginner',
                label: 'Beginner',
            },

            {
                value: 'Intermediate',
                label: 'Intermediate',
            },

            {
                value: 'Advanced',
                label: 'Advanced',
            },

            {
                value: 'Native',
                label: 'Native',
            },
        ],
    },
];

const jobCat = [
    {
        value: 'Writing & Translation',
        label: 'Writing & Translation',
    },

    {
        value: 'Digital Marketing',
        label: 'Digital Marketing',
    },

    {
        value: 'Web & Graphic Design',
        label: 'Web & Graphic Design',
    },

    {
        value: 'Business Consultancy',
        label: 'Business Consultancy',
    },

    {
        value: 'IT & Programming',
        label: 'IT & Programming',

    },
];

class BecomeFreelancerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            freelancer_id: '',
            freelancer_category: '',
            languages: '',
            description: '',
            skills: '',
            portfolio: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFreelancerCategory = this.handleChangeFreelancerCategory.bind(this);
        this.handleChangeLanguages = this.handleChangeLanguages.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangePortfolio = this.handleChangePortfolio.bind(this);
        this.tosAccepted = this.tosAccepted.bind(this);

    }
    handleChange(event) {
        this.setState({
            freelancer_id: event.target.value,
        });
    }

    handleChangeFreelancerCategory(event) {
        this.setState({
            freelancer_category: event.target.value,
        });
    }

    handleChangeLanguages(event) {
        this.setState({
            languages: event.target.value,
        });
    }

    handleChangeDescription(event) {
        this.setState({
            description: event.target.value,
        });
    }

    handleChangePortfolio(event) {
        this.setState({
            portfolio: event.target.value,
        });
    }


    static async getInitialProps ({ store, query }) {
    }

    tosAccepted() {
        this.setState({
            tos: !this.state.tos
        })
    }

    render () {

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
                xxl: { span: 12 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
                xxl: { span: 12 },
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
                xxl: { span: 24 },
            },
        };

        return (
            <div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 10, offset:5 }}>
                        <h2 style={{textAlign:'center'}}>Become Freelancer</h2>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <Form.Item label="Freelancer Category">
                                <Cascader options={jobCat} />
                            </Form.Item>

                            <Form.Item
                                label={
                                    <span>
                                  Short Description&nbsp;
                                        <Tooltip title="Few words about you, and your professional background.">
                                    <Icon type="question-circle-o" />
                                  </Tooltip>
                                </span>
                                }
                            >
                                <TextArea
                                    onChange={this.onChange}
                                    placeholder="Enter Short Description"
                                    autosize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>
                            <Form.Item
                                label={
                                    <span>
                                  Skills&nbsp;
                                        <Tooltip title="Enter all the skills you have.">
                                    <Icon type="question-circle-o" />
                                  </Tooltip>
                                </span>
                                }
                            >
                                <SkillsGroup/>
                            </Form.Item>

                            <Form.Item label="Languages">
                                <Cascader options={lang} />
                            </Form.Item>
                            <Form.Item label="Import Portfolio" >

                                <Input    placeholder="Upload Portfolio" />
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
                                    Become Freelancer
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user:state.user
    }
}

BecomeFreelancerContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(BecomeFreelancerContainer)
