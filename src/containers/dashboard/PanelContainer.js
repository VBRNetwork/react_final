import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']
import MenuDashboardContainer from './MenuDashboardContainer'
import DashboardLayout from '../../components/DashboardLayout'
class PanelContainer extends Component {
    static async getInitialProps ({ store, query }) {
    }

    render () {
        return (
            <div>
                <div>
                    <Row gutter={15}>
                        <Col xs={24} sm={7} md={7} lg={7} xl={7}>
                            <Card size='small' title='Wallet Preview' extra={<a href='#'>More</a>}>
                                <Statistic title='Account Balance (EUR)' value={112893} precision={2}/>
                                <Icon type='euro' style={{ marginTop: '20px', fontSize: '30px' }}/>
                                <Button className='post-job-button'
                                        style={{ marginTop: 16, float: 'right' }} type='primary'>
                                    Withdraw
                                </Button>
                            </Card>
                        </Col>
                        <Col xs={24} sm={17} md={17} lg={17} xl={17}>
                            <Card size='small' title='Completed Jobs Chart' extra={<a href='#'>More</a>}>
                                <Col span={8}>
                                    <Card>
                                        <Statistic
                                            title='In progress'
                                            value={1}
                                            valueStyle={{ color: '#ffdc00' }}
                                            prefix={<Icon type='arrow-up'/>}
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card>
                                        <Statistic
                                            title='Completed'
                                            value={3}
                                            valueStyle={{ color: '#3f8600' }}
                                            prefix={<Icon type="check-circle" />}
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card>
                                        <Statistic
                                            title='Closed'
                                            value={3}
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
                                <Col span={16}>
                                    <Card>
                                        <Row>
                                            <Col span={12}>
                                                <Timeline>
                                                    <Timeline.Item>Create a services site
                                                        2015-09-01</Timeline.Item>
                                                    <Timeline.Item>Solve initial network problems
                                                        2015-09-01</Timeline.Item>
                                                    <Timeline.Item>Technical testing
                                                        2015-09-01</Timeline.Item>
                                                    <Timeline.Item>Network problems being solved
                                                        2015-09-01</Timeline.Item>
                                                    <Timeline.Item color='red'>
                                                        <p>Solve initial network problems 1</p>
                                                        <p>Solve initial network problems 2</p>
                                                        <p>Solve initial network problems 3 2015-09-01</p>
                                                    </Timeline.Item>
                                                </Timeline>
                                            </Col>
                                            <Col span={12}>
                                                <Timeline>
                                                    <Timeline.Item color='green'>Create a services site
                                                        2015-09-01</Timeline.Item>
                                                    <Timeline.Item color='green'>Create a services site
                                                        2015-09-01</Timeline.Item>
                                                    <Timeline.Item>
                                                        <p>Technical testing 1</p>
                                                        <p>Technical testing 2</p>
                                                        <p>Technical testing 3 2015-09-01</p>
                                                    </Timeline.Item>
                                                </Timeline>
                                            </Col>
                                        </Row>
                                    </Card>

                                </Col>
                                <Col span={8}>
                                    <Card title='Stats'>
                                        <Row gutter={0}>
                                            <Col span={12}>
                                                <Statistic title='Reviews' value={1128}
                                                           prefix={<Icon type='like'/>}/>
                                            </Col>
                                            <Col span={12}>
                                                <Statistic title='Completed Jobs' value={93}
                                                           suffix='/ 100'/>
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
