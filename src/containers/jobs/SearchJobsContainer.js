import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Avatar, Icon, Card, Layout, Menu, Row, Col, Checkbox, Breadcrumb } from 'antd'
import Link from 'next/link'

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

const listData = [{
    href: '/users',
    title: `Looking for a Web Designer (Req: React,Javascript,Node)`,
    slug: `looking-for-a-web-developer`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Blockchain Expert',
    content:
        'We are developing a freelancers blockchain platform, and need a web programmer with experience to help us make it as user friendly as possible',
    user: {
        name: 'Stefan Vanea',
        username: 'stefan_vanea',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    }
},{
    href: '/users',
    title: `Looking for a Web Designer`,
    slug: `looking-for-a-web-designer`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Python Programmer',
    content:
        'We are developing a freelancers blockchain platform, and need a web programmer with experience to help us make it as user friendly as possible',
    user: {
        name: 'Fedot Serghei',
        username: 'fedot_serghei',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    }
},{
    href: '/users',
    title: `Looking for a test team for a large project!`,
    slug: `looking-for-a-large-project`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Web designer for a traveling website',
    content:
        'We are developing a freelancers blockchain platform, and need a web programmer with experience to help us make it as user friendly as possible',
    user: {
        name: 'CEO of Samsung',
        username: 'ceo_samsung',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    }
},{
    href: '/users',
    title: `Looking for a Web Designer`,
    slug: `looking-for-a-large-webdesigner`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Devops Vbrinc Platform',
    content:
        'We are developing a freelancers blockchain platform, and need a web programmer with experience to help us make it as user friendly as possible',
    user: {
        name: 'Barborica Devops',
        username: 'barborica_devops',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    }
},{
    href: '/users',
    title: `Python Programmer Needed`,
    slug: `need-for-a-programmer`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Pyhon developer for e-commerce app',
    content:
        'We need a senior python developer to help us with an e-commerce app. All details will be shared upon chat discussion.',
    user: {
        name: 'User Test',
        username: 'user_test',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    }
},{
    href: '/users',
    title: `SEO Specialist Needed`,
    slug: `seo-specialist-needed`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'SEO and Adwords for Rent a Car website',
    content:
        'We looking for a SEO specialist who can help  us reach first positions on google, for our rent a car site.',
    user: {
        name: 'User Test',
        username: 'user_test',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    }
}]

const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }}/>
        {text}
  </span>
)

class SearchJobsContainer extends Component {

    constructor (props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount () {
    }

    onChange (e) {
        console.log(`checked = ${e.target.checked}`)
    }

    render () {
        return (
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                    <Content style={{marginLeft:'1rem'}}>
                        <Card style={{ background: 'rgba(0, 156, 107, 0.24)',marginTop:'5px' }}>
                            <Row>
                                <Col span={3}>
                                    <div><Icon style={{ fontSize: '40px' }} type='shop'/></div>
                                </Col>
                                <Col span={21}>
                                    <div style={{ color: 'rgb(14, 1, 82)' }}>
                                        <strong>
                                            <h3>
                                                Welcome to VBR Network Marketplace
                                            </h3>
                                            <h4>
                                                We are developing a freelancing blockchain platform, and need a web programmer with experience to help.
                                            </h4>
                                        </strong>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Row>
                                <Col  xs={24} sm={24} md={{span:7}} lg={{span:5}} xl={{span:5}} xxl={{ span: 5}}>
                                        <div><strong>Filters</strong></div>
                                        <Menu
                                            mode='inline'
                                            defaultSelectedKeys={['1']}
                                            defaultOpenKeys={['filter1']}
                                            style={{ height: '100%' }}>

                                            <SubMenu
                                                key='filter1'
                                                title={
                                                    <span>
                                              <Icon style={{ fontSize: '20px' }} type='appstore'/>
                                                Categories
                                            </span>
                                                }>

                                                <Menu.Item key='1'><Checkbox style={{ float: 'right' }}
                                                                             onChange={this.onChange}/>Writing </Menu.Item>
                                                <Menu.Item key='2'><Checkbox style={{ float: 'right' }}
                                                                             onChange={this.onChange}/>Marketing</Menu.Item>
                                                <Menu.Item key='3'><Checkbox style={{ float: 'right' }}
                                                                             onChange={this.onChange}/>Design</Menu.Item>
                                                <Menu.Item key='4'><Checkbox style={{ float: 'right' }}
                                                                             onChange={this.onChange}/>Consultancy</Menu.Item>
                                                <Menu.Item key='5'><Checkbox style={{ float: 'right' }}
                                                                             onChange={this.onChange}/>Developers</Menu.Item>
                                            </SubMenu>
                                            <SubMenu
                                                key='filter2'
                                                title={
                                                    <span>
                                              <Icon style={{ fontSize: '20px' }} type='cluster'/>
                                                Subcategories
                                            </span>
                                                }>
                                                <Menu.Item key='5'><Checkbox style={{ float: 'right' }}
                                                                             onChange={this.onChange}/>Content
                                                    Writing</Menu.Item>
                                                <Menu.Item key='7'><Checkbox style={{ float: 'right' }}
                                                                             onChange={this.onChange}/>Social Media</Menu.Item>
                                                <Menu.Item key='6'><Checkbox style={{ float: 'right' }}
                                                                             onChange={this.onChange}/>Translation</Menu.Item>
                                                <Menu.Item key='8'><Checkbox style={{ float: 'right' }}
                                                                             onChange={this.onChange}/>SEO</Menu.Item>
                                                <Menu.Item key='9'><Checkbox style={{ float: 'right' }}
                                                                             onChange={this.onChange}/>UI/UX Design</Menu.Item>
                                                <Menu.Item key='10'><Checkbox style={{ float: 'right' }}
                                                                              onChange={this.onChange}/>Graphic
                                                    Design</Menu.Item>
                                                <Menu.Item key='11'><Checkbox style={{ float: 'right' }}
                                                                              onChange={this.onChange}/>Business
                                                    Plan</Menu.Item>
                                                <Menu.Item key='12'><Checkbox style={{ float: 'right' }}
                                                                              onChange={this.onChange}/>Forecast</Menu.Item>
                                                <Menu.Item key='13'><Checkbox style={{ float: 'right' }}
                                                                              onChange={this.onChange}/>Financial
                                                    Advise</Menu.Item>
                                                <Menu.Item key='14'><Checkbox style={{ float: 'right' }}
                                                                              onChange={this.onChange}/>Web
                                                    Developers</Menu.Item>
                                                <Menu.Item key='15'><Checkbox style={{ float: 'right' }}
                                                                              onChange={this.onChange}/>Mobile Devs</Menu.Item>
                                                <Menu.Item key='16'><Checkbox style={{ float: 'right' }}
                                                                              onChange={this.onChange}/>Blockchain</Menu.Item>
                                            </SubMenu>
                                            <SubMenu
                                                key='filter3'
                                                title={
                                                    <span>
                                              <Icon style={{ fontSize: '20px' }} type='euro'/>
                                                Pricing
                                            </span>
                                                }
                                            >
                                                <Menu.Item key='17'><Checkbox style={{ float: 'right' }}
                                                                              onChange={this.onChange}/>>$30/hour</Menu.Item>
                                                <Menu.Item key='18'><Checkbox style={{ float: 'right' }}
                                                                              onChange={this.onChange}/>$30 -
                                                    $50/hour</Menu.Item>
                                                <Menu.Item key='19'><Checkbox style={{ float: 'right' }}
                                                                              onChange={this.onChange}/>$50 -
                                                    $100/hour</Menu.Item>
                                                <Menu.Item key='20'><Checkbox style={{ float: 'right' }}
                                                                              onChange={this.onChange}/>&lt; $100/hour</Menu.Item>
                                            </SubMenu>
                                            <SubMenu
                                                key='filter4'
                                                title={
                                                    <span>
                                              <Icon style={{ fontSize: '20px' }} type='star'/>
                                                Rating
                                            </span>
                                                }
                                            >
                                                <Menu.Item key='21'>
                                                    <Checkbox style={{ float: 'right' }} onChange={this.onChange}/>3 Stars</Menu.Item>
                                                <Menu.Item key='22'>
                                                    <Checkbox style={{ float: 'right' }} onChange={this.onChange}/>4 Stars</Menu.Item>
                                                <Menu.Item key='23'>
                                                    <Checkbox style={{ float: 'right' }} onChange={this.onChange}/>5 Stars</Menu.Item>
                                                <Menu.Item key='24'>
                                                    <Checkbox style={{ float: 'right' }} onChange={this.onChange}/>Top Rated</Menu.Item>
                                            </SubMenu>
                                        </Menu>
                                </Col>
                                <Col  xs={24} sm={24} md={{span:17}} lg={{span:19}} xl={{span:19}} xxl={{ span: 19}}>
                                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                        <List
                                            itemLayout='vertical'
                                            size='large'

                                            dataSource={listData}
                                            renderItem={item => (
                                                <List.Item
                                                    key={item.title}
                                                    actions={[
                                                        <List.Item.Meta
                                                            avatar={<Avatar src={'../../static/images/search_dsg.png'}/>}
                                                            title={<Link as={'/users/'+item.user.username} href={'/users/?username='+item.user.username}>
                                                                <a>{item.user.name}</a></Link>}
                                                            description={item.description}
                                                            tags={['tag 1', 'tag 2', 'tag 3']}
                                                        />,
                                                        <IconText type='star-o' text='156'/>,
                                                        <IconText type='like-o' text='156'/>,
                                                        <IconText type='message' text='2'/>
                                                    ]}
                                                    extra={
                                                        <img
                                                            width={272}
                                                            alt='logo'
                                                            src='../../static/images/search_prg.png'
                                                        />
                                                    }
                                                >
                                                    <Link as={'/jobs/'+item.slug} href={'/jobs/?slug='+item.slug}>
                                                        <a><h3>{item.title}</h3></a>
                                                    </Link>
                                                    {item.content}
                                                </List.Item>
                                            )}
                                        />

                                    </Content>
                                </Col>
                            </Row>

                        </Layout>
                    </Content>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps (state) {
    return {}
}

SearchJobsContainer.propTypes = {}

export default connect(mapStateToProps, {})(SearchJobsContainer)
