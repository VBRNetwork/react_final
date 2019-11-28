import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
    Icon,
    Button,
    Avatar,
    Row,
    Layout,
    Col,
    Select,
    Form, Input, Tooltip, Cascader, Checkbox, Menu, Upload, Dropdown
} from 'antd'

import PropTypes from "prop-types";
const { TextArea } = Input;
import '../../styles/dashboard.css'
import SkillsGroup from '../../components/Elements/EditableTagGroup'
const { Option, OptGroup } = Select;
import {becomeFreelancer} from '../../actions/user'


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


class BecomeFreelancerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategories:[],
            languages: '',
            description: '',
            skills: '',
            cvFile: '',
            categories:[]
        };

        this.handleChangeLanguages = this.handleChangeLanguages.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.tosAccepted = this.tosAccepted.bind(this);
        this.getSubcategories = this.getSubcategories.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.becomeFreelancerButton = this.becomeFreelancerButton.bind(this);
        this.saveSkills = this.saveSkills.bind(this);
        this.uploadCv = this.uploadCv.bind(this);

    }

    getSubcategories(){
        if(this.props.menu.mainMenu){
            let main_menu = this.props.menu.mainMenu;
            let categories = [];
            Object.keys(main_menu).map((category,index) => {
                categories.push(main_menu[category])
            })

            this.setState({
                categories:categories
            })
        }
    }

    componentDidMount () {
        this.getSubcategories();
    }

    handleChangeLanguages(event) {
        this.setState({
            language:event
        });
    }

    handleChangeDescription(event) {
        this.setState({
            description: event.target.value,
        });
    }

    saveSkills(event){
        this.setState({
            skills:event
        })
    }

    static async getInitialProps ({ store, query }) {
    }

    tosAccepted() {
        this.setState({
            tos: !this.state.tos
        })
    }

    handleChangeCategory(value) {
        this.setState({
            selectedCategories:value
        })
    }

    uploadCv(info){
        if (info.file.status !== 'uploading') {
            this.setState({
                cvFile:[
                    info.file,
                    info.fileList
                ]
            })
        }

        if (info.file.status === 'done') {
        } else if (info.file.status === 'error') {
        }
    }

    becomeFreelancerButton(){
        this.props.becomeFreelancer(this.state).then((e) => {
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
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="Please select"
                                    onChange={this.handleChangeCategory}
                                >

                                    {this.state.categories &&
                                    this.state.categories.map((value, index, array) => {
                                        return <OptGroup key={value.id} label={value.name}>
                                            {value.subcategories.map((subcategory,indexsub) => {
                                                return <Option key={'sub'+indexsub} value={subcategory.id}>{subcategory.title}</Option>})}
                                            </OptGroup>})}
                                </Select>
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
                                    onChange={this.handleChangeDescription}
                                    placeholder="Enter Short Description"
                                    autosize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>
                            <Form.Item
                                label={
                                    <span>
                                  Skills&nbsp;
                                        <Tooltip title="Up to 5 Skills.">
                                    <Icon type="question-circle-o" />
                                  </Tooltip>
                                </span>
                                }
                            >
                                <SkillsGroup saveTags={this.saveSkills}/>
                            </Form.Item>

                            <Form.Item label="Languages">
                                <Cascader options={lang} onChange={this.handleChangeLanguages}/>
                            </Form.Item>
                            <Form.Item label="Import Your Portfolio" >
                                <Upload  name='cvfile' onChange={this.uploadCv}>
                                    <Button>
                                        <Icon type="upload" /> Click to Upload
                                    </Button>
                                </Upload>
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
                                        onClick={this.becomeFreelancerButton}
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
        user:state.user,
        menu:state.settings.main_menu
    }
}

BecomeFreelancerContainer.propTypes = {
    becomeFreelancer: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {becomeFreelancer
})(BecomeFreelancerContainer)
