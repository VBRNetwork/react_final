import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Button, Row, Card, Col, Statistic, Timeline, Menu } from 'antd'
import Link from 'next/link'

class PanelContainer extends Component {
    static async getInitialProps ({ store, query }) {
    }

    render () {
        return (
            <div>
                <div>
                    <Row gutter={15}>
                        <Col xs={24} sm={7} md={7} lg={7} xl={12}>
                            <Card size='small' title='KYC'>
                                <Row>
                                    <Col xl={18}>
                                        "Know Your Customer"
                                    </Col>
                                    <Col xl={6}>
                                        <Link href={'/dashboard?slug=know-your-customer'} as={'/dashboard/know-your-customer'}>
                                            <a><Icon type="check-circle" style={{ color: '#ffdc00' }}/> Not Verified</a>
                                        </Link>
                                    </Col>
                                </Row>
                            </Card>
                            <Card size='small' title='Wallet'>
                                <Row>
                                    <Col xl={18}>
                                        Buy Tokens
                                    </Col>
                                    <Col xl={6}>
                                        0 VEE
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={24} sm={17} md={17} lg={17} xl={12}>
                            <Card size='small' title='Completed Jobs Chart' extra={<a href='#'>More</a>}>
                                <Col span={8}>
                                    <Card>
                                        <Statistic
                                            title='In progress'
                                            value={0}
                                            valueStyle={{ color: '#ffdc00' }}
                                            prefix={<Icon type='arrow-up'/>}
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card>
                                        <Statistic
                                            title='Completed'
                                            value={0}
                                            valueStyle={{ color: '#3f8600' }}
                                            prefix={<Icon type="check-circle" />}
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card>
                                        <Statistic
                                            title='Closed'
                                            value={0}
                                            valueStyle={{ color: '#b82300' }}
                                            prefix={<Icon type="check-circle" />}
                                        />
                                    </Card>
                                </Col>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <br/>
                <div style={{ padding: '5px' }}>
                    <Row gutter={15}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Card size='small' title='Your activity'>
                                <Col span={8}>
                                    <Card>
                                        <Row gutter={0}>
                                            <Col span={12}>
                                                <Statistic title='Reviews' value={0}
                                                           prefix={<Icon type='like'/>}/>
                                            </Col>
                                            <Col span={12}>
                                                <Statistic title='Completed Jobs' value={0}
                                                           suffix='/ 100'/>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col span={16}>
                                    <Card>
                                        <Row>
                                            <Col span={12}>
                                                <Timeline>
                                                    <Timeline.Item>No activity.</Timeline.Item>
                                                </Timeline>
                                            </Col>
                                            <Col span={12}>
                                            </Col>
                                        </Row>
                                    </Card>

                                </Col>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user:state.user
    }
}

PanelContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(PanelContainer)
