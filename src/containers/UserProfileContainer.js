import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout
const profileList = [ {label: 'Stefan Vanea', value: 'name', icon: 'file-protect'}, {label: 'Edit Profile', value: 'editprofile', icon: 'file-protect'} ];



class UserProfileContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
        <div>
            <Row>
                <Col>
                <Card
                 hoverable
                 bordered={false}
                 extra={<Avatar icon='user' />}
                 cover={<img style={{width: 200}} src='../../static/images/profile_1.png' />}
                 title={<div><strong><h3>Stefan Vanea</h3></strong></div>}
                >
                </Card>
                </Col>
            </Row>

        <Row>
        <Col>
        <List dataSource={profileList}
         renderItem={(item) => (
          <List.Item><div>{item.label + item.value + item.icon}</div></List.Item>
        )}>
        </List>
        </Col>

        </Row>

        </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user:state.user
  }
}

UserProfileContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(UserProfileContainer)
