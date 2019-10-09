import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate } from 'antd'
import '../styles/dashboard.css'
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

const menu = (
  <Menu>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='#'>
        Change Avatar
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='#'>
        Payments History
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='#'>
        Log Out
      </a>
    </Menu.Item>
  </Menu>
)

class DashboardContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <Content>
          <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                  <div style={{ marginTop: '5px',marginLeft:'10px' ,marginBottom:'5px'}}>

                      <div style={{border:'1px solid rgb(232, 227, 227)',margin:'10px',padding:'5px'}}>
                          <Row>
                              <Col span={12}>
                                  <div>
                                      <a href='#'><h2 style={{ marginLeft: '2%' }}>Account Dashboard</h2></a>
                                  </div>
                              </Col>
                              <Col lg={{span: 10,offset:2 }}>
                                  <Dropdown overlay={menu}>
                                      <div style={{ float: 'right', color: '#FFF', marginRight: '1%' }}
                                           className='ant-dropdown-link'>
                                          <strong style={{color:'#000',margin: '10px',padding: '5px'}}>{this.props.user.name}</strong> <Icon type='down'/>
                                          <Avatar size='large' icon='user' style={{
                                              backgroundColor: '#2ec3ab',
                                              cursor: 'pointer',
                                          }}/>

                                      </div>
                                  </Dropdown>
                              </Col>
                          </Row>
                      </div>
                      <Layout style={{ background: '#fff' }}>
                          <Sider breakpoint='sm'
                                 collapsedWidth='0'
                                 onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
                                 style={{ minHeight: '100vh', zIndex: 99 }}
                                 width={200} style={{ background: '#fff', marginLeft: '1%' }}>
                              <Menu
                                  mode='inline'
                                  defaultSelectedKeys={['1']}
                                  defaultOpenKeys={['sub1']}
                                  style={{ height: '100%' }}
                                  theme='dark'>

                                  <SubMenu
                                      key='sub1'
                                      title={<span>
                    <Icon type='user'/>Profile
                  </span>}>
                                      <Menu.Item style={{ color: '#2ec3ab' }} key='1'>Edit Profile</Menu.Item>
                                      <Menu.Item style={{ color: '#2ec3ab' }} key='2'>Security</Menu.Item>
                                      <Menu.Item style={{ color: '#2ec3ab' }} key='3'>Settings</Menu.Item>
                                      <Menu.Item style={{ color: '#2ec3ab' }} key='4'>View Stats</Menu.Item>
                                  </SubMenu>
                                  <SubMenu
                                      key='sub2'
                                      title={
                                          <span>
                      <Icon type='tool'/>
                                    VBR Tools
                    </span>}>
                                      <Menu.Item style={{ color: '#2ec3ab' }} key='5'>Marketplace</Menu.Item>
                                      <Menu.Item style={{ color: '#2ec3ab' }} key='6'>Exchange Market</Menu.Item>
                                      <Menu.Item style={{ color: '#2ec3ab' }} key='7'>Chat Preferences</Menu.Item>
                                      <Menu.Item style={{ color: '#2ec3ab' }} key='8'>Smart Contracts</Menu.Item>
                                  </SubMenu>
                                  <SubMenu
                                      key='sub3'
                                      title={
                                          <span>
                      <Icon type='wallet'/>
                                Wallet
                    </span>}>
                                      <Menu.Item style={{ color: '#2ec3ab' }} key='9'>Balance</Menu.Item>
                                      <Menu.Item style={{ color: '#2ec3ab' }} key='10'>Quick Top UP</Menu.Item>
                                      <Menu.Item style={{ color: '#2ec3ab' }} key='11'>Send/Request Money</Menu.Item>
                                  </SubMenu>
                              </Menu>
                          </Sider>
                          <Content style={{ marginLeft: '1%', marginRight: '1%' }}>
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
                          </Content>
                      </Layout>
                  </div>
              </Col>
          </Row>
      </Content>
    )
  }
}

function mapStateToProps (state) {
  return {
    user:state.user
  }
}

DashboardContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(DashboardContainer)
