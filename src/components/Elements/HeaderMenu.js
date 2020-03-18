import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Row, Col, Button, Dropdown, Avatar } from 'antd'
import Link from 'next/link'
import { connect } from 'react-redux'
import { logout,logoutStore } from '../../actions/user'
import Router from 'next/router'
import ResponsiveAntMenu from '../../components/Elements/ResponsiveAntMenu'

class HeaderMenu extends Component {

    constructor (props) {
        super(props)
        this.state = {
            current:'',
            is_ico:false
        }
        this.clickLogout = this.clickLogout.bind(this)
        this.localLogout = this.localLogout.bind(this)
        this.isIco = this.isIco.bind(this)
    }

    componentDidMount () {
        this.isIco()
    }

    isIco(){
        let icoDomains = ['localhost', 'ico.veelancing.io']
        if(window && icoDomains.includes(window.location.hostname)){
            this.setState({
                is_ico:true
            })
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
                    <div onClick={this.clickLogout}>
                        <Icon style={{ fontSize: 17 }} type='logout'/> Logout
                    </div>
                </Menu.Item>
            </Menu>
        )
        return (
            <div>
                <Row>
                    <Col xs={24} sm={10} md={4} lg={5} xl={6} xxl={4}>
                        <div className="logo-box">
                            <Link href='/'>
                                <img src="../../../static/images/design/veelancing_logo.svg" alt=""/>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={13} xl={10} xxl={14}>
                        <div className={'header-grid-box'}>
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
                                    {(onLinkClick) =>
                                        <Menu selectedKeys={[this.state.current]} mode='horizontal' style={{
                                            marginTop: '5px',
                                            background: 'transparent',
                                            borderBottom: 'initial',
                                        }}>
                                            <Menu.Item key='app122'>
                                                {!this.state.is_ico ?
                                                    <Link href='https://ico.veelancing.io'>
                                                        <div>
                                                            <a className="menu-item"> <Icon style={{ fontSize: 17 }} type='file-protect'/>
                                                                Initial Coin Offering</a>
                                                        </div>
                                                    </Link>:
                                                    <Link href='https://veelancing.io'>
                                                        <div>
                                                            <a className="menu-item"> <Icon style={{ fontSize: 17 }} type='file-protect'/>
                                                                View our <span style={{color:'#9cff9c'}}>Beta</span>
                                                            </a>
                                                        </div>
                                                    </Link>
                                                }
                                            </Menu.Item>
                                            <Menu.Item key='app1'>
                                                <Link href='/how-it-works'>
                                                    <div>
                                                        <a className="menu-item"> <Icon style={{ fontSize: 17 }} type='bulb'/>
                                                            How it  works
                                                        </a>
                                                    </div>
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item key='about'>
                                                <Link href='/about-us'>
                                                    <div>
                                                        <a className="menu-item"> <Icon style={{ fontSize: 17 }} type='mail'/> About Us</a>
                                                    </div>
                                                </Link>
                                            </Menu.Item>
                                        </Menu>
                                    }
                                </ResponsiveAntMenu>

                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} xl={{ span: 8 }} xxl={6}>
                        <div style={{ marginTop: '25px', textAlign:'center' }}>
                            {(token === false) && loginButton}
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
