import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Menu, Icon, Row, Col, Layout, Breadcrumb, List, Dropdown} from 'antd'
import Link from 'next/link'
import {Button} from 'antd'
import '../styles/base.css'
import {connect} from 'react-redux'
import {getVBRSettings} from '../actions/app_settings'
import {logout} from '../actions/user'
import Router from 'next/router'
const {Content} = Layout
const {SubMenu} = Menu


import {Helmet} from "react-helmet";
import Navigation from '../components/Navigation/navigation'
import ReactGA from 'react-ga';


class Header extends Component {


    constructor(props) {
        super(props)
        this.state = {
            current: 'mail',
            isLogged: false
        };
        this.clickLogout = this.clickLogout.bind(this);
        ReactGA.initialize('UA-147139648-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
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
        let loginButton = (
            <Menu.Item key='alipay'>
                <Link href='/login'>
                    <a><Icon style={{fontSize: 17}} type='login'/> Login</a>
                </Link>
            </Menu.Item>
        );

        let menuItems = ''
        if(this.props.settings.main_menu && this.props.settings.main_menu.mainMenu){
            let main_menu = this.props.settings.main_menu.mainMenu
            menuItems = Object.keys(main_menu).map((category,index) => {

                let subcategoriesList = [];
                let subcategories = main_menu[category].subcategories;
                subcategories.map(function(subcategory,index){
                    subcategoriesList.push(
                        <Menu.Item key={'menu_' + index}>
                            <Link as={'/' + subcategory.url} href={'/categories/?category=' + (subcategory.url).replace('categories/','')}>
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
                    <meta charSet="utf-8" />
                    <title>VBR</title>
                </Helmet>
                <Content style={{marginBottom: '10px'}}>
                    <Row>
                        <Col xs={8} sm={4} md={6} lg={8} xl={10}> 
                            <Link href='/'>
                                <img src={'/static/images/vbrLogo.png'}
                                        style={{width: '80px', margin: '8px'}}
                                    />
                                
                            </Link>
                        </Col>
                        <Col  xs={16} sm={4} md={6} lg={8} xl={12}>
                            <Menu selectedKeys={[this.state.current]} mode='horizontal' style={{marginTop:'5px'}}>
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

                        <Col  xs={24} sm={4} md={6} lg={2} xl={2}>
                            {token === false && <Link href='/register'>
                                <a>
                                    <div className='post-job-btn'>
                                        <Button type='primary' style={{
                                            backgroundColor: '#2EC3AB',
                                            borderColor: '#2EC3AB'
                                        }}>Register</Button>
                                    </div>
                                </a>
                            </Link>}

                            {token !== false && <Link href='/dashboard'>
                                <a>
                                    <div className='post-job-btn'>
                                        <Button type='primary' style={{
                                            backgroundColor: '#2EC3AB',
                                            borderColor: '#2EC3AB'
                                        }}>Dashboard</Button>
                                    </div>
                                </a>
                            </Link>}
                        </Col>
                    </Row>

                </Content>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Menu selectedKeys={[this.state.current]} mode='horizontal'
                            style={{boxShadow: '1px 4px 12px 1px #929292'}}>
                            {menuItems}
                        </Menu>
                    </Col>
                </Row>
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
