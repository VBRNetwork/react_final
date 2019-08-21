import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout



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
                 cover={<Avatar icon='user' />}
                 title={<div><strong><h3>Stefan Vanea</h3></strong></div>}
                >
                </Card>
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
