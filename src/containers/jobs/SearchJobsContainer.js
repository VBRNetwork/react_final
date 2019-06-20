import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row } from 'antd'
import { List, Avatar, Icon } from 'antd'
import { Layout, Menu, Breadcrumb } from 'antd'

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

const listData = []
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  })
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

class SearchJobsContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>

        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode='inline'
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu
                  key='sub1'
                  title={
                    <span>
                      <Icon type='user' />
                  subnav 1
                    </span>
                  }
                >
                  <Menu.Item key='1'>option1</Menu.Item>
                  <Menu.Item key='2'>option2</Menu.Item>
                  <Menu.Item key='3'>option3</Menu.Item>
                  <Menu.Item key='4'>option4</Menu.Item>
                </SubMenu>
                <SubMenu
                  key='sub2'
                  title={
                    <span>
                      <Icon type='laptop' />
                  subnav 2
                    </span>
                  }
                >
                  <Menu.Item key='5'>option5</Menu.Item>
                  <Menu.Item key='6'>option6</Menu.Item>
                  <Menu.Item key='7'>option7</Menu.Item>
                  <Menu.Item key='8'>option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key='sub3'
                  title={
                    <span>
                      <Icon type='notification' />
                  subnav 3
                    </span>
                  }
                >
                  <Menu.Item key='9'>option9</Menu.Item>
                  <Menu.Item key='10'>option10</Menu.Item>
                  <Menu.Item key='11'>option11</Menu.Item>
                  <Menu.Item key='12'>option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <List
                itemLayout='vertical'
                size='large'
                pagination={{
                  onChange: page => {
                    console.log(page)
                  },
                  pageSize: 3
                }}
                dataSource={listData}
                footer={
                  <div>
                    <b>ant design</b> footer part
                  </div>
                }
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
                        src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
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
