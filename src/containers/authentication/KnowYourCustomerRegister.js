
import React from 'react'
import 'antd/dist/antd.css'
import {
    Form,
    Input,
    Icon,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    DatePicker, Alert,
} from 'antd'
import { Helmet } from 'react-helmet'
import moment from 'moment'
const FormItem = Form.Item
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { knowYourCustomer } from '../../actions/user'
import Router from 'next/dist/client/router'
import '../../styles/kyc.css'
import {withRouter} from 'next/router';
class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            errorMessage:'',
            referral_code:null
        }
    }

    redirectToTarget = () => {
        Router.push('/dashboard')
    };

    componentDidMount () {
        if(typeof this.props.router.query.join != 'undefined'){
            const {join} = this.props.router.query;
            this.setState({
                referral_code: join
            })

        }

    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.knowYourCustomer(values).then((e) => {
                    this.redirectToTarget()
                }).catch((error) => {
                    if(error.response){
                        let errorText = '';
                        Object.keys(error.response.data).map(function(e,i){
                            errorText += error.response.data[e][0] + '\n'
                        });
                        this.setState({
                            errorMessage: errorText,
                            loggingIn: false
                        })
                    }else {
                        this.redirectToTarget()
                    }
                })
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form

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
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 4, offset:6 }}>
                        <h3 className={'text-center'}>Don't miss the opportunity!</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br/>standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,<br/> but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the <br/> 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop <br/> publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 4, offset:2}}>
                        <h2 className={'text-center'}>Sign Up to Veelancing ICO</h2>
                        <Form inline="true" onSubmit={this.handleSubmit}>

                            <FormItem>
                                {getFieldDecorator('first_name', {
                                    rules: [{ required: true, message: 'Please input your first name!' }],
                                })(
                                    <Input addonBefore={<Icon type="user" />} placeholder="First name" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('last_name', {
                                    rules: [{ required: true, message: 'Please input your last name!' }],
                                })(
                                    <Input
                                        addonBefore={<Icon type="lock" />}
                                        placeholder="Last name"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Please input your email!' ,  type:'email'}],
                                })(
                                    <Input
                                        addonBefore={<Icon type="lock" />}
                                        placeholder="Email"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password1', {
                                    rules: [{ required: true, message: 'Please input your password!', min:8}],
                                })(
                                    <Input
                                        addonBefore={<Icon type="lock" />}
                                        placeholder="Password"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password2', {
                                    rules: [{ required: true, message: 'Please input your password!',  min:8}],
                                })(
                                    <Input
                                        addonBefore={<Icon type="lock" />}
                                        placeholder="Password"
                                    />
                                )}
                            </FormItem>

                            <FormItem>
                                {getFieldDecorator('phone', {
                                    rules: [{ required: true, message: 'Please input your phone number!'}],
                                })(
                                    <Input
                                        addonBefore={<Icon type="lock" />}
                                        type={'number'}
                                        placeholder="Phone number"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('gender', {
                                    rules: [{ required: true, message: 'Please choose your gender!'}],
                                })(
                                    <Select addonBefore={<Icon type="lock" />} placeholder={'Gender'}>
                                        <Select.Option value={1}>Women</Select.Option>
                                        <Select.Option value={2}>Man</Select.Option>
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('address', {
                                    rules: [{ required: true, message: 'Input your address!'}],
                                })(
                                    <Input
                                        addonBefore={<Icon type="lock" />}
                                        placeholder="Your address"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('date_birth', {
                                    rules: [{ required: true, message: 'Choose birth day!'}],
                                })(
                                    <DatePicker placeholder={'Choose your birth day'} defaultPickerValue={moment('1975-08-01', 'YYYY-MM-DD')}/>
                                )}
                            </FormItem>

                            {this.state.errorMessage.length > 0 &&
                            <Row>
                                <Col>
                                    <ul>
                                        <Alert
                                            showIcon
                                            message={this.state.errorMessage}
                                            type="error"
                                        />
                                    </ul>
                                </Col>
                            </Row>
                            }

                            {this.state.referral_code && <FormItem>
                                {getFieldDecorator('referral_code', {
                                    rules: [{ required: false}],
                                    initialValue:  this.state.referral_code,
                                })(
                                    <Input
                                        addonBefore={'Referral:'}
                                        disabled={true}
                                    />
                                )}
                            </FormItem>}


                            <FormItem>
                                {getFieldDecorator('tos', {
                                    rules: [{ required: true, message: 'You need to accept terms and conditions!'}],
                                    valuePropName: 'checked'
                                })(
                                    <Checkbox>Agree, Terms and conditions</Checkbox>
                                )}
                            </FormItem>

                            <FormItem>
                                <Button type="primary" htmlType="submit">
                                    BUY TOKENS
                                </Button>
                            </FormItem>
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

LoginForm.propTypes = {
    knowYourCustomer: PropTypes.func.isRequired,
    router: PropTypes.instanceOf(Object).isRequired,
}

const KnowYourCustomerRegister = Form.create({ name: 'login' })(withRouter(LoginForm))

export default connect(mapStateToProps, {
    knowYourCustomer
})(KnowYourCustomerRegister)