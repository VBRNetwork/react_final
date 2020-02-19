import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Icon,
    Button,
    Row,
    Slider,
    Col,
    Select,
    Form, Input, Checkbox, Upload, DatePicker, Alert, Card
} from 'antd'
import '../styles/kyc.css'
import PropTypes from 'prop-types'
import '../styles/dashboard.css'
import { knowYourCustomer } from '../actions/user'
import { Helmet } from 'react-helmet'
import Router from 'next/dist/client/router'

const { Option } = Select

class KnowYourCustomerContainer extends Component {

    constructor (props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            gender: '',
            email: '',
            password1: '',
            password2: '',
            date_birth: '',
            address_line1: '',
            address_line2: '',
            id_front_picture: '',
            id_back_picture: '',
            id_selfie_picture: '',
            phone: '',
            fileList: [],
            previewVisible: false,
            previewImage: '',
            errorMessage: []
        }

        this.tosAccepted = this.tosAccepted.bind(this)
        this.knowYourCustomerButton = this.knowYourCustomerButton.bind(this)
        this.handleChangeFirstname = this.handleChangeFirstname.bind(this)
        this.handleChangeLastname = this.handleChangeLastname.bind(this)
        this.handleChangeGender = this.handleChangeGender.bind(this)
        this.handleChangeAddress1 = this.handleChangeAddress1.bind(this)
        this.handleChangeAddress2 = this.handleChangeAddress2.bind(this)
        this.uploadFrontPicture = this.uploadFrontPicture.bind(this)
        this.uploadBackPicture = this.uploadBackPicture.bind(this)
        this.handleSetDateBirth = this.handleSetDateBirth.bind(this)
        this.handleChangePhone = this.handleChangePhone.bind(this)
        this.selfiePicture = this.selfiePicture.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeRepeatPassword = this.handleChangeRepeatPassword.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }

    handleChangeFirstname (event) {
        this.setState({
            first_name: event.target.value,
        })
    }

    handleChangeGender (event) {
        this.setState({
            gender: event
        })
    }

    handleChangeLastname (event) {
        this.setState({
            last_name: event.target.value,
        })
    }

    handleChangeEmail (event) {
        this.setState({
            email: event.target.value,
        })
    }

    handleChangePassword (event) {
        this.setState({
            password1: event.target.value,
        })
    }

    handleChangeRepeatPassword (event) {
        this.setState({
            password2: event.target.value,
        })
    }

    handleChangePhone (event) {
        this.setState({
            phone: event.target.value,
        })
    }

    handleChangeAddress1 (event) {
        this.setState({
            address_line1: event.target.value,
        })
    }

    handleSetDateBirth (event) {
        this.setState({
            date_birth: event,
        })
    }

    handleChangeAddress2 (event) {
        this.setState({
            address_line2: event.target.value,
        })
    }

    tosAccepted () {
        this.setState({
            tos: !this.state.tos
        })
    }

    uploadFrontPicture (info) {
        if (info.file.status !== 'uploading') {
            this.setState({
                id_front_picture: [
                    info.file,
                    info.fileList
                ]
            })
        }

        if (info.file.status === 'done') {
        } else if (info.file.status === 'error') {
        }
    }

    uploadBackPicture (info) {
        if (info.file.status !== 'uploading') {
            this.setState({
                id_back_picture: [
                    info.file,
                    info.fileList
                ]
            })
        }

        if (info.file.status === 'done') {
        } else if (info.file.status === 'error') {
        }

    }

    selfiePicture (info) {
        if (info.file.status !== 'uploading') {
            this.setState({
                id_selfie_picture: [
                    info.file,
                    info.fileList
                ]
            })
        }
        if (info.file.status === 'done') {
        } else if (info.file.status === 'error') {
        }
    }

    redirectToTarget(){
        Router.push('/dashboard?register_success=1')
    }

    knowYourCustomerButton () {
        this.props.knowYourCustomer(this.state).then((e) => {
            this.redirectToTarget()
        }).then((error) => {
            console.log(error)
            let errorText = '';
            if (error.response) {
                Object.keys(error.response.data).map(function (e, i) {
                    errorText += error.response.data[e][0] + '\n'
                });
                this.setState({
                    errorMessage: errorText,
                    loggingIn: false
                })
            }
        })
    }

    setValue (event) {
        this.setState({
            value: event.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return
            }
            const rangeValue = fieldsValue['range-picker']
            const rangeTimeValue = fieldsValue['range-time-picker']
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
            }
        })
    }

    render () {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: {
                xs: { span: 4 },
                sm: { span: 4 },
                xl: { span: 4 },
                xxl: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 6 },
                sm: { span: 6 },
                xl: { span: 6 },
                xxl: { span: 6 },
            }
        }
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
            }
        }

        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        }
        const { fileList } = this.state

        return (
            <div>
                <Helmet>
                    <title>Know Your Customer - Veelancing ICO</title>
                    <meta
                        name='description'
                        content='Register to our ICO'
                    />
                </Helmet>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 24 }}>
                        <h2 className={'text-center'}>Veelancing - Know Your Customer</h2>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 7 }}>
                                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                    <Form.Item
                                        label="First Name"
                                        hasFeedback={(this.state.first_name.length > 0)}
                                        validateStatus={(this.state.first_name.length > 0) ? 'success' : ''}>
                                        <Input className="kyc-input" onChange={this.handleChangeFirstname}
                                               placeholder="First Name"/>
                                    </Form.Item>

                                    <Form.Item
                                        label="Last Name"
                                        hasFeedback={(this.state.last_name.length > 0)}
                                        validateStatus={(this.state.last_name.length > 0) ? 'success' : ''}>
                                        <Input className="kyc-input" onChange={this.handleChangeLastname}
                                               placeholder="Last Name"/>
                                    </Form.Item>

                                    <Form.Item
                                        label="Email"
                                        hasFeedback={(this.state.email.length > 0)}
                                        validateStatus={(this.state.email.length > 0) ? 'success' : ''}>
                                        <Input className="kyc-input" onChange={this.handleChangeEmail}
                                               placeholder="Email"/>
                                    </Form.Item>

                                    <Form.Item  label="Password"
                                                hasFeedback={(this.state.password1.length > 0)}
                                                validateStatus={(this.state.password1.length > 0) ? 'success' : ''}>
                                        <Input.Password className="kyc-input" onChange={this.handleChangePassword}
                                               placeholder="Password"/>
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        hasFeedback={(this.state.password2.length > 0)}
                                        validateStatus={(this.state.password2.length > 0) ? 'success' : ''}>
                                        <Input.Password className="kyc-input" onChange={this.handleChangeRepeatPassword}
                                               placeholder="Repeat your password"/>
                                    </Form.Item>

                                    <Form.Item
                                        label="Gender"
                                        hasFeedback={(this.state.gender.length > 0)}
                                        validateStatus={(this.state.gender.length > 0) ? 'success' : ''}>
                                        <Select placeholder="Choose gender" style={{ width: 120 }}
                                                className="kyc-input" onChange={this.handleChangeGender}>
                                            <Option value={1}>Women</Option>
                                            <Option value={2}>Man</Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item label="Phone"
                                               hasFeedback={(this.state.phone.length > 0)}
                                               validateStatus={(this.state.phone.length > 0) ? 'success' : ''}>
                                        <Input className="kyc-input" type={'number'} pattern="[0-9]"
                                               onChange={this.handleChangePhone} placeholder="Phone number"/>
                                    </Form.Item>

                                    <Form.Item label="Date of birth"
                                               hasFeedback={(this.state.date_birth.length > 0)}
                                               validateStatus={(this.state.date_birth.length > 0) ? 'success' : ''}>
                                        <DatePicker onChange={this.handleSetDateBirth} className="kyc-input"/>
                                    </Form.Item>

                                    <Form.Item label="Address Line 1"
                                               hasFeedback={(this.state.address_line1.length > 0)}
                                               validateStatus={(this.state.address_line1.length > 0) ? 'success' : ''}>
                                        <Input className="kyc-input" onChange={this.handleChangeAddress1}
                                               placeholder="Address Line 1"/>
                                    </Form.Item>

                                    <Form.Item label="Address Line 2"
                                               hasFeedback={(this.state.address_line2.length > 0)}
                                               validateStatus={(this.state.address_line2.length > 0) ? 'success' : ''}>
                                        <Input className="kyc-input" onChange={this.handleChangeAddress2}
                                               placeholder="Address Line 2"/>
                                    </Form.Item>

                                    <Form.Item label="ID Front Picture"
                                               hasFeedback={(this.state.id_front_picture.length > 0)}
                                               validateStatus={(this.state.id_front_picture.length > 0) ? 'success' : ''}>
                                        <Upload className="kyc-input" name='id_front_picture'
                                                onChange={this.uploadFrontPicture}>
                                            <Button className="kyc-upload-btn">
                                                <Icon type="upload"/> Upload ID Front
                                            </Button>
                                        </Upload>
                                    </Form.Item>

                                    <Form.Item label="ID Back Picture"
                                               hasFeedback={(this.state.id_back_picture.length > 0)}
                                               validateStatus={(this.state.id_back_picture.length > 0) ? 'success' : ''}>
                                        <Upload className="kyc-input" name='id_back_picture'
                                                onChange={this.uploadBackPicture}>
                                            <Button className="kyc-upload-btn">
                                                <Icon type="upload"/> Upload ID Back
                                            </Button>
                                        </Upload>
                                    </Form.Item>

                                    <Form.Item label="Selfie Picture"
                                               hasFeedback={(this.state.id_selfie_picture.length > 0)}
                                               validateStatus={(this.state.id_selfie_picture.length > 0) ? 'success' : ''}>
                                        <Upload className="kyc-input" name='id_selfie_picture'
                                                onChange={this.selfiePicture}>
                                            <Button className="kyc-upload-btn">
                                                <Icon type="upload"/> Upload Selfie
                                            </Button>
                                        </Upload>
                                    </Form.Item>



                                    {this.state.errorMessage.length > 0 &&
                                    <Row>
                                        <Col>
                                            <Alert
                                                showIcon
                                                message={this.state.errorMessage}
                                                type="error"
                                            />
                                        </Col>
                                    </Row>
                                    }


                                </Form>
                            </Col>
                        </Row>
                        <Form.Item className="kyc-form-footer" {...tailFormItemLayout}>
                            <Checkbox checked={this.state.tos} name={'tos'} onChange={this.tosAccepted}>
                                I have read and agreed with <strong>Veelancing</strong> <a href="">Terms &
                                Conditions</a> and <a href="">Privacy Policy</a>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item className="kyc-form-btn" {...tailFormItemLayout}>

                            <Button type="primary"
                                    className="kyc-upload-btn-sub"
                                    htmlType="submit"
                                    disabled={!this.state.tos}
                                    onClick={this.knowYourCustomerButton}>
                                Submit KYC
                            </Button>
                        </Form.Item>
                    </Col>

                </Row>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user,
        menu: state.settings.main_menu
    }
}

KnowYourCustomerContainer.propTypes = {
    knowYourCustomer: PropTypes.func.isRequired
}

const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(KnowYourCustomerContainer)

export default connect(mapStateToProps, {
    knowYourCustomer
})(WrappedTimeRelatedForm)
