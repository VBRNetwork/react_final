import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate} from 'antd'
const { Meta } = Card;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class WritingContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <div>
      <Row>
        <h3 style={{ marginBottom: 16 }}>Default Size</h3>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    <h3 style={{ margin: '16px 0' }}>Small Size</h3>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
    <h3 style={{ margin: '16px 0' }}>Large Size</h3>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
    </Row>
        </div>
          <Row>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Row>
      </div>
    )}}
    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    WritingContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(WritingContainer)
    