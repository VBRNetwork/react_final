import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate, Typography, message} from 'antd'
const { Meta } = Card;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const data = [
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">Content Writing</a>,
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">Content Translation</a>,
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">Business, Technical, or Legal Translation</a>,
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">Blog Posts</a>,
  <a style={{marginLeft: '5%' , color: '#37405E'}} href= "#">WebSite Content</a>,
];

class WritingContainer extends Component {
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
                  <div style={{ backgroundColor: '#FFF' }}><h3 style={{ margin: '16px 0' }}>Small Size</h3></div>
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
                    style={{ marginTop: '15%' ,marginLeft: '20%' , width: '58%' , height: 'auto' }}
                    cover={<img alt="example" src='../static/images/writing_1.jpg' />}
                    >
                    <Meta title="Blog Posts"/>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    hoverable
                    style={{ marginTop: '15%' ,marginLeft: '20%' , width: '58%' , height: 'auto' }}
                    cover={<img alt="example" src='../static/images/writing_1.jpg' />}
                    >
                    <Meta title="WebSite Content"/>
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
    
    WritingContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(WritingContainer)
    