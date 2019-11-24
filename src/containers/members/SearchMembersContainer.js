import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Avatar, Icon, Card, Layout, Menu, Row, Col, Checkbox, Breadcrumb ,Button} from 'antd'
import Link from 'next/link'
import FilterComponent from '../../components/PageElements/FilterComponent'
import InfoBox from '../../components/InfoBox'
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

const listData = [{
    href: '/profile',
    title: `Looking for a Web Designer (Req: React,Javascript,Node)`,
    slug: `looking-for-a-web-developer`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Blockchain Expert',
    content:
        'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
    user: {
        name: 'Stefan Vanea',
        username: 'stefan_vanea',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    }
},{
    href: '/profile',
    title: `Looking for a Web Designer (Req: React,Javascript,Node)`,
    slug: `looking-for-a-web-developer`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Blockchain Expert',
    content:
        'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
    user: {
        name: 'Stefan Vanea',
        username: 'stefan_vanea',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    }
},
    {
        href: '/profile',
        title: `Looking for a Web Designer (Req: React,Javascript,Node)`,
        slug: `looking-for-a-web-developer`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Blockchain Expert',
        content:
            'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
        user: {
            name: 'Stefan Vanea',
            username: 'stefan_vanea',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        }
    },
    {
        href: '/profile',
        title: `Looking for a Web Designer (Req: React,Javascript,Node)`,
        slug: `looking-for-a-web-developer`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Blockchain Expert',
        content:
            'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
        user: {
            name: 'Stefan Vanea',
            username: 'stefan_vanea',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        }
    },
    {
        href: '/profile',
        title: `Looking for a Web Designer (Req: React,Javascript,Node)`,
        slug: `looking-for-a-web-developer`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Blockchain Expert',
        content:
            'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
        user: {
            name: 'Stefan Vanea',
            username: 'stefan_vanea',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        }
    },
    {
        href: '/profile',
        title: `Looking for a Web Designer (Req: React,Javascript,Node)`,
        slug: `looking-for-a-web-developer`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Blockchain Expert',
        content:
            'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
        user: {
            name: 'Stefan Vanea',
            username: 'stefan_vanea',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        }
    },
    {
        href: '/profile',
        title: `Looking for a Web Designer (Req: React,Javascript,Node)`,
        slug: `looking-for-a-web-developer`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Blockchain Expert',
        content:
            'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
        user: {
            name: 'Stefan Vanea',
            username: 'stefan_vanea',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        }
    },
    {
        href: '/profile',
        title: `Looking for a Web Designer (Req: React,Javascript,Node)`,
        slug: `looking-for-a-web-developer`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Blockchain Expert',
        content:
            'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
        user: {
            name: 'Stefan Vanea',
            username: 'stefan_vanea',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        }
    },
    {
        href: '/profile',
        title: `Looking for a Web Designer (Req: React,Javascript,Node)`,
        slug: `looking-for-a-web-developer`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Blockchain Expert',
        content:
            'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
        user: {
            name: 'Stefan Vanea',
            username: 'stefan_vanea',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        }
    },
    {
        href: '/profile',
        title: `Looking for a Web Designer (Req: React,Javascript,Node)`,
        slug: `looking-for-a-web-developer`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Blockchain Expert',
        content:
            'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
        user: {
            name: 'Stefan Vanea',
            username: 'stefan_vanea',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        }
    },{
        href: '/profile',
        title: `Looking for a Web Designer (Req: React,Javascript,Node)`,
        slug: `looking-for-a-web-developer`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Blockchain Expert',
        content:
            'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
        user: {
            name: 'Stefan Vanea',
            username: 'stefan_vanea',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        }
    },
    {
        href: '/profile',
        title: `Looking for a Web Designer (Req: React,Javascript,Node)`,
        slug: `looking-for-a-web-developer`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Blockchain Expert',
        content:
            'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
        user: {
            name: 'Stefan Vanea',
            username: 'stefan_vanea',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        }
    },
    {
        href: '/profile',
        title: `Looking for a Web Designer (Req: React,Javascript,Node)`,
        slug: `looking-for-a-web-developer`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Blockchain Expert',
        content:
            'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
        user: {
            name: 'Stefan Vanea',
            username: 'stefan_vanea',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        }
    },
    {
    href: '/profile',
    title: `Looking for a Web Designer`,
    slug: `looking-for-a-web-designer`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Python Programmer',
    content:
        'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
    user: {
        name: 'Fedot Serghei',
        username: 'fedot_serghei',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    }
},{
    href: '/profile',
    title: `Looking for a test team for a large project!`,
    slug: `looking-for-a-large-project`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Web designer for a traveling website',
    content:
        'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
    user: {
        name: 'Emanuel Lovin',
        username: 'ceo_samsung',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    }
},{
    href: '/profile',
    title: `Looking for a Web Designer`,
    slug: `looking-for-a-large-webdesigner`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Devops Vbrinc Platform',
    content:
        'We are developing a travel and vacations webstie, and need a web designed with experience to help us make it as user friendly as possible',
    user: {
        name: 'Barborica Devops',
        username: 'barborica_devops',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    }
},{
    href: '/profile',
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
    href: '/profile',
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

    onChange (e) {
        console.log(`checked = ${e.target.checked}`)
    }

    render () {
        return (
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                    <Content style={{marginLeft:'1rem'}}>
                        <InfoBox messages={{'h3':' Welcome to VBR Network Marketplace' ,
                            'h4' : 'We are developing a travel and vacations website, and need a web designed with experience to help'}}/>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Row>
                                <Col  xs={24} sm={24} md={{span:7}} lg={{span:5}} xl={{span:5}} xxl={{ span: 5}}>
                                    <div><strong>Filters</strong></div>
                                    <FilterComponent />
                                </Col>
                                <Col  xs={24} sm={24} md={{span:17}} lg={{span:19}} xl={{span:19}} xxl={{ span: 19}}>
                                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                        <List
                                            itemLayout='vertical'
                                            size='large'
                                            grid={{
                                                gutter: 16,
                                                xs: 1,
                                                sm: 2,
                                                md: 4,
                                                lg: 4,
                                                xl: 4,
                                                xxl: 4,
                                            }}
                                            dataSource={listData}
                                            renderItem={item => (
                                                <div>
                                                    <List.Item key={item.title} >
                                                        <div style={{
                                                            boxShadow: '0px 0px 5px 0px #acacac',
                                                            padding:'5px'
                                                        }}>
                                                        <div style={{padding:'5px'}}>
                                                            <img
                                                                width={'100%'}
                                                                alt='logo'
                                                                src='../../static/images/search_dsg.png'
                                                            />
                                                            <a>
                                                                <h3>{item.user.name}</h3>
                                                                <h4>Senior Software Engineer, $37 </h4><em
                                                                className="ant-list-item-action-split"/>
                                                            </a>
                                                            {item.content}
                                                        </div>

                                                            <div style={{textAlign:'center'}}>

                                                                    <Button type={'primary'} style={{
                                                                        backgroundColor: '#2EC3AB',
                                                                        borderColor: '#2EC3AB'
                                                                    }}>
                                                                        <Link as={'/users/'+item.user.username}  href={'/users/?username='+item.user.username}> View Profile   </Link>
                                                                    </Button>

                                                                </div>

                                                        </div>
                                                    </List.Item>
                                                </div>
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
