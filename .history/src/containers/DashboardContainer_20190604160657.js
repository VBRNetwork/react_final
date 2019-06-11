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

        
      <div>
          <div>
              <Avatar style={{ backgroundColor: '#87d068', float: 'right', marginRight: '15px', marginTop: '10px' }} icon="user" />
          </div>

         
          
            <Row>
                Dashboard
            </Row>

            <div style={{ background: '#ECECEC', float: 'right', marginRight: '75px' }}>
    <Row gutter={16}>
      <Col span={8}>
      <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <Statistic title="Account Balance (EUR)" value={112893} precision={2} />
          
     
      <Button style={{ marginTop: 16 , backgroundColor:'#2ec3ab', borderBlockColor: '#2ec3ab' }} type="primary">
        Recharge
      </Button>
    </Card>
      </Col>
      <Col span={8}>
      <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
      </Col>
      <Col span={8}>
      <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
      </Col>
    </Row>
  </div>

<div>

            <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            theme="dark"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  Profile 
                </span>
              }
            >
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
                </span>
              }
            >
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
                </span>
              }
            >
              <Menu.Item style={{color: '#2ec3ab'}}key="9">Balance</Menu.Item>
              <Menu.Item style={{color: '#2ec3ab'}}key="10">Quick Top UP</Menu.Item>
              <Menu.Item style={{color: '#2ec3ab'}}key="11">Send/Request Money</Menu.Item>
            </SubMenu>
            
          </Menu>
          
          
        </Sider>
        
      </Layout>
      </div>
                <div>
                    <Row>
                        <Card>
                            <Progress 
                                strokeColor={{
                                    from: '#2ec3ab',
                                    to: '#000C47',
                                }}
                                percent={99.9}
                                status="active"
                            />
                        </Card>

                    </Row>


                </div>

      </div>
    )}}
    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    DashboardContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(DashboardContainer)
    