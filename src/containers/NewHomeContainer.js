import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/home.css'
import { Carousel, Layout, Row, Col, Button, Card, Avatar, Menu, Icon, Input, Form } from 'antd'
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
            <Button ghost size="large"><Link  href='/register'>
                <a><b>Log in</b></a>
            </Link>
            </Button>
        );



        let joinButton = (
            <Button size="large" style={{marginLeft:'10px'}}>
                <Link  href='/register'>
                    <a><b>Register</b></a>
                </Link>
            </Button>
        );



        return (
            <Fragment>
                <div className='container background-header'>
                    <Particles
                        style={{ position: 'absolute' }}
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
                        <Col xs={24} sm={4} md={2} lg={4} xl={6} xxl={10}>
                            <div className="logo-box">
                                <Link href='/'>
                                    <span class="logo">VEELANCING</span>
                                </Link>
                            </div>
                        </Col>

                        <Col xs={24} sm={16} md={12} lg={11} xl={10} xxl={8}>
                            <Menu selectedKeys={[this.state.current]} mode='horizontal' style={{
                                marginTop: '5px',
                                float: 'right',
                                paddingRight: '20px',
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
                                    <Link href='/about'>
                                        <a className="menu-item"> <Icon style={{ fontSize: 17 }} type='bulb'/> About Us</a>
                                    </Link>
                                </Menu.Item>
                            </Menu>

                        </Col>

                        <Col xs={24} sm={16} md={12} lg={11} xl={10} xxl={6}>

                            <div style={{ marginTop: '17px', float: 'right', marginRight: '10%' }}>
                                {token === false && loginButton}
                                {token === false && joinButton}
                            </div>

                        </Col>

                    </Row>

                    <Row>
                        <Col xxl={{ span: 11, offset: 1 }}>
                            <div className="intro-text">
                                <div><span className="coming-soon">👉🏻 Coming Soon!</span></div>
                                <h1 className="a-blockchain-marketp">
                                    <span className="big">A blockchain Marketplace<br/> for Freelancers </span>
                                </h1>
                                <div className="" style={{ marginTop: '50px', marginBottom: '50px' }}>
                                        <span className="stay-up-to-date">
                                           Be part of our community to find a job or hire experts. <br/>
                                           We are launching soon, but until then, join our BETA version!
                                        </span>
                                </div>
                                <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                                    <Form layout='inline'>
                                        <Row gutter={24}>
                                            <Col span={8}>
                                                <Button className="btn-style" size="large"><b>Join as
                                                    Freelancer</b></Button>
                                            </Col>
                                            <Col span={8}>
                                                <Button className="btn-style" size="large"><b>Post a job</b></Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={{ span: 11, offset: 1 }}>
                            <div className="">
                                <img style={{ width: '100%' }} src="../../static/images/design/header_image@2x.png"
                                     alt=""/>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div style={{ marginTop: '200px', marginBottom: '50px' }}>
                    <Row>
                        <Col xxl={{ span: 8, offset: 1 }}>
                            <div className="intro-text">
                                <h2 className="find-the-job-you-lov ">
                                    Find the job you love.
                                </h2>
                                <div className="" style={{ marginTop: '50px', marginBottom: '50px' }}>
                                    <span className="choose-from-a-vast-p ">
                                      Choose from a vast pool of companies in over 85 industries.
                                    </span>
                                </div>
                                <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                                    <Button className="vbr-btn-style">
                                        See all Categories
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={{ span: 14, offset: 1 }}>
                            <div>
                                <Row gutter={[10, 20]}>
                                    <Col xxl={8}>
                                        <img className="categories-image"
                                             src="../../static/images/design/business_consultancy_image@1x.png" alt=""/>
                                        <br/>
                                        <span className="categories-title">Writing & Translation</span>
                                    </Col>
                                    <Col xxl={8}>
                                        <img className="categories-image"
                                             src="../../static/images/design/customer_service_image@1x.png" alt=""/>
                                        <br/>
                                        <span className="categories-title">Writing & Translation</span>
                                    </Col>
                                    <Col xxl={8}>
                                        <img className="categories-image"
                                             src="../../static/images/design/design_and_creative_image@1x.png" alt=""/>
                                        <br/>
                                        <span className="categories-title">Writing & Translation</span>
                                    </Col>
                                </Row>
                                <Row gutter={[10, 20]}>
                                    <Col xxl={8}>
                                        <img className="categories-image"
                                             src="../../static/images/design/digital_marketing_image@1x.png" alt=""/>
                                        <br/>
                                        <span className="categories-title">Writing & Translation</span>
                                    </Col>
                                    <Col xxl={8}>
                                        <img className="categories-image"
                                             src="../../static/images/design/it_and_programming_image@1x.png" alt=""/>
                                        <br/>
                                        <span className="categories-title">Writing & Translation</span>
                                    </Col>
                                    <Col xxl={8}>
                                        <img className="categories-image"
                                             src="../../static/images/design/writing_and_translation_image@1x.png" alt=""/>
                                        <br/>
                                        <span className="categories-title">Writing & Translation</span>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>
                </div>


                <div style={{ marginTop: '150px', marginBottom: '50px' }}>
                    <Row>
                        <Col xxl={{ span: 24}}>
                            <div>
                                <h2 className="why-veelancing">Why Veelancing?</h2>
                            </div>
                            <div>
                               <h3 className="we-are-a-decentraliz"> We are a decentralized marketplace for freelancers all over the world.</h3>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col xxl={{ span: 6, offset:1}}>
                          <img src={'../../static/images/communicate_directly.svg'}/>
                          <br />
                          <br />
                          <span className={'communicate-directly'}>Commuincate Directly</span>
                          <br />
                          <br />
                          <span className={'home-paragraph-1'}>
                              <p>
                                You can easily connect and communicate
                                <br />
                                with a freelancer or recruiter directly with our chat feature.
                              </p>
                          </span>
                        </Col>
                        <Col xxl={{ span: 6}}>
                            <img src={'../../static/images/smart_contracts.svg'}/>
                            <br />
                            <br />
                            <span className={'communicate-directly'}>Create Smart Contracts</span>
                            <br />
                            <br />
                            <span className={'home-paragraph-1'}>
                              <p>
                                As a freelancer or recruiter you can create a contract together
                                <br />
                                and make the final agreement on your specific terms.
                              </p>
                          </span>
                        </Col>
                        <Col xxl={{ span: 6}}>
                            <img src={'../../static/images/get_paid_instantly.svg'}/>
                            <br />
                            <br />
                            <span className={'communicate-directly'}>Get Paid Instantly</span>
                            <br />
                            <br />
                            <span className={'home-paragraph-1'}>
                              <p>
                                The payments are processed instantly and in a highly secure environment
                                <br />
                                created with Blockchain technology.
                              </p>
                          </span>
                        </Col>
                        <Col xxl={{ span: 5}}>
                            <img src={'../../static/images/get_paid_instantly.svg'}/>
                            <br />
                            <br />
                            <span className={'communicate-directly'}>Exchange You Money</span>
                            <br />
                            <br />
                            <span className={'home-paragraph-1'}>
                              <p>
                                All transactions are made with our Veelancing token.
                                <br />
                                You can exchange tokens into any Crypto or currency with minimal fees or no fees at all.
                              </p>
                          </span>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xxl={{span: 12, offset: 10}}>
                            <Button className={'vbr-btn-style'}>
                                How it Works
                            </Button>
                        </Col>
                    </Row>
                        <br />
                        <br />
                        <br />
                        <div className={'home-investors-box'}>
                            <Row>
                                <Col xxl={{span: 24}}>
                                    <div className={'investor-box'}>
                                        <img  className={'investors-img'} src={'../../static/images/become_an_investor.jpg'}/>
                                    </div>
                                    <div className={'investors-text-box'}>
                                    <span className={'investors-title'}>
                                        Help us create the first
                                        <br />
                                        Blockchain Freelancer Community
                                    </span>
                                    <br />
                                    <br />
                                    <br />
                                    <p className={'investors-text'}>
                                        Made by freelancers for freelancers, Veelancing aims to help people find jobs and talent fast and easy.
                                        <br/>
                                        With out Blockchain technology we give everyone the opportunity to have access to instant payment and cryptocurrencies.
                                    </p>
                                    <br />
                                    <br />
                                    <br />
                                    <Button className={'vbr-btn-style'}>
                                        Become an Investor
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Row>
                        <Col xxl={{span: 12, push: 4}}>
                            <div className={'join-freelancer-box'}>
                                    <span className={'join-freelancer-title'}>
                                        Be part of a community that
                                        <br />
                                        owns the platform.
                                    </span>
                                <br />
                                <br />
                                <br />
                                <p className={'join-freelancer-text'}>
                                    We belive in a true form of community.
                                    <br/>
                                    With Veelancing, everyone can contribute to the platform by requesting and voting changes and new features.
                                </p>
                                <br />
                                <br />
                                <br />
                                <Button className={'vbr-btn-style'}>
                                    Join as Freelancer
                                </Button>
                            </div>
                        </Col>
                        <Col xxl={{span: 12}}>
                            <div>
                                <img style={{width: 534, height: 640}} src={'../../static/images/for_freelancers_imagery@2x.png'} />
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Row>
                        <Col xxl={{span: 12, push: 4}}>
                            <div>
                                <img style={{width: 534, height: 640}} src={'../../static/images/talent_seeker_imagery@1x.png'} />
                            </div>
                        </Col>
                        <Col xxl={{span: 12}}>

                            <div className={'join-freelancer-box'}>
                                    <span className={'join-freelancer-title'}>
                                        Find the best canditate
                                        <br />
                                        for the job.
                                    </span>
                                <br />
                                <br />
                                <br />
                                <p className={'join-freelancer-text'}>
                                    We belive in a true form of community.
                                    <br/>
                                    With Veelancing, everyone can contribute to the platform by requesting and voting changes and new features.
                                </p>
                                <br />
                                <br />
                                <br />
                                <Button className={'vbr-btn-style'}>
                                    Join as Freelancer
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className={'launch-time-text'}>
                    <span >
                        We’ll let you know when we launch!
                    </span>
                    <br />
                    <br />
                    <Row>
                        <Col xxl={{span: 8, push: 6}}>
                            <Input size={'large'} className={'launch-time-input'} placeholder={'Email'}/>
                        </Col>
                        <Col xxl={{span: 14, pull: 1}}>
                            <Button className={'vbr-btn-style'}>
                                Get Notified!
                            </Button>
                        </Col>
                    </Row>
                        <div className={'home-privacy-policy-text'}>
                            <span>
                                We promise no spam!
                                <br />
                                <a>
                                    Privacy Policy
                                </a>
                            </span>
                        </div>
                    </div>
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
