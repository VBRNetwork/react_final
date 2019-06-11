import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate, Typography} from 'antd'
const { Meta } = Card;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class WritingContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
     <Layout>
        <Sider>
        
          
      <Row>
        <Col span={24}>
        <h3 style={{ margin: '16px 0' }}>Small Size</h3>
    <List
      size="small"
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
    </Col>
    <Col span={24}>
    <List
      size="small"
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
    </Col>
    </Row>
    
        
        </Sider>
        <Content>
          <Row>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Row>
          </Content>
      </Layout>
    )}}
    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    WritingContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(WritingContainer)
    