import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Col, Form, Icon, Row, Radio } from 'antd'
import Link from 'next/link'
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const FormItem = Form.Item
import { Slider, Typography, Alert } from 'antd';
const { Text } = Typography;

class BuyTokensContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            balance: 10,
            payment_method:1,
        };

        this.changeBalance = this.changeBalance.bind(this)
        this.choosePaymentMethod = this.choosePaymentMethod.bind(this)

    }

    changeBalance(balance){
        this.setState({
            balance:balance
        })
    }
    choosePaymentMethod(method){
        this.setState({
            payment_method:method.target.value
        })
    }


    render () {

        const { getFieldDecorator } = this.props.form

        return (
            <div>
                <Card title='Buy Veelancing Tokens'>
                    <Row>
                        <Col xl={16}>
                            <Form inline="true" onSubmit={this.handleSubmit}>
                                <FormItem label={'How many tokens do you buy? (VEE Tokens)'}>
                                    <div style={{width:'300px'}}> <Slider defaultValue={this.state.balance} max={10000} onChange={this.changeBalance} min={10}  tooltipVisible /> </div>
                                </FormItem>

                                <FormItem label={'Choose payment method'}>
                                    <Radio.Group onChange={this.choosePaymentMethod} value={this.state.payment_method}>
                                        <Radio value={1} checked><img src={'static/images/credit_cards.png'} alt=""/></Radio>
                                        <Radio value={2}><img src="https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225080_960_720.png" style={{height:44}} alt=""/></Radio>
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
                            <Card title='Calculator'>
                                ETH: <Icon type="check-circle" style={{ color: '#ffdc00' }}/> {this.state.balance}
                                <br/>
                                VEE : <Icon type="check-circle" style={{ color: '#ffdc00' }}/> {(this.state.balance*(3/10)).toFixed(2)}
                                <br/>
                                USD : <Icon type="check-circle" style={{ color: '#ffdc00' }}/> {(this.state.balance*(3/10)).toFixed(2)}
                            </Card>
                            <Card title='Wallet'>
                                Address: <Icon type="check-circle" style={{ color: '#ffdc00' }}/> {this.state.balance}
                                <br/>
                                Balance : <Icon type="check-circle" style={{ color: '#ffdc00' }}/> {(this.state.balance*(3/10)).toFixed(2)} VEE
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

BuyTokensContainer.propTypes = {
}

const BuyTokensFormContainer = Form.create({ name: 'kyc_dashboard' })(BuyTokensContainer)

export default connect(mapStateToProps, {
})(BuyTokensFormContainer)
