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
import { AutoComplete } from 'antd';
import PropTypes from "prop-types";

const { TextArea } = Input;
import '../../styles/dashboard.css'
import SkillsGroup from '../../components/Elements/EditableTagGroup'
const { Option, OptGroup } = Select;
import {becomeFreelancer} from '../../actions/user'
import AutoCompleteInput from '../../components/Elements/AutoCompleteInput'
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

class ViewProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategories:[],
            languages: '',
            description: '',
            skills: [
                ''
            ],
            cvFile: '',
            categories:[],
            skillsSource: [ {
                title: 'Libraries',
                children: [
                    {
                        title: 'AntDesign',
                        count: 10000,
                    },
                    {
                        title: 'AntDesign UI',
                        count: 10600,
                    },
                ],
            },
                {
                    title: 'Solutions',
                    children: [
                        {
                            title: 'AntDesign UI',
                            count: 60100,
                        },
                        {
                            title: 'AntDesign',
                            count: 30010,
                        },
                    ],
                },
                {
                    title: 'Articles',
                    children: [
                        {
                            title: 'AntDesign design language',
                            count: 100000,
                        },
                    ],
                }],
            valueSkills: '',
            tags:[]
        };

        this.handleChangeLanguages = this.handleChangeLanguages.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.tosAccepted = this.tosAccepted.bind(this);
        this.getSubcategories = this.getSubcategories.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.becomeFreelancerButton = this.becomeFreelancerButton.bind(this);
        this.uploadCv = this.uploadCv.bind(this);
        this.onChangeAutocomplete = this.onChangeAutocomplete.bind(this);
        this.onSearch = this.onSearch.bind(this);

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

    onSearch = searchText => {
        this.setState({
            skillsSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
        });
    };

    onChangeAutocomplete = value => {
        let skills =   [...this.state.skills, value];
        this.setState({ valueSkills:value ,skills:skills });
    };


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
        const { skillsSource, valueSkills } = this.state;
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
                    <Col xs={14} sm={14} md={14} lg={14} xl={14} xxl={{ span: 14, offset:1}}>
                        <h2>Your Profile - {this.props.user.name}</h2>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <Form.Item label="Freelancer Category">
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="Please select"
                                    defaultValue={35}
                                    disabled={true}
                                    onChange={this.handleChangeCategory}>
                                    {this.state.categories &&
                                    this.state.categories.map((value, index, array) => {
                                        return <OptGroup key={value.id} label={value.name}>
                                            {value.subcategories.map((subcategory,indexsub) => {
                                                return <Option  key={'sub'+indexsub} value={subcategory.id}>{subcategory.title}</Option>})}
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
                                }>
                                <TextArea
                                    onChange={this.handleChangeDescription}
                                    placeholder="Enter Short Description"
                                    autosize={{ minRows: 3, maxRows: 5 }}
                                />
                            </Form.Item>

                            <Form.Item
                                label={
                                    <span>
                                        Skills &nbsp;
                                        <Tooltip title="Up to 5 Skills.">
                                    <Icon type="question-circle-o" />
                                  </Tooltip>
                                </span>}>
                                <SkillsGroup tags={this.state.skills}/>
                                <AutoCompleteInput
                                    dataSource={skillsSource}
                                    style={{ width: 200 }}
                                    value={valueSkills}
                                    onSelect={this.onChangeAutocomplete}
                                    onSearch={this.onSearch}
                                    placeholder="Search your skill"
                                />
                            </Form.Item>

                            <Form.Item label="Languages">
                                <Cascader options={lang} onChange={this.handleChangeLanguages}/>
                            </Form.Item>

                        </Form>

                        <h2 >Security</h2>
                        <h3 >Change your password</h3>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                            <Form.Item label={'Old password'}>
                                <Input
                                    onChange={this.handleChange}
                                    value={this.state.username}
                                    prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder='Old password'
                                />
                            </Form.Item>

                            <Form.Item label={'Password'}>
                                <Input
                                    onChange={this.handleChange}
                                    value={this.state.username}
                                    prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder='Password'
                                />
                            </Form.Item>

                            <Form.Item  label={'Repeat Password'}>
                                <Input
                                    onChange={this.handleChange}
                                    value={this.state.username}
                                    prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder='Repeat Password'
                                />
                                <Button type="danger">Reset password</Button>
                            </Form.Item>
                        </Form>

                    </Col>
                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={{ span: 8}}>
                        <div style={{marginTop:'30px',padding:'5px',marginLeft:'10px',borderRadius:'2px'}}>
                            <img src="https://via.placeholder.com/250x250" alt=""/>
                        </div>
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

ViewProfileContainer.propTypes = {
    becomeFreelancer: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {becomeFreelancer
})(ViewProfileContainer)
