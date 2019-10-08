import React, { Component, Fragment } from 'react'
import { List, Avatar, Icon, Card, Layout, Menu, Row, Col, Checkbox, Breadcrumb } from 'antd'
import Link from 'next/link'
const { Header, Content, Footer, Sider } = Layout
import { connect } from 'react-redux'

class PostJobContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                <Content style={{marginLeft:'1rem'}}>
                    Post Job Container
                </Content>
            </Col>
        </Row>
    )
  }
}

function mapStateToProps (state) {
  return {

  }
}

PostJobContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(PostJobContainer)
