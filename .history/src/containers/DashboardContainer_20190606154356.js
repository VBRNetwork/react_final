import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown } from 'antd';
import '../styles/dashboard.css'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

class  DashboardContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  

  componentDidMount () {
  }

  
  render () {
    return (
    <Content>
        <Card size="small">
            <Row>
            <Card
    hoverable
    style={{position: 'relative'}}
    cover={<img alt="example" src='../../static/images/dash.jpg' />}
  >
  </Card>
                <Col span={8} >
                    <div style={{position: 'absolute'}}><h2>Dashboard</h2></div>
                </Col>
                <Col  span={8} offset={8}>
                    <Avatar size="large" icon="user" style={{ position: 'absolute', float:'right', backgroundColor: '#2ec3ab' }} /> 
                </Col>
                <Col  span={6} offset={18}>
                    <Dropdown overlay={menu} >
                        <a  style={{ position: 'absolute', float:'right', color: '#001529' }} className="ant-dropdown-link" href="#">
                            <strong>Stefan</strong> <Icon type="down" />
                        </a>
                    </Dropdown> 
                </Col>
            </Row>
        </Card>
        <div>
            <Layout style={{ background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                        theme="dark">

                        <SubMenu
                            key="sub1"
                            title={<span>
                                <Icon type="user" />Profile 
                            </span>}>
                            <Menu.Item style={{color: '#2ec3ab'}}key="1">Edit Profile</Menu.Item>
                            <Menu.Item style={{color: '#2ec3ab'}}key="2">Security</Menu.Item>
                            <Menu.Item style={{color: '#2ec3ab'}}key="3">Settings</Menu.Item>
                            <Menu.Item style={{color: '#2ec3ab'}}key="4">View Stats</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="tool" />
                                    VBR Tools
                                </span>}>
                            <Menu.Item style={{color: '#2ec3ab'}}key="5">Marketplace</Menu.Item>
                            <Menu.Item style={{color: '#2ec3ab'}}key="6">Exchange Market</Menu.Item>
                            <Menu.Item style={{color: '#2ec3ab'}}key="7">Chat Preferences</Menu.Item>
                            <Menu.Item style={{color: '#2ec3ab'}}key="8">Smart Contracts</Menu.Item>
                        </SubMenu>
                        <SubMenu
                        key="sub3"
                        title={
                            <span>
                                <Icon type="wallet" />
                                Wallet
                            </span> }>
                            <Menu.Item style={{color: '#2ec3ab'}}key="9">Balance</Menu.Item>
                            <Menu.Item style={{color: '#2ec3ab'}}key="10">Quick Top UP</Menu.Item>
                            <Menu.Item style={{color: '#2ec3ab'}}key="11">Send/Request Money</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content>
                    <div style={{padding:'5px'}}>
                        <Row gutter={15}>
                            <Col span={7}>
                                <Card size="small" title="Wallet Preview" extra={<a href="#">More</a>} >
                                    <Statistic title="Account Balance (EUR)" value={112893} precision={2} />
                                    <Icon type="euro" style={{marginTop: '20px',fontSize: '30px'}} />
                                    <Button className="post-job-button" style={{ marginTop: 16, float: 'right' }} type="primary">
                                        Withdraw
                                    </Button>
                                </Card>
                            </Col>
                            <Col span={17}>
                                <Card size="small" title="Completed Jobs Chart" extra={<a href="#">More</a>} >
                                    <Col span={12}>
                                        <Card>
                                        <Statistic
                                            title="Active"
                                            value={11.28}
                                            precision={2}
                                            valueStyle={{ color: '#3f8600' }}
                                            prefix={<Icon type="arrow-up" />}
                                            suffix="%"
                                        />
                                        </Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card>
                                        <Statistic
                                            title="Idle"
                                            value={9.3}
                                            precision={2}
                                            valueStyle={{ color: '#cf1322' }}
                                            prefix={<Icon type="arrow-down" />}
                                            suffix="%"
                                        />
                                        </Card>
                                    </Col>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <br />
                    <div style={{padding:'5px'}}>
                        <Row gutter={15}>
                            <Col span={17}>
                            <Card size="small" title="Your activity" extra={<a href="#">More</a>} >
                                    <Col span={24}>
                                        <Card>
                                            <Row>
                                                <Col span={12}>
                                                    <Timeline>
                                                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                                                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                                                        <Timeline.Item color="red">
                                                            <p>Solve initial network problems 1</p>
                                                            <p>Solve initial network problems 2</p>
                                                            <p>Solve initial network problems 3 2015-09-01</p>
                                                        </Timeline.Item>
                                                    </Timeline>
                                                </Col>
                                                <Col span={12}>
                                                    <Timeline>
                                                        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                                        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
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
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        </div>
        </Content>
    )}}
    
    function mapStateToProps (state) {
      return {
      }
    }
    
    DashboardContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(DashboardContainer)
    