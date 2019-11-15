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
    Form, Input, Tooltip, Cascader, Checkbox, Menu, Upload, Dropdown, DatePicker, TimePicker
} from 'antd'
import '../styles/kyc.css'
import PropTypes from "prop-types";
const { TextArea } = Input;
import '../styles/dashboard.css'
import SkillsGroup from '../components/Elements/EditableTagGroup'
const { Option, OptGroup } = Select;
const { MonthPicker, RangePicker } = DatePicker;
import {becomeFreelancer} from "../actions/user"


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


class KnowYourCustomerContainer extends Component {
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
        this.knowYourCustomerButton = this.knowYourCustomerButton.bind(this);
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

    knowYourCustomerButton(){
        this.props.knowYourCustomer(this.state).then((e) => {
            console.log(e);
        })
    }

    handleSubmit = e => {
        e.preventDefault();
    
        this.props.form.validateFields((err, fieldsValue) => {
          if (err) {
            return;
          }
    
          // Should format date value before submit.
          const rangeValue = fieldsValue['range-picker'];
          const rangeTimeValue = fieldsValue['range-time-picker'];
          const values = {
            ...fieldsValue,
            'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
            'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
            'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
            'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
            'range-time-picker': [
              rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
              rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
            ],
            'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
          };
          console.log('Received values of form: ', values);
        });
      };

    render () {

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
                xl: { span: 8 },
                xxl: { span: 12 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
                xl: { span: 8 },
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
                },
                xl: { span: 24 },
                xxl: { span: 24 },
            },
        };

        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
          };
          const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
          };

        return (
            <div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 10, offset:5 }}>
                        <h2 style={{textAlign:'center', marginBottom: '5%'}}>Veelancing - Know Your Customer</h2>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                            <Form.Item  label="First Name">
                                <Input className="kyc-input"placeholder="First Name" />
                            </Form.Item>

                            <Form.Item  label="Last Name">
                                <Input className="kyc-input"placeholder="Last Name" />
                            </Form.Item>

                            <Form.Item  label="Gender">
                                <Input className="kyc-input"placeholder="Gender" />
                            </Form.Item>

                            <Form.Item  label="Date Of Birth">
                                {getFieldDecorator('date-picker', config)(<DatePicker className="kyc-input"/>)}
                            </Form.Item>

                            <Form.Item  label="Address Line 1">
                                <Input className="kyc-input"placeholder="Address Line 1" />
                            </Form.Item>

                            <Form.Item  label="Address Line 2">
                                <Input className="kyc-input"placeholder="Address Line 2" />
                            </Form.Item>

                            {false && <div><Form.Item label="ID Front Picture" >
                                <Upload  name='cvfile' onChange={this.uploadCv}>
                                    <Button className="kyc-upload-btn" >
                                        <Icon type="upload" /> Upload Passport Front
                                    </Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item label="ID Front Picture" >
                                <Upload  name='cvfile' onChange={this.uploadCv}>
                                    <Button className="kyc-upload-btn">
                                        <Icon type="upload" /> Upload Passport Back
                                    </Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item label="Selfie Picture" >
                                <Upload  name='cvfile' onChange={this.uploadCv}>
                                    <Button className="kyc-upload-btn">
                                        <Icon type="upload" /> Upload Selfie
                                    </Button>
                                </Upload>
                            </Form.Item></div>}
                            
                            
            {true &&  <div><Form.Item label="ID Front Picture" >
                                <Upload  name='cvfile' onChange={this.uploadCv}>
                                    <Button className="kyc-upload-btn">
                                        <Icon type="upload" /> Upload ID Front
                                    </Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item label="ID Front Picture" >
                                <Upload  name='cvfile' onChange={this.uploadCv}>
                                    <Button className="kyc-upload-btn">
                                        <Icon type="upload" /> Upload ID Back
                                    </Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item label="Selfie Picture" >
                                <Upload  name='cvfile' onChange={this.uploadCv}>
                                    <Button className="kyc-upload-btn">
                                        <Icon type="upload" /> Upload Selfie
                                    </Button>
                                </Upload>
                            </Form.Item>
                        </div>}

                            <Form.Item className="kyc-form-footer" {...tailFormItemLayout}>

                                <Checkbox checked={this.state.tos} name={'tos'} onChange={this.tosAccepted}>
                                    I have read and agreed with <strong>Veelancing</strong> <a href="">Terms & Conditions</a> and <a href="">Privacy Policy</a>
                                </Checkbox>,
                            </Form.Item>
                            <Form.Item className="kyc-form-btn" {...tailFormItemLayout}>
                                <Button type="primary"
                                        className="kyc-upload-btn-sub"
                                        htmlType="submit"
                                        disabled={!this.state.tos}
                                        onClick={this.knowYourCustomerButton}
                                >
                                    Submit KYC
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

KnowYourCustomerContainer.propTypes = {
    becomeFreelancer: PropTypes.func.isRequired
}


const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(KnowYourCustomerContainer);


export default connect(mapStateToProps, {becomeFreelancer
})(WrappedTimeRelatedForm)
