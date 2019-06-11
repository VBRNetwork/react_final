import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate, Typography, message} from 'antd'
const { Meta } = Card;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const data = [
  <a style={{color: '#37405E'}} href= "#">Content Writing</a>,
  <a style={{color: '#37405E'}} href= "#">Content Translation</a>,
  <a style={{color: '#37405E'}} href= "#">Business, Technical, or Legal Translation</a>,
  <a style={{color: '#37405E'}} href= "#">Blog Posts</a>,
  <a style={{color: '#37405E'}} href= "#">WebSite Content</a>,
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
            <Row>
              <Col span={8} >
                <Card
                  hoverable
                  style={{ width: '90%' , height: 'auto' }}
                  cover={<img alt="example" src= '../static/images/writing_1.jpg' />}
                  >
                  <Meta title="Writing Content"  />
                </Card>
              </Col>
              <Col span={8} >
                <Card
                  hoverable
                  style={{ width: '90%' , height: 'auto' }}
                  cover={<img alt="example" src='../static/images/writing_1.jpg' />}
                  >
                  <Meta title="Content Translation"  />
                </Card>
              </Col>
              <Col span={8} >
                <Card
                  hoverable
                  style={{ width: '90%' , height: 'auto' }}
                  cover={<img alt="example" src='../static/images/writing_1.jpg' />}
                  >
                  <Meta title="Business, Technical or Legal Translation"  />
                </Card>
              </Col>
              <Col span={12} >
                <Card
                  hoverable
                  style={{ width: '50%' , height: 'auto' }}
                  cover={<img alt="example" src='../static/images/writing_1.jpg' />}
                  >
                  <Meta title="Content Translation"  />
                </Card>
              </Col>
              <Col span={12} >
                <Card
                  hoverable
                  style={{ width: '50%' , height: 'auto' }}
                  cover={<img alt="example" src='../static/images/writing_1.jpg' />}
                  >
                  <Meta title="Business, Technical or Legal Translation"  />
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
    