import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate, Typography, message} from 'antd'
const { Meta } = Card;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const data = [
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">Business Plan for Start-Ups</a>,
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">Financial Forecast</a>,
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">Financial Advise</a>,
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">Project Management</a>,
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">Search in all</a>,
];

class ConsultanceContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <Layout>
          <Sider style={{backgroundColor: '#FFF'}}>
              <Row>
                <Col span={24}>
                  <div style={{ backgroundColor: '#FFF', marginLeft: '5%' }}><h3 style={{ margin: '16px 0' }}>Business Consltancy</h3></div>
                  <div>
                    <List
                      style={{backgroundColor: '#FFF'}}
                      size="small"
                      dataSource={data}
                      renderItem={item => <List.Item>{item}</List.Item>}
                    />
                  </div>
              </Col>
            </Row>
          </Sider>
          <Content>
              <Row gutter={40}>
                <Col span={8} >
                  <Card
                    hoverable
                    style={{ marginTop: '5%', marginLeft: '10%' , width: '90%' , height: 'auto' }}
                    cover={<img alt="example" src= '../static/images/business_1.jpg' />}
                    >
                    <Meta title="Business Plan for Star-Ups"  />
                  </Card>
                </Col>
                <Col span={8} >
                  <Card
                    hoverable
                    style={{ marginTop: '5%', marginLeft: '5%',  width: '90%' , height: 'auto' }}
                    cover={<img alt="example" src='../static/images/business_1.jpg' />}
                    >
                    <Meta title="Financial Forecst"  />
                  </Card>
                </Col>
                <Col span={8} >
                  <Card
                    hoverable
                    style={{ marginTop: '5%',  width: '90%' , height: 'auto' }}
                    cover={<img alt="example" src='../static/images/business_1.jpg' />}
                    >
                    <Meta title="Financial Advice"/>
                  </Card>
                </Col>
              </Row>
              <Row gutter={40}>
                <Col span={12}>
                  <Card
                    hoverable
                    style={{ marginBottom: '5%' , marginTop: '15%' ,marginLeft: '20%' , width: '58%' , height: 'auto' }}
                    cover={<img alt="example" src='../static/images/business_1.jpg' />}
                    >
                    <Meta title="Project Management"/>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    hoverable
                    style={{ marginBottom: '5%' , marginTop: '15%' ,marginLeft: '20%' , width: '58%' , height: 'auto' }}
                    cover={<img alt="example" src='../static/images/business_1.jpg' />}
                    >
                    <Meta title="Search in all"/>
                  </Card>
                </Col>
              </Row>
          </Content>
      </Layout>
    )}}
    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    ConsultanceContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(ConsultanceContainer)
    