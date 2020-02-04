import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
    Icon,
    Button,
    Row,
    Col,
    Form, Input, Checkbox, Upload, DatePicker
} from 'antd'
import '../styles/kyc.css'
import PropTypes from 'prop-types'
import '../styles/dashboard.css'
import {knowYourCustomer} from '../actions/user'
import { Helmet } from 'react-helmet'

class KnowYourCustomerContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            gender: '',
            date_birth: '',
            address_line1: '',
            address_line2: '',
            id_front_picture: '',
            id_back_picture: '',
            id_selfie_picture: '',
            phone: '',
            fileList: [],
            previewVisible: false,
            previewImage: "",
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
    }

    handleChangeFirstname (event) {
        this.setState({
            first_name: event.target.value,
        })
    }

    handleChangeGender (event) {
        this.setState({
            gender: event.target.value,
        })
    }

    handleChangeLastname (event) {
        this.setState({
            last_name: event.target.value,
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

    knowYourCustomerButton() {
        this.props.knowYourCustomer(this.state).then((e) => {
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
                xs: { span: 24 },
                sm: { span: 8 },
                xl: { span: 8 },
                xxl: { span: 9 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
                xl: { span: 8 },
                xxl: { span: 12 },
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
        const { fileList } = this.state;

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
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 24}}>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <h2 style={{ textAlign: 'center', marginBottom: '1%' }}>Veelancing - Know Your Customer</h2>
                            <Form.Item label="First Name">
                                <Input className="kyc-input" onChange={this.handleChangeFirstname} placeholder="First Name"/>
                            </Form.Item>

                            <Form.Item label="Last Name">
                                <Input className="kyc-input" onChange={this.handleChangeLastname} placeholder="Last Name"/>
                            </Form.Item>

                            <Form.Item label="Gender">
                                <Input className="kyc-input" onChange={this.handleChangeGender} placeholder="Gender"/>
                            </Form.Item>

                            <Form.Item label="Phone">
                                <Input className="kyc-input" type={'number'} pattern="[0-9]"  onChange={this.handleChangePhone} placeholder="Phone"/>
                            </Form.Item>


                            <Form.Item label="Date Of Birth">
                                {getFieldDecorator('date-picker', config)(<DatePicker onChange={this.handleSetDateBirth} className="kyc-input"/>)}
                            </Form.Item>

                            <Form.Item label="Address Line 1">
                                <Input className="kyc-input" onChange={this.handleChangeAddress1} placeholder="Address Line 1"/>
                            </Form.Item>

                            <Form.Item label="Address Line 2">
                                <Input className="kyc-input" onChange={this.handleChangeAddress2} placeholder="Address Line 2"/>
                            </Form.Item>

                            <Form.Item label="ID Front Picture">
                                <Upload className="kyc-input" name='id_front_picture'
                                        onChange={this.uploadFrontPicture}>
                                    <Button className="kyc-upload-btn">
                                        <Icon type="upload"/> Upload ID Front
                                    </Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item label="ID Back Picture">
                                <Upload className="kyc-input" name='id_back_picture'
                                        onChange={this.uploadBackPicture}>
                                    <Button className="kyc-upload-btn">
                                        <Icon type="upload"/> Upload ID Back
                                    </Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item label="Selfie Picture">
                                <Upload className="kyc-input" name='id_selfie_picture'
                                        onChange={this.selfiePicture}>
                                    <Button className="kyc-upload-btn">
                                        <Icon type="upload"/> Upload Selfie
                                    </Button>
                                </Upload>
                            </Form.Item>

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
                        </Form>
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
    becomeFreelancer: PropTypes.func.isRequired,
    knowYourCustomer: PropTypes.func.isRequired
}

const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(KnowYourCustomerContainer)

export default connect(mapStateToProps, {
    knowYourCustomer
})(WrappedTimeRelatedForm)
