import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic } from 'antd';
import '../styles/dashboard.css'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class  DashboardContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }
  render () {
    return (
    <Card>
        <Row>
            Dashboard
        </Row>
        <div>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
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
                                <Card size="small" title="Small size card" extra={<a href="#">More</a>} >
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
                </Content>
            </Layout>
        </div>
    </Card>
    )}}
    
    function mapStateToProps (state) {
      return {
      }
    }
    
    DashboardContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(DashboardContainer)
    