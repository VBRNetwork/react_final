import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Row, Col, Layout, Breadcrumb, List, Dropdown, Avatar } from 'antd'
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
import Head from 'next/head'

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
                    name:'',
                    meta_description: ''
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
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
    }

    
    handleChangeCategory(event){
        this.setState({
            category: event.target.value,
        })
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if(prevProps.redux_router.location.pathname !== this.props.redux_router.location.pathname){
            ReactGA.pageview(window.location.pathname + window.location.search);
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

        let generalMetaDescription = 'Peer-to-peer Marketplace for Freelancers Powered by Blockchain.Instant payments, Lowest Fees, Peer-to-peer interaction, Smart Contract based jobs.';

        if( typeof(this.props.settings.main_menu) !== 'undefined' &&
            typeof (this.props.settings.main_menu.mainMenu) !== 'undefined'){

            let categories = Object.keys(this.props.settings.main_menu.mainMenu).map(key => {
                return this.props.settings.main_menu.mainMenu[key];
            })

            let fullLink = this.props.redux_router.location.pathname.split('/')


            if(fullLink[0] === '' && fullLink[1] === ''){
                this.setState({
                    breadcrumb:{
                        category:{url:'/',name:'Home', meta_description: generalMetaDescription},
                        subcategory:{
                            url:'',
                            title:'',
                            metaDescription: generalMetaDescription,
                        }
                    }
                })
            }

            if(fullLink[1] === 'ico'){
                this.setState({
                    breadcrumb:{
                        category:{url:'ico',name:'Initial Coin Offering',meta_description: generalMetaDescription},
                        subcategory:{
                            url:'',
                            title:'',
                            metaDescription: generalMetaDescription
                        }
                    }
                })
            }


            if(fullLink[1] === 'how-it-works'){
                this.setState({
                    breadcrumb:{
                        category:{url:'how-it-works',name:'How it works',meta_description: generalMetaDescription},
                        subcategory:{
                            url:'',
                            title:'',
                            metaDescription: generalMetaDescription
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
        let {logout} = this.props
       logout().then(() => {
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
                <Helmet >
                    
                    <meta charSet="utf-8" />
                    
                    <title>{this.state.breadcrumb.category.name}
                        {this.state.breadcrumb.subcategory.title && " - " + this.state.breadcrumb.subcategory.title}
                         - Veelancing
                    </title>
                    <meta name="description" content={this.state.breadcrumb.category.metaDescription}/>

                </Helmet>
                
                <FullStory settings={this.state.fullStorySettings} sessionId={'ad9iuya98d8347684'} custom={{key: 'vanea'}} />

                <Content style={{marginBottom: '10px'}}>
                    <Row>

                        <Col xs={24} sm={4} md={2} lg={4} xl={6} xxl={9}>
                            <div className="logo-img">
                                <Link href='/'>
                                    <img src={'/static/images/vbr_logo.png'}
                                         style={{width: '80px', margin: '8px'}}
                                    />
                                </Link>
                            </div>
                        </Col>

                        <Col  xs={24} sm={16} md={12} lg={11} xl={10} xxl={10}>
                            <Menu selectedKeys={[this.state.current]} mode='horizontal' style={{marginTop:'5px',float:'right',paddingRight:'20px'}}>
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
                                    {token === false && loginButton}
                                </Menu>
                        </Col>

                        <Col  xs={24} sm={4} md={10} lg={9} xl={8} xxl={5}>
                            {token === false && <Link href='/register'>
                              <div>
                                  <a>
                                      <div className='post-job-btn' style={{marginTop:'10px',textAlign:'center'}}>
                                          <Button type='primary' style={{
                                              backgroundColor: '#2EC3AB',
                                              borderColor: '#2EC3AB'
                                          }}>Register</Button>
                                      </div>
                                  </a>
                              </div>
                            </Link>}

                            {token !== false &&
                                <div style={{marginTop:'10px'}}>
                                    <Button
                                             type='primary'
                                             style={{
                                                 backgroundColor: '#2EC3AB',
                                                 borderColor: '#2EC3AB'
                                             }}>
                                        <Link href='/jobs/add-job'>
                                            <a>
                                                Post job
                                            </a>
                                        </Link>
                                    </Button>

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
                                        <div style={{ color: '#FFF', marginLeft: '18%',display: 'inline'}}
                                             className='ant-dropdown-link'>
                                            <Avatar src={'https://i.pravatar.cc/150?img=3'} size='large' icon='user' style={{
                                                backgroundColor: '#2ec3ab',
                                                cursor: 'pointer',
                                            }}/>
                                        </div>
                                    </Dropdown>
                                </div>
                            }
                        </Col>

                    </Row>
                </Content>

                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{
                        background: 'rgba(26, 29, 40, 0.86)',
                        boxShadow:'rgb(185, 185, 185) 0px 0px 20px 0px'}}>
                        <div style={{margin:'0 auto'}}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 18,offset:3}}>
                                <Menu style={{background:'transparent',color: '#FFF',borderBottom:'0px'}} selectedKeys={[this.state.current]} mode='horizontal'>
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
