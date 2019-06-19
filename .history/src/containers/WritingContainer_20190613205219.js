import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate, Typography, message} from 'antd'
const { Meta } = Card;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const data = [
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">Content Writing</a>,
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">Simple Content Translation</a>,
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">Complex Content Translation</a>,
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">Blog Posts</a>,
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">Search in all</a>,
];

class WritingContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <Content>
        <Card>
            <Row>
                <Col span={24}> 
                <div style={{position:'absolute'}}>
                      <img style={{margin: 0 , width: '100%',height: 'auto'}} alt="dashboardImg" src='../../static/images/dash3.jpg'/>
                </div>
              </Col>
            </Row>
            </Card>
          <Sider style={{backgroundColor: '#FFF'}}>
              <Row>
                <Col span={24}>
                  <div style={{ backgroundColor: '#FFF', marginLeft: '5%' }}><h3 style={{ margin: '16px 0' }}>Writing & Translation</h3></div>
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
                    cover={<img alt="example" src= '../static/images/writing_1.jpg' />}
                    >
                    <Meta title="Writing Content"  />
                  </Card>
                </Col>
                <Col span={8} >
                  <Card
                    hoverable
                    style={{ marginTop: '5%', marginLeft: '5%',  width: '90%' , height: 'auto' }}
                    cover={<img alt="example" src='../static/images/writing_1.jpg' />}
                    >
                    <Meta title="Simple Content Translation"  />
                  </Card>
                </Col>
                <Col span={8} >
                  <Card
                    hoverable
                    style={{ marginTop: '5%',  width: '90%' , height: 'auto' }}
                    cover={<img alt="example" src='../static/images/writing_1.jpg' />}
                    >
                    <Meta title="Complex Content Translation"/>
                  </Card>
                </Col>
              </Row>
              <Row gutter={40}>
                <Col span={12}>
                  <Card
                    hoverable
                    style={{ marginBottom: '5%' , marginTop: '15%' ,marginLeft: '20%' , width: '58%' , height: 'auto' }}
                    cover={<img alt="example" src='../static/images/writing_1.jpg' />}
                    >
                    <Meta title="Blog Posts"/>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    hoverable
                    style={{ marginBottom: '5%' , marginTop: '15%' ,marginLeft: '20%' , width: '58%' , height: 'auto' }}
                    cover={<img alt="example" src='../static/images/writing_1.jpg' />}
                    >
                    <Meta title="Search in all"/>
                  </Card>
                </Col>
              </Row>
          </Content>
      </Content>
    )}}
    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    WritingContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(WritingContainer)
    