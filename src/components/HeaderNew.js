import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Row, Col, Layout, Breadcrumb, Button, Dropdown, Avatar } from 'antd'
import Link from 'next/link'
import { connect } from 'react-redux'
import { getVBRSettings } from '../actions/app_settings'
import Router from 'next/router'
import { FullStory } from 'react-fullstory-component'
import { Helmet } from 'react-helmet'
import Particles from 'react-particles-js'
import { logout } from '../actions/user'
import '../styles/home.css'
import 'styles/base.css'
import HeaderMenu from './Elements/HeaderMenu'
const { SubMenu } = Menu
var jwtDecode = require('jwt-decode')
import {
    isBrowser,
    isMobile,
} from "react-device-detect";

class HeaderNew extends Component {

    constructor (props) {
        super(props)
        this.state = {
            current: 'mail',
            sessionId: this.makeid(10),
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
            particles:35,
        }
        this.clickLogout = this.clickLogout.bind(this)
        this.rebuildBreadcrumbs = this.rebuildBreadcrumbs.bind(this)
        this.handleChangeCategory = this.handleChangeCategory.bind(this)
        this.handleChangeParticles = this.handleChangeParticles.bind(this);
    }


    handleChangeParticles(value) {
        this.setState({
            particles: value
        })
    }

    makeid (length) {
        var result = ''
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
        var charactersLength = characters.length
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }

    handleChangeCategory (event) {
        this.setState({
            category: event.target.value,
        })
    }

    componentDidMount () {
        let number_particles = 30;

        if(isBrowser){
            number_particles = 40;
        }
        if(isMobile){
            number_particles = 14;
        }

        this.handleChangeParticles(number_particles);

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
        this.props.logout().then(() => {
            this.setState({
                isLogged: false
            })
            Router.push(`/`)
        })
    }

    render () {
        let menuItems = ''
        if (typeof (this.props.settings.main_menu) !== 'undefined' &&
            typeof (this.props.settings.main_menu.mainMenu) !== 'undefined') {
            let main_menu = this.props.settings.main_menu.mainMenu
            menuItems = Object.keys(main_menu).map((category, index) => {

                let subcategoriesList = []
                let subcategories = main_menu[category].subcategories
                subcategories.map(function (subcategory, index) {
                    let localSubcategories = subcategory.url.split('/')
                    localSubcategories = localSubcategories.filter(item => item !== 'categories')
                    subcategoriesList.push(
                        <Menu.Item key={'menu_' + index}>
                            <Link as={'/' + subcategory.url}
                                  href={'/categories/?category=' + localSubcategories[0] + '&subcategory=' + localSubcategories[1]}>
                                <a><Icon style={{ fontSize: 17 }} type={main_menu[category].icon}/> {subcategory.title}
                                </a>
                            </Link>
                        </Menu.Item>
                    )
                })

                return (
                    <SubMenu
                        key={'menu2_' + index}
                        title={
                            <span className="submenu-title-wrapper">
                              <Icon type={main_menu[category].icon}/>
                                {main_menu[category].name}
                            </span>
                        }>
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
                        {this.state.breadcrumb.subcategory.title && ' - ' + this.state.breadcrumb.subcategory.title} -
                        Veelancing
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
                                    value: this.state.particles
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
                    <HeaderMenu/>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{
                            background:'rgba(58, 62, 77, 0.54) none repeat scroll 0% 0%',
                            boxShadow:'rgb(255, 255, 255) 0px 0px 6px 0px'
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
