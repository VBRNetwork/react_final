import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { List, Avatar, Icon, Card, Layout, Menu, Row, Col, Checkbox } from 'antd'

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout


const listData = []
 {
  listData.push({
    href: '/',
    title: `Python Programmer Needed`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Pyhon developer for e-commerce app',
    content:
      'We need a senior python developer to help us with an e-commerce app. All details will be shared upon chat discussion.'
  })
}

const listData1 = []
 {
  listData1.push({
    href: '/',
    title: `Looking for a Web Designer`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Web designer for a traveling website',
    content:
      'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible'
  })
}

const listData2 = []
 {
  listData2.push({
    href: '/',
    title: `SEO Specialist Needed`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'SEO and Adwords for Rent a Car website',
    content:
      'We looking for a SEO specialist who can help  us reach first positions on google, for our rent a car site.'
  })
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

class SearchJobsContainer extends Component {

  constructor(props){
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
  }

  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  
  render () {
    return (
      <div>

        <Content style={{ padding: '0 50px' }}>
          <Card style={{background: 'rgba(0, 156, 107, 0.24)'}}>
            <Row>
              <Col span={12}>
            <div> <Icon style={{fontSize: '40px'}} type='shop' /></div>
            </Col>
            <Col span={12} pull={10}>
            <div style={{color: 'rgb(14, 1, 82)'}}>
              <strong>
                <h3>
                  Welcome to VBR Network Marketplace
                </h3>
              </strong>
              </div>
              </Col>
              </Row>
            </Card>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
            <div><strong>Filters</strong></div>
              <Menu
                mode='inline'
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['filter1']}
                style={{ height: '100%' }}
              >
                <SubMenu
                  key='filter1'
                  title={
                    <span>
                      <Icon style={{fontSize: '20px'}} type='appstore' />
                  Categories
                    </span>
                  }
                >
                  <Menu.Item key='1'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Writing </Menu.Item>
                  <Menu.Item key='2'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Marketing</Menu.Item>
                  <Menu.Item key='3'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Design</Menu.Item>
                  <Menu.Item key='4'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Consultancy</Menu.Item>
                  <Menu.Item key='5'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Developers</Menu.Item>
                </SubMenu>
                <SubMenu
                  key='filter2'
                  title={
                    <span>
                      <Icon style={{fontSize: '20px'}} type='cluster' />
                  Subcategories
                    </span>
                  }
                >
                  <Menu.Item key='5'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Content Writing</Menu.Item>
                  <Menu.Item key='7'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Social Media</Menu.Item>
                  <Menu.Item key='6'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Translation</Menu.Item>
                  <Menu.Item key='8'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>SEO</Menu.Item>
                  <Menu.Item key='9'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>UI/UX Design</Menu.Item>
                  <Menu.Item key='10'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Graphic Design</Menu.Item>
                  <Menu.Item key='11'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Business Plan</Menu.Item>
                  <Menu.Item key='12'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Forecast</Menu.Item>
                  <Menu.Item key='13'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Financial Advise</Menu.Item>
                  <Menu.Item key='14'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Web Developers</Menu.Item>
                  <Menu.Item key='15'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Mobile Devs</Menu.Item>
                  <Menu.Item key='16'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Blockchain</Menu.Item>
                </SubMenu>
                <SubMenu
                  key='filter3'
                  title={
                    <span>
                      <Icon style={{fontSize: '20px'}} type='euro' />
                  Pricing
                    </span>
                  }
                >
                  <Menu.Item key='17'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>>$30/hour</Menu.Item>
                  <Menu.Item key='18'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>$30 - $50/hour</Menu.Item>
                  <Menu.Item key='19'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>$50 - $100/hour</Menu.Item>
                  <Menu.Item key='20'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>&lt; $100/hour</Menu.Item>
                </SubMenu>
                <SubMenu
                  key='filter4'
                  title={
                    <span>
                      <Icon style={{fontSize: '20px'}} type='star' />
                  Rating
                    </span>
                  }
                >
                  <Menu.Item key='21'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>3 Stars</Menu.Item>
                  <Menu.Item key='22'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>4 Stars</Menu.Item>
                  <Menu.Item key='23'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>5 Stars</Menu.Item>
                  <Menu.Item key='24'><Checkbox style={{float: 'right'}} onChange={this.onChange}/>Top Rated</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <List
                itemLayout='vertical'
                size='large'
                dataSource={listData}
               
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText type='star-o' text='156' />,
                      <IconText type='like-o' text='156' />,
                      <IconText type='message' text='2' />
                    ]}
                    extra={
                      <img
                        width={272}
                        alt='logo'
                        src='../../static/images/search_prg.png'
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
                
              />
              <List
                itemLayout='vertical'
                size='large'
                dataSource={listData1}
                
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText type='star-o' text='156' />,
                      <IconText type='like-o' text='156' />,
                      <IconText type='message' text='2' />
                    ]}
                    extra={
                      <img
                        width={272}
                        alt='logo'
                        src='../../static/images/search_dsg.png'
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
                
              />
              <List
                itemLayout='vertical'
                size='large'
                pagination={{
                  onChange: page => {
                    console.log(page)
                  },
                  pageSize: 3
                }}
                dataSource={listData2}
                
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText type='star-o' text='156' />,
                      <IconText type='like-o' text='156' />,
                      <IconText type='message' text='2' />
                    ]}
                    extra={
                      <img
                        width={272}
                        alt='logo'
                        src='../../static/images/search_seo.png'
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
                
              />

            </Content>
          </Layout>
        </Content>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {

  }
}

SearchJobsContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(SearchJobsContainer)
