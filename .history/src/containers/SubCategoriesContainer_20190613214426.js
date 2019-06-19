import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate, Typography, message} from 'antd'
const { Meta } = Card;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const data = [
  'Business Plan for Start-Ups',
  'Financial Forecast',
  'Financial Advice',
  'Project Management',
  'Search in all',
];

class  SubCategoriesContainer extends Component {
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
                      renderItem={item => 
                        <List.Item>
                           <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">{item}</a>
                        </List.Item>
                      }
                    />
                  </div>
              </Col>
            </Row>
          </Sider>
          <Content>
              <Row gutter={20}>
                <Col span={8} >
                  <Card
                    hoverable
                    style={{ marginTop: '5%', marginLeft: '10%' , width: '90%' , height: 'auto' }}
                    cover={<img alt="example" src= '../static/images/developers_1.jpg' />}
                    >
                    <Meta title="Business Plan for Star-Ups"  />
                  </Card>
                </Col>
                <Col span={8} >
                  <Card
                    hoverable
                    style={{ marginTop: '5%', marginLeft: '5%',  width: '90%' , height: 'auto' }}
                    cover={<img alt="example" src='../static/images/developers_1.jpg' />}
                    >
                    <Meta title="Financial Forecst"  />
                  </Card>
                </Col>
                <Col span={8} >
                  <Card
                    hoverable
                    style={{ marginTop: '5%',  width: '90%' , height: 'auto' }}
                    cover={<img alt="example" src='../static/images/developers_1.jpg' />}
                    >
                    <Meta title="Financial Advice"/>
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
    
    SubCategoriesContainer.propTypes = {
    }
    
    export default SubCategoriesContainer