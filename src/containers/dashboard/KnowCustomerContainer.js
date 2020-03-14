import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Col, Form, Icon, Row, Radio } from 'antd'
import Link from 'next/link'
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const FormItem = Form.Item
import { Slider } from 'antd';

class KnowCustomerContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            balance: [0],
        };

    }

    static async getInitialProps ({ store, query }) {
    }


    render () {

        const propsUpload = {
            action: '//jsonplaceholder.typicode.com/posts/',
            listType: 'picture',
            previewFile(file) {
                console.log('Your upload file:', file);
                // Your process logic. Here we just mock to the same file
                return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
                    method: 'POST',
                    body: file,
                })
                .then(res => res.json())
                .then(({ thumbnail }) => thumbnail);
            },
        };

        const { getFieldDecorator } = this.props.form

        return (
            <div>
                <Card title='Know Your Customer'>
                    <Row>
                        <Col xl={16}>
                            <Form inline="true" onSubmit={this.handleSubmit}>


                                <FormItem label={'Front Picture'}>
                                    {getFieldDecorator('front_id_picture', {
                                        rules: [{ required: true, message: 'Please input your front picture!' }],
                                    })(
                                        <Upload {...propsUpload} addonBefore={<Icon type="lock" />}>
                                            <Button>
                                                <UploadOutlined /> Upload your Front Card ID Picture
                                            </Button>
                                        </Upload>
                                    )}
                                </FormItem>

                                <FormItem label={'Back Picture'}>
                                    {getFieldDecorator('back_id_picture', {
                                        rules: [{ required: true, message: 'Please input your back picture!' }],
                                    })(
                                        <Upload {...propsUpload}>
                                            <Button>
                                                <UploadOutlined /> Upload your Back Card ID Picture
                                            </Button>
                                        </Upload>
                                    )}
                                </FormItem>

                                <FormItem label={'Selfie Picture'}>
                                    {getFieldDecorator('selfie_id_picture', {
                                        rules: [{ required: true, message: 'Please input your selfie picture!' }],
                                    })(
                                        <Upload {...propsUpload}>
                                            <Button>
                                                <UploadOutlined /> Upload your Selfie ID Picture
                                            </Button>
                                        </Upload>
                                    )}
                                </FormItem>

                                <FormItem label={'How many tokens do you buy? (VEE Tokens)'}>
                                   <div style={{width:'300px'}}> <Slider defaultValue={30} max={5000} min={10}  tooltipVisible /> </div>
                                </FormItem>

                                <FormItem label={'Choose payment method'}>
                                    <Radio.Group onChange={this.onChange} value={this.state.value}>
                                        <Radio value={1}>Credit Card</Radio>
                                        <Radio value={2}>Bitcoin</Radio>
                                    </Radio.Group>
                                </FormItem>

                                <FormItem>
                                    <Button type="primary" htmlType="submit">
                                        BUY TOKENS
                                    </Button>
                                </FormItem>
                            </Form>

                        </Col>

                        <Col xl={8}>
                            <Card title='Status'>
                                <a><Icon type="check-circle" style={{ color: '#ffdc00' }}/> Not Verified</a>
                            </Card>
                        </Col>

                    </Row>
                </Card>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user:state.user
    }
}

KnowCustomerContainer.propTypes = {
}

const KnowYourCustomerContainerRegister = Form.create({ name: 'kyc_dashboard' })(KnowCustomerContainer)

export default connect(mapStateToProps, {
})(KnowYourCustomerContainerRegister)
