import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Menu, Icon, Row, Col, Layout, Breadcrumb, List} from 'antd'
import Link from 'next/link'
import {Button} from 'antd'
import '../styles/base.css'
import {connect} from 'react-redux'
import {getVBRSettings} from '../actions/app_settings'
import {logout} from '../actions/user'
import Router from 'next/router'
const {Content} = Layout


class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current: 'mail',
            isLogged: false
        };
        this.clickLogout = this.clickLogout.bind(this);
    }

    componentDidMount() {
        let {getVBRSettings} = this.props
        getVBRSettings().then((e) => {
        });
    }

    clickLogout(e) {
        this.props.logout().then(() => {
            this.setState({
                isLogged: false
            })
            Router.push(`/`);
        });
    }

    render() {

        let token = false;
        if (this.props.user.token) {
            token = true
        }
       
        let main_menu = this.props.settings.main_menu

        let loginButton = (
            <Menu.Item key='alipay'>
                <Link href='/login'>
                    <a> <Icon style={{fontSize: 17}} type='login'/> Login</a>
                </Link>
            </Menu.Item>
        );

        let menuItems = main_menu.map((category) => {
            return (<Menu.Item key={'menu_' + category.name}>
                <Link href={'/' + category.url}>
                    <a> <Icon style={{fontSize: 17}} type={category.icon}/> {category.name}</a>
                </Link>
            </Menu.Item>)
        });

        return (
            <div>
                <Content style={{marginLeft: '50px', marginRight: '50px', marginBottom: '10px'}}>
                    <Row>
                        <Col lg={6}> <Link href='/'><a><img src={'/static/images/vbrLogo.png'}
                                                            style={{width: '80px', margin: '8px'}}/></a></Link></Col>
                        <Col lg={16}>
                            <Menu className='nav1' selectedKeys={[this.state.current]} mode='horizontal'
                                  style={{float: 'right'}}>
                                <Menu.Item key='mail1'>
                                    <Link href='/'>
                                        <a> <Icon style={{fontSize: 17}} type='home'/> Home</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key='app1'>
                                    <Link href='/how-it-works'>
                                        <a> <Icon style={{fontSize: 17}} type='bulb'/> How it works</a>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key='app122'>
                                    <Link href='/ico'>
                                        <a> <Icon style={{fontSize: 17}} type='file-protect'/>Initial Coin Offering</a>
                                    </Link>
                                </Menu.Item>

                                {token === true &&
                                <Menu.Item key='alipay243434'>
                                    <div onClick={this.clickLogout}>
                                        <Icon style={{fontSize: 17}} type='logout'/> Logout
                                    </div>
                                </Menu.Item>}

                                {token === false && loginButton}
                            </Menu>
                        </Col>

                        <Col lg={2}>
                            {token === false && <Link href='/register'>
                                <a>
                                    <div className='post-job-btn'>
                                        <Button type='primary' style={{
                                            backgroundColor: '#2EC3AB',
                                            borderColor: '#2EC3AB'
                                        }} className='post-job-button'>Register</Button>
                                    </div>
                                </a>
                            </Link>}

                            {token !== false && <Link href='/dashboard'>
                                <a>
                                    <div className='post-job-btn'>
                                        <Button type='primary' style={{
                                            backgroundColor: '#2EC3AB',
                                            borderColor: '#2EC3AB'
                                        }} className='post-job-button'>Dashboard</Button>
                                    </div>
                                </a>
                            </Link>}
                        </Col>
                    </Row>

                </Content>
                <Menu selectedKeys={[this.state.current]} mode='horizontal'
                      style={{boxShadow: '1px 4px 12px 1px #929292'}}>
                    {menuItems}
                </Menu>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        settings: state.settings
    }
}


Header.propTypes = {
    user: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.instanceOf(Object).isRequired,
    getVBRSettings: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
}
export {Header}
export default connect(mapStateToProps, {getVBRSettings,logout})(Header)
