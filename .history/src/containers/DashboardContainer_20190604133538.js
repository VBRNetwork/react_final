import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List } from 'antd';
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
              <Avatar style={{ backgroundColor: '#87d068', float: 'right', marginRight: '30px' }} icon="user" />
          </div>

         
          
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
            theme="dark"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav 1
                </span>
              }
            >
              <Menu.Item style={{color: '#2ec3ab'}}key="1">option1</Menu.Item>
              <Menu.Item style={{color: '#2ec3ab'}}key="2">option2</Menu.Item>
              <Menu.Item style={{color: '#2ec3ab'}}key="3">option3</Menu.Item>
              <Menu.Item style={{color: '#2ec3ab'}}key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  subnav 2
                </span>
              }
            >
              <Menu.Item style={{color: '#2ec3ab'}}key="5">option5</Menu.Item>
              <Menu.Item style={{color: '#2ec3ab'}}key="6">option6</Menu.Item>
              <Menu.Item style={{color: '#2ec3ab'}}key="7">option7</Menu.Item>
              <Menu.Item style={{color: '#2ec3ab'}}key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  subnav 3
                </span>
              }
            >
              <Menu.Item style={{color: '#2ec3ab'}}key="9">option9</Menu.Item>
              <Menu.Item style={{color: '#2ec3ab'}}key="10">option10</Menu.Item>
              <Menu.Item style={{color: '#2ec3ab'}}key="11">option11</Menu.Item>
              <Menu.Item style={{color: '#2ec3ab'}}key="12">option12</Menu.Item>
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
                                    from: '#108ee9',
                                    to: '#87d068',
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
    