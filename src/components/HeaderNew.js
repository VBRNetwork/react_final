import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Row, Col, Layout, Breadcrumb, Button, Dropdown, Avatar } from 'antd'
import Link from 'next/link'
import { connect } from 'react-redux'
import { getVBRSettings } from '../actions/app_settings'
import Router from 'next/router'
import { FullStory } from 'react-fullstory-component'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga'
import Particles from 'react-particles-js'

ReactGA.initialize('UA-147139648-1')
import { logout } from '../actions/user'
import '../styles/home.css'
import '../styles/base.css'

const { Content } = Layout
const { SubMenu } = Menu

class HeaderNew extends Component {

    constructor (props) {
        super(props)
        this.state = {
            current: 'mail',
            sessionId: '12983928daolkdlkajd',
            isLogged: false,
            breadcrumb: {
                category: {
                    url: '',
                    name: '',
                    meta_description: ''
                },
                subcategory: {
                    url: '',
                    title: ''
                }
            },
            fullStorySettings: {
                debug: false,
                host: 'www.fullstory.com',
                orgKey: 'PDZM8'
            },
        }
        this.clickLogout = this.clickLogout.bind(this)
        this.rebuildBreadcrumbs = this.rebuildBreadcrumbs.bind(this)
        this.handleChangeCategory = this.handleChangeCategory.bind(this)
    }

    handleChangeCategory (event) {
        this.setState({
            category: event.target.value,
        })
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if (prevProps.redux_router.location.pathname !== this.props.redux_router.location.pathname) {
            ReactGA.pageview(window.location.pathname + window.location.search)
            this.rebuildBreadcrumbs()
        }
    }

    componentDidMount () {
        let { getVBRSettings } = this.props
        getVBRSettings().then((e) => {
        })
        this.rebuildBreadcrumbs()

    }

    rebuildBreadcrumbs () {

        let generalMetaDescription = 'Peer-to-peer Marketplace for Freelancers Powered by Blockchain.' +
            'Instant payments, Lowest Fees, Peer-to-peer interaction, Smart Contract based jobs.'

        if (typeof (this.props.settings.main_menu) !== 'undefined' &&
            typeof (this.props.settings.main_menu.mainMenu) !== 'undefined') {

            let categories = Object.keys(this.props.settings.main_menu.mainMenu).map(key => {
                return this.props.settings.main_menu.mainMenu[key]
            })

            let fullLink = this.props.redux_router.location.pathname.split('/')

            if (fullLink[0] === '' && fullLink[1] === '') {
                this.setState({
                    breadcrumb: {
                        category: { url: '/', name: 'Home', meta_description: generalMetaDescription },
                        subcategory: {
                            url: '',
                            title: '',
                            metaDescription: generalMetaDescription,
                        }
                    }
                })
            }

            if (fullLink[1] === 'ico') {
                this.setState({
                    breadcrumb: {
                        category: {
                            url: 'ico',
                            name: 'Initial Coin Offering',
                            meta_description: generalMetaDescription
                        },
                        subcategory: {
                            url: '',
                            title: '',
                            metaDescription: generalMetaDescription
                        }
                    }
                })
            }

            if (fullLink[1] === 'how-it-works') {
                this.setState({
                    breadcrumb: {
                        category: {
                            url: 'how-it-works',
                            name: 'How it works',
                            meta_description: generalMetaDescription
                        },
                        subcategory: {
                            url: '',
                            title: '',
                            metaDescription: generalMetaDescription
                        }
                    }
                })
            }

            if (typeof fullLink[2] !== 'undefined') {
                let currentCategory = categories.find(obj => obj.url === 'categories/' + fullLink[2])
                if (currentCategory && typeof fullLink[3] !== 'undefined') {
                    let currentSubCategory = currentCategory['subcategories']
                    .find(obj => obj.url === 'categories/' + fullLink[2] + '/' + fullLink[3])

                    if (!this.state.breadcrumb.category.length > 0) {
                        this.setState({
                            breadcrumb: {
                                category: currentCategory,
                                subcategory: currentSubCategory

                            }
                        })
                    }
                }
            }

        }
    }

    clickLogout (e) {
        let { logout } = this.props
        logout().then(() => {
            this.setState({
                isLogged: false
            })
            Router.push(`/`)
        })
    }

    render () {
        let token = false
        if (this.props.user.token) {
            token = true
        }

        let loginButton = (
            <Button ghost size="large">
                <Link href='/login'>
                    <a><b>Log in</b></a>
                </Link>
            </Button>
        )

        let joinButton = (
            <Button size="large" style={{ marginLeft: '10px' }}>
                <Link href='/register'>
                    <a><b>Register</b></a>
                </Link>
            </Button>
        )

        let postJobButton = (
            <Button size="large" style={{ marginLeft: '10px' }}>
                <Link href='/post-job'>
                    <a><b>Post Job</b></a>
                </Link>
            </Button>
        )

        const menu = (
            <Menu>
                <Menu.Item>
                    <Link href='/dashboard'>
                        <a >
                            Dashboard
                        </a>
                    </Link>

                </Menu.Item>
                <Menu.Item>
                    <a target='_blank' rel='noopener noreferrer' >
                        Change Avatar
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target='_blank' rel='noopener noreferrer' href='#'>
                        Payments History
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={this.clickLogout}>
                        <Icon style={{fontSize: 17}} type='logout'/> Logout
                    </div>
                </Menu.Item>
            </Menu>
        )


        let menuItems = ''
        if(typeof(this.props.settings.main_menu) !== 'undefined' &&
            typeof (this.props.settings.main_menu.mainMenu) !== 'undefined'){
            let main_menu = this.props.settings.main_menu.mainMenu
            menuItems = Object.keys(main_menu).map((category,index) => {

                let subcategoriesList = [];
                let subcategories = main_menu[category].subcategories;
                subcategories.map(function(subcategory,index){
                    let localSubcategories = subcategory.url.split("/")
                    localSubcategories = localSubcategories.filter(item => item !== 'categories')
                    subcategoriesList.push(
                        <Menu.Item key={'menu_' + index}>
                            <Link as={'/' + subcategory.url}
                                  href={'/categories/?category=' + localSubcategories[0] + '&subcategory=' + localSubcategories[1]}>
                                <a><Icon style={{fontSize: 17}} type={main_menu[category].icon}/> {subcategory.title}</a>
                            </Link>
                        </Menu.Item>
                    )
                })

                return (
                    <SubMenu
                        key={'menu2_' + index}
                        title={
                            <span className="submenu-title-wrapper">
                              <Icon type={main_menu[category].icon} />
                                {main_menu[category].name}
                            </span>
                        } >
                        {subcategoriesList}
                    </SubMenu>
                )
            })
        }

        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>{this.state.breadcrumb.category.name}
                        {this.state.breadcrumb.subcategory.title && ' - ' + this.state.breadcrumb.subcategory.title}
                        - Veelancing
                    </title>
                    <meta name="description" content={this.state.breadcrumb.category.metaDescription}/>
                </Helmet>
                <div>
                    <FullStory settings={this.state.fullStorySettings} sessionId={this.state.sessionId}/>
                </div>
                <div className='container background-header'>
                    <Particles
                        style={{ position: 'absolute' }}
                        params={{
                            particles: {
                                number: {
                                    value: 45
                                },
                                size: {
                                    value: 3
                                },
                                color: { value: '#FFF' }
                            },
                            interactivity: {
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: 'repulse'
                                    }
                                }
                            }
                        }}
                    >
                    </Particles>

                    <Row>
                        <Col xs={24} sm={4} md={7} lg={7} xl={6} xxl={10}>
                            <div className="logo-box">
                                <Link href='/'>
                                    <span className="logo">VEELANCING</span>
                                </Link>
                            </div>
                        </Col>

                        <Col xs={24} sm={16} md={16} lg={16} xl={10} xxl={8}>
                            <Menu selectedKeys={[this.state.current]} mode='horizontal' style={{
                                marginTop: '5px',
                                background: 'transparent',
                                borderBottom: 'initial'
                            }}>

                                <Menu.Item key='app122'>
                                    <Link href='/ico'>
                                        <a className="menu-item"> <Icon style={{ fontSize: 17 }} type='file-protect'/>Initial
                                            Coin Offering</a>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key='app1'>
                                    <Link href='/how-it-works'>
                                        <a className="menu-item"> <Icon style={{ fontSize: 17 }} type='bulb'/> How it
                                            works</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key='about'>
                                    <Link href='/about-us'>
                                        <a className="menu-item"> <Icon style={{ fontSize: 17 }} type='mail'/> About Us</a>
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Col>

                        <Col xs={24} sm={16} md={4} lg={1} xl={{ span: 8, pull: 1 }} xxl={6}>
                            <div style={{ marginTop: '17px', float: 'right', marginRight: '10%' }}>
                                {token === false && loginButton}
                                {token === false && joinButton}

                                {token !== false &&
                                <div>
                                    {postJobButton}

                                    { this.props.user.type === 0 &&
                                    <Button type='primary' style={{
                                        marginLeft:'5px',
                                        backgroundColor: '#2EC3AB',
                                        borderColor: '#2EC3AB'
                                    }}>
                                        <Link href='/dashboard/become-freelancer'>
                                            <a>
                                                Become a freelancer
                                            </a>
                                        </Link>
                                    </Button>
                                    }
                                    { this.props.user.type === 1 &&
                                    <span style={{marginLeft:'5px'}}>You are freelancer</span>
                                    }

                                    <Dropdown overlay={menu}>
                                        <div style={{ color: '#FFF', marginLeft: '20px',display: 'inline'}}
                                             className='ant-dropdown-link'>
                                            <Avatar src={'https://i.pravatar.cc/150?img=3'} size='large' icon='user' style={{
                                                backgroundColor: '#2ec3ab',
                                                cursor: 'pointer',
                                            }}/>
                                        </div>
                                    </Dropdown>
                                </div>
                                }
                            </div>

                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{
                            background: 'rgba(26, 29, 40, 0.86)',
                            boxShadow: 'rgb(185, 185, 185) 0px 0px 20px 0px'
                        }}>
                            <div style={{ margin: '0 auto' }}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 18, offset: 3 }}>
                                    <Menu style={{ background: 'transparent', color: '#FFF', borderBottom: '0px' }}
                                          selectedKeys={[this.state.current]}
                                          mode='horizontal'>
                                        {menuItems}
                                    </Menu>
                                </Col>
                            </div>
                        </Col>
                    </Row>

                </div>

                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 18, offset: 3 }}>
                        <Breadcrumb style={{ marginLeft: '20px', paddingTop: '10px' }}>
                            <Breadcrumb.Item>
                                <a href={'/' + this.state.breadcrumb.category.url}>
                                    {this.state.breadcrumb.category.name}
                                </a>

                                {this.state.breadcrumb.subcategory.url.length > 0 &&
                                <a href={'/' + this.state.breadcrumb.subcategory.url}> /
                                    {this.state.breadcrumb.subcategory.title} </a>}

                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user,
        settings: state.settings,
        redux_router: state.router
    }
}

HeaderNew.propTypes = {
    user: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.instanceOf(Object).isRequired,
    redux_router: PropTypes.instanceOf(Object).isRequired,
    getVBRSettings: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
}
export default connect(mapStateToProps, { getVBRSettings, logout })(HeaderNew)
