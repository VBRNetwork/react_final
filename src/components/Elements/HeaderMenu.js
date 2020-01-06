import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Row, Col, Button, Dropdown, Avatar } from 'antd'
import Link from 'next/link'
import { connect } from 'react-redux'
import { logout,logoutStore } from '../../actions/user'
import Router from 'next/router'
import ReactGA from 'react-ga'
import ResponsiveAntMenu from '../../components/Elements/ResponsiveAntMenu'
ReactGA.initialize('UA-147139648-1');

class HeaderMenu extends Component {

    constructor (props) {
        super(props)
        this.state = {
            current:''
        }
        this.clickLogout = this.clickLogout.bind(this)
        this.localLogout = this.localLogout.bind(this)
    }


    componentDidUpdate (prevProps, prevState, snapshot) {
        if (prevProps.redux_router.location.pathname !== this.props.redux_router.location.pathname) {
            ReactGA.pageview(window.location.pathname + window.location.search)
        }
    }

    clickLogout (e) {
        let { logout } = this.props
        let that = this;
        logout().then(() => {
            that.localLogout()
        }).catch(function (error) {
            that.localLogout()
        })
    }

    localLogout(){
        this.setState({
            isLogged: false
        })
        this.props.logoutStore()
        Router.push(`/`)
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
                <Link href='/jobs/add-job'>
                    <a><b>Post Job</b></a>
                </Link>
            </Button>
        )

        const menu = (
            <Menu>
                <Menu.Item>
                    <Link href='/dashboard'>
                        <a>
                            Dashboard
                        </a>
                    </Link>

                </Menu.Item>
                <Menu.Item>
                    <a target='_blank' rel='noopener noreferrer'>
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
                        <Icon style={{ fontSize: 17 }} type='logout'/> Logout
                    </div>
                </Menu.Item>
            </Menu>
        )
        return (
            <div>

                <Row>
                    <Col xs={24} sm={4} md={4} lg={5} xl={6} xxl={4}>
                        <div className="logo-box">
                            <Link href='/'>
                                <img src="../../../static/images/design/veelancing_logo.svg" alt=""/>
                            </Link>
                        </div>
                    </Col>

                    <Col xs={10} sm={16} md={16} lg={13} xl={10} xxl={14}>
                        <div>
                            <div className={'header-nav'}>

                                <ResponsiveAntMenu
                                    activeLinkKey={location.pathname}
                                    mode={isMenuShown => isMenuShown ? 'vertical' : 'horizontal'}
                                    mobileMenuContent={isMenuShown => isMenuShown ?
                                        <Button type='primary' ghost size="large"
                                                className={'menu-button-responsive '}>Close Menu
                                        </Button>
                                        : <Button type='primary' ghost size="large"
                                                  className={'menu-button-responsive '}>
                                            Menu
                                        </Button>}
                                    menuClassName={'responsive-ant-menu'}>
                                        <Menu selectedKeys={[this.state.current]} mode='horizontal' style={{
                                            marginTop: '5px',
                                            background: 'transparent',
                                            borderBottom: 'initial',
                                        }}>
                                            <Menu.Item key='app122'>
                                                <div>
                                                    <Link href='/ico'>
                                                        <a className="menu-item"> <Icon style={{ fontSize: 17 }} type='file-protect'/>
                                                            Initial Coin Offering</a>
                                                    </Link>
                                                </div>
                                            </Menu.Item>
                                            <Menu.Item key='app1'>
                                                <div>
                                                    <Link href='/how-it-works'>
                                                        <a className="menu-item"> <Icon style={{ fontSize: 17 }} type='bulb'/>
                                                            How it  works
                                                        </a>
                                                    </Link>
                                                </div>
                                            </Menu.Item>
                                            <Menu.Item key='about'>
                                                <div>
                                                    <Link href='/about-us'>
                                                        <a className="menu-item"> <Icon style={{ fontSize: 17 }} type='mail'/> About Us</a>
                                                    </Link>
                                                </div>
                                            </Menu.Item>
                                        </Menu>
                                </ResponsiveAntMenu>

                            </div>
                        </div>
                    </Col>

                    <Col xs={14} sm={16} md={4} lg={5} xl={{ span: 8 }} xxl={6}>
                        <div style={{ marginTop: '25px', textAlign:'center' }}>
                            {token === false && loginButton}
                            {token === false && joinButton}
                            {token !== false &&
                                <div>
                                    {postJobButton}
                                    {this.props.user.type === 0 &&
                                        <Button type='primary' ghost size="large" style={{
                                            marginLeft: '5px',
                                            backgroundColor: '#2EC3AB',
                                            borderColor: '#2EC3AB'
                                        }}>
                                            <Link href={'/dashboard/?slug=become-freelancer'} as={'/dashboard/become-freelancer'}>
                                                <a style={{color:'#FFF'}}>
                                                    Become a freelancer
                                                </a>
                                            </Link>
                                        </Button>
                                    }

                                    {this.props.user.type === 1 &&
                                        <span style={{ marginLeft: '5px' }}>You are freelancer</span>
                                    }

                                    <Dropdown overlay={menu}>
                                        <div style={{ color: '#FFF', marginLeft: '20px', display: 'inline' }}
                                             className='ant-dropdown-link'>
                                            <Avatar src={this.props.user.profile && this.props.user.profile.image} size='large' icon='user'
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}/>
                                        </div>
                                    </Dropdown>
                                </div>
                            }
                        </div>

                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user,
        redux_router: state.router,
        settings:state.settings
    }
}

HeaderMenu.propTypes = {
    user: PropTypes.instanceOf(Object).isRequired,
    logout: PropTypes.func.isRequired,
    logoutStore: PropTypes.func.isRequired,
    redux_router: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.instanceOf(Object).isRequired,
}
export default connect(mapStateToProps, { logout,logoutStore })(HeaderMenu)
