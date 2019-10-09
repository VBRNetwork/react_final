import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {Menu, Icon, Row, Col, Layout, Breadcrumb, List, Dropdown} from 'antd'
import Link from 'next/link'
import {Button} from 'antd'
import '../styles/base.css'
import {connect} from 'react-redux'
import {getVBRSettings} from '../actions/app_settings'
import {logout} from '../actions/user'
import Router from 'next/router'
import { FullStory } from 'react-fullstory-component';
const {Content} = Layout
const {SubMenu} = Menu
import {withRouter} from 'next/router';
import {Helmet} from "react-helmet";
import Navigation from '../components/Navigation/navigation'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-147139648-1');


class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current: 'mail',
            isLogged: false,
            breadcrumb:{
                category:{
                    url:'',
                    name:''
                },
                subcategory:{
                    url:'',
                    title:''
                }
            },
            fullStorySettings:{
                debug: false,
                host: 'www.fullstory.com',
                orgKey: 'PDZM8'
            }
        };
        this.clickLogout = this.clickLogout.bind(this);
        this.rebuildBreadcrumbs = this.rebuildBreadcrumbs.bind(this);
    }


    componentDidUpdate (prevProps, prevState, snapshot) {
        if(prevProps.redux_router.location.pathname !== this.props.redux_router.location.pathname){
            ReactGA.pageview(window.location.pathname + window.location.search);
            console.log('pageview sent')
            this.rebuildBreadcrumbs()
        }
    }

    componentDidMount() {
        let {getVBRSettings} = this.props
        getVBRSettings().then((e) => {
        });
        this.rebuildBreadcrumbs();

    }

    rebuildBreadcrumbs(){
        if( typeof(this.props.settings.main_menu) !== 'undefined' &&
            typeof (this.props.settings.main_menu.mainMenu) !== 'undefined'){

            let categories = Object.keys(this.props.settings.main_menu.mainMenu).map(key => {
                return this.props.settings.main_menu.mainMenu[key];
            })

            let fullLink = this.props.redux_router.location.pathname.split('/')


            if(fullLink[0] === '' && fullLink[1] === ''){
                this.setState({
                    breadcrumb:{
                        category:{url:'/',name:'Home'},
                        subcategory:{
                            url:'',
                            name:'',
                        }
                    }
                })
            }

            if(fullLink[1] === 'ico'){
                this.setState({
                    breadcrumb:{
                        category:{url:'ico',name:'Initial Coin Offering'},
                        subcategory:{
                            url:'',
                            name:'',
                        }
                    }
                })
            }


            if(fullLink[1] === 'how-it-works'){
                this.setState({
                    breadcrumb:{
                        category:{url:'how-it-works',name:'How it works'},
                        subcategory:{
                            url:'',
                            name:'',
                        }
                    }
                })
            }


            if(typeof fullLink[2] !== 'undefined'){
                let currentCategory = categories.find(obj => obj.url === 'categories/'+fullLink[2]);
                if(currentCategory && typeof fullLink[3] !== 'undefined'){
                    let currentSubCategory = currentCategory['subcategories'].find(obj => obj.url === 'categories/'+fullLink[2]+'/'+fullLink[3]);
                    if(!this.state.breadcrumb.category.length > 0){
                        this.setState({
                            breadcrumb:{
                                category:currentCategory,
                                subcategory:currentSubCategory
                            }
                        })
                    }
                }
            }

        }


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
                    <meta charSet="utf-8" />
                    <title>VBR Network Marketplace</title>
                </Helmet>
                <FullStory settings={this.state.fullStorySettings} sessionId={'ad9iuya98d8347684'} custom={{key: 'vanea'}} />

                <Content style={{marginBottom: '10px'}}>
                    <Row>

                        <Col xs={6} sm={4} md={4} lg={6} xl={8} xxl={12}>
                            <Link href='/'>
                                <img src={'/static/images/vbrLogo.png'}
                                        style={{width: '80px', margin: '8px'}}
                                    />
                            </Link>
                        </Col>

                        <Col  xs={11} sm={16} md={16} lg={14} xl={12} xxl={9}>
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

                        <Col  xs={4} sm={4} md={4} lg={4} xl={4} xxl={3}>
                            {token === false && <Link href='/register'>
                                <a>
                                    <div className='post-job-btn' style={{marginTop:'10px',textAlign:'center'}}>
                                        <Button type='primary' style={{
                                            backgroundColor: '#2EC3AB',
                                            borderColor: '#2EC3AB'
                                        }}>Register</Button>
                                    </div>
                                </a>
                            </Link>}

                            {token !== false &&
                                <div style={{display: 'inline-block',marginTop:'13px'}}>
                                    <Button type='primary' style={{
                                    }}>
                                        <Link href='/jobs/add-job'>
                                            <a>
                                                Post job
                                            </a>
                                        </Link>
                                    </Button>

                                    <Button type='primary' style={{
                                        backgroundColor: '#2EC3AB',
                                        borderColor: '#2EC3AB',
                                        marginLeft:'5px'
                                    }}>
                                        <Link href='/dashboard'>
                                            Dashboard
                                        </Link>

                                    </Button>
                                </div>
                            }
                        </Col>

                    </Row>
                </Content>

                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{boxShadow:'rgb(185, 185, 185) 1px 2px 3px 1px'}}>
                        <div style={{margin:'0 auto'}}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 18,offset:3}}>
                                <Menu selectedKeys={[this.state.current]} mode='horizontal'>
                                    {menuItems}
                                </Menu>
                            </Col>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 18,offset:3}}>
                        <Breadcrumb style={{ marginLeft: '20px',paddingTop:'10px' }}>
                            <Breadcrumb.Item>
                                <a href={"/" + this.state.breadcrumb.category.url}>
                                    {this.state.breadcrumb.category.name}
                                </a>

                                { this.state.breadcrumb.subcategory.url.length > 0 &&
                                    <a href={"/" + this.state.breadcrumb.subcategory.url}> /
                                    {this.state.breadcrumb.subcategory.title} </a>}

                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        settings: state.settings,
        redux_router: state.router
    }
}


Header.propTypes = {
    user: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.instanceOf(Object).isRequired,
    router: PropTypes.instanceOf(Object).isRequired,
    getVBRSettings: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
}
export {Header}
export default connect(mapStateToProps, {getVBRSettings,logout})(withRouter(Header))
