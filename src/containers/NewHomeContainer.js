import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/home.css'
import { Carousel, Layout, Row, Col, Button, Card, Avatar, Menu, Icon } from 'antd'
import Link from 'next/link'

const { Meta } = Card

class NewHomeContainer extends Component {

    constructor(props){
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
        }
    }

    componentDidMount () {
    }

    render () {

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


        return (
            <Fragment>
                    <div className='container background-header' >
                        <Particles
                            style={{position:'absolute'}}
                            params={{
                                particles: {
                                    number: {
                                        value: 70
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

                       </Row>

                        <Row>
                            <Col>
                                <div>
                                    <br/>
                                    <br/>
                                    <h1 className="a-blockchain-marketp"> <span className="big">A Blockchain Marketplace for Freelancers</span></h1>
                                    <div className="a-blockchain-marketp">
                                        <span className="mid">
                                            Be part of our community to find a job or hire experts.</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
            </Fragment>
        )
    }

    _goToAbout = () => {
        this.props.router.push('/about')
    }
}

function mapStateToProps (state) {
    return {
        user:state.user
    }
}

NewHomeContainer.propTypes = {}

export default connect(mapStateToProps, {})(NewHomeContainer)
