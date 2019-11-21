import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import { Row, Col, Button, Menu, Icon, Input, Form, Dropdown, Avatar } from 'antd'
import Link from 'next/link'

class NewHomeContainer extends Component {

    constructor (props) {
        super(props)

        this.state = {
            current: 'mail',
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
            }
        }
    }

    componentDidMount () {

    }

    render () {

        let token = false
        if (this.props.user.token) {
            token = true
        }

        let loginButton = (
            <Button ghost size="large"><Link href='/login'>
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
                                    <Link href='/about'>
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
                        <Col xs={24} sm={16} md={24} lg={{ span: 12 }} xl={12} xxl={{ span: 11, offset: 1 }}>
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
                                            <Col span={10}>
                                                <Button className="btn-style" size="large">
                                                    <Link href='/register'>
                                                        <a>                                                                                                                                                   <b>Join as Freelancer</b>
                                                        </a>
                                                    </Link>
                                                </Button>
                                            </Col>
                                            <Col span={10}>
                                                <Button className="btn-style" size="large">
                                                    <Link href='/post-a-job'>
                                                        <a>                                                                                                                                                  <b>Post a job</b>
                                                        </a>
                                                    </Link>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} sm={16} md={18} lg={{ span: 12 }} xl={12} xxl={{ span: 11, offset: 1 }}>
                            <div className="image-box">
                                <img style={{ width: '100%' }} src="../../static/images/design/header_image@2x.png"
                                     alt=""/>
                            </div>
                        </Col>
                    </Row>
                </div>


                <div style={{ marginTop: '200px', marginBottom: '50px' }}>
                    <Row>
                        <Col xs={24} sm={16} md={24} lg={24} xl={8} xxl={{ span: 8, offset: 1 }}>
                            <div className="intro-text">
                                <h2 className="find-the-job-you-lov">
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
                        <Col xs={24} sm={16} md={{ span: 18, offset: 4 }} lg={17} xl={12} xxl={{ span: 14, offset: 1 }}>
                            <div>
                                <Row>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={8}>
                                        <img className="categories-image"
                                             src="../../static/images/design/business_consultancy_image@1x.png" alt=""/>
                                        <br/>
                                        <span className="categories-title">Writing & Translation</span>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={8}>
                                        <img className="categories-image"
                                             src="../../static/images/design/customer_service_image@1x.png" alt=""/>
                                        <br/>
                                        <span className="categories-title">Writing & Translation</span>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={8}>
                                        <img className="categories-image"
                                             src="../../static/images/design/design_and_creative_image@1x.png" alt=""/>
                                        <br/>
                                        <span className="categories-title">Writing & Translation</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={8}>
                                        <img className="categories-image"
                                             src="../../static/images/design/digital_marketing_image@1x.png" alt=""/>
                                        <br/>
                                        <span className="categories-title">Writing & Translation</span>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={8}>
                                        <img className="categories-image"
                                             src="../../static/images/design/it_and_programming_image@1x.png" alt=""/>
                                        <br/>
                                        <span className="categories-title">Writing & Translation</span>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={8}>
                                        <img className="categories-image"
                                             src="../../static/images/design/writing_and_translation_image@1x.png"
                                             alt=""/>
                                        <br/>
                                        <span className="categories-title">Writing & Translation</span>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '80px' }}>
                    <div style={{ margin: '70px' }}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 24 }}>
                                <div>
                                    <h2 className="why-veelancing">Why Veelancing?</h2>
                                </div>
                                <div>
                                    <h3 className="we-are-a-decentraliz">
                                        We are a decentralized marketplace for freelancers all over the world.
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div style={{ marginLeft: '200px', marginRight: '200px' }}>
                    <Row>

                        <Col xs={24} sm={16} md={{ span: 12 }} lg={12} xl={6} xxl={{ span: 6 }}>
                            <img src={'../../static/images/communicate_directly.svg'}/> <br/>
                            <span className={'communicate-directly'}>Communicate Directly</span>
                            <span className={'home-paragraph-1'}>
                                <p>
                                    You can easily connect and communicate
                                    <br/>
                                    with a freelancer or recruiter directly with our chat feature.
                                </p>
                            </span>
                        </Col>


                        <Col xs={24} sm={16} md={{ span: 12 }} lg={12} xl={6} xxl={{ span: 6 }}>
                            <img src={'../../static/images/smart_contracts.svg'}/><br/>
                            <span className={'communicate-directly'}>Create Smart Contracts</span>
                            <div className={'home-paragraph-1'}>
                                <p>
                                    As a freelancer or recruiter
                                    <br/>
                                    you can create a contract together
                                    <br/>
                                    and make the final agreement on your specific terms.
                                </p>
                            </div>
                        </Col>

                        <Col xs={24} sm={16} md={{ span: 12 }} lg={12} xl={6} xxl={{ span: 6 }}>
                            <img src={'../../static/images/get_paid_instantly.svg'}/><br/>
                            <span className={'communicate-directly'}>Get Paid Instantly</span>
                            <div className={'home-paragraph-1'}>
                                <p>
                                    The payments are processed instantly
                                    and in a highly secure environment
                                    <br/>
                                    created with Blockchain technology.
                                </p>
                            </div>
                        </Col>

                        <Col xs={24} sm={16} md={{ span: 12 }} lg={12} xl={6} xxl={{ span: 6 }}>
                            <img src={'../../static/images/get_paid_instantly.svg'}/> <br/>
                            <span className={'communicate-directly'}>Exchange You Money</span>
                            <span className={'home-paragraph-1'}>
                                <p>
                                    All transactions are made with our Veelancing token.
                                    <br/>
                                    You can exchange tokens into any Crypto or currency with minimal fees or no fees at all.
                                </p>
                            </span>
                        </Col>

                    </Row>
                </div>


                <div style={{margin:'50px'}}>
                    <Row>
                        <Col xs={24}
                             md={{ span: 12, offset: 9 }}
                             lg={{ span: 12, offset: 10 }}
                             xl={{ span: 12, offset: 10 }}
                             xxl={{ span: 12, offset: 10 }}>

                            <Button className={'vbr-btn-style'}>
                                How it Works
                            </Button>
                        </Col>
                    </Row>
                </div>

                <div className={'home-investors-box'} style={{background:'url(../../static/images/become_an_investor.jpg)'}}>
                    <div style={{padding:'200px'}}>
                        <Row>
                            <Col xs={24} sm={16} md={12} lg={1} xl={6} xxl={{ span: 24 }}>
                                <div className={'investors-title'}>
                                    Help us create the first
                                    <br/>
                                    Blockchain Freelancer Community
                                </div>
                                <p className={'investors-text'}>
                                    Made by freelancers for freelancers, Veelancing aims to help people
                                    find jobs and talent fast and easy.
                                    <br/>
                                    With out Blockchain technology we give everyone the opportunity
                                    to have access to instant payment and cryptocurrencies.
                                </p>
                                <Button className={'vbr-btn-style mt35'}>
                                    Become an Investor
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>


                <div style={{marginTop:'80px',marginBottom:'80px'}}>
                    <Row>
                        <Col xs={24} sm={16} md={{ span: 12, push: 1 }} lg={{ span: 11, push: 2 }}
                             xl={{ span: 12, push: 2 }} xxl={{ span: 12, push: 4 }}>
                            <div className={'join-freelancer-box'}>
                                <span className={'join-freelancer-title'}>
                                    Be part of a community that
                                    <br/>
                                    owns the platform.
                                </span>
                                <p className={'join-freelancer-text'}>
                                    We believe in a true form of community.
                                    <br/>
                                    With Veelancing, everyone can contribute to the platform by requesting and voting
                                    changes and new features.
                                </p>
                                <Button className={'vbr-btn-style'}>
                                    Join as Freelancer
                                </Button>
                            </div>
                        </Col>
                        <Col xs={24} sm={16} md={{ span: 12 }} lg={11} xl={{ span: 12 }} xxl={{ span: 12 }}>
                            <div>
                                <img style={{ width: 534, height: 640 }}
                                     src={'../../static/images/for_freelancers_imagery@2x.png'}/>
                            </div>
                        </Col>
                    </Row>
                </div>


                <Row>
                    <Col xs={24} sm={16} md={12} lg={10} xl={{ span: 12}} xxl={{ span: 8, offset:2 }}>
                        <div>
                            <img style={{ width: 'auto' }}
                                 src={'../../static/images/talent_seeker_imagery@1x.png'}/>
                        </div>
                    </Col>
                    <Col xs={24} sm={16}
                         md={{ span: 12, }}
                         lg={{ span: 10, offset:4}}
                         xl={{ span: 12 }}
                         xxl={{ span: 8 }}>

                        <div className={'join-freelancer-box'}>
                            <div className={'join-freelancer-title '}>
                                Find the best candidate
                                <br/>
                                for the job.
                            </div>
                            <p className={'join-freelancer-text'}>
                                We believe in a true form of community.
                                <br/>
                                With Veelancing, everyone can contribute to the platform by requesting and voting
                                changes and new features.
                            </p>
                            <Button className={'vbr-btn-style mt35'}>
                                Post a job
                            </Button>
                        </div>

                    </Col>
                </Row>

                <div  style={{marginTop:'100px',marginBottom:'100px'}}>
                    <div className={'well-let-you-know-w'}>
                        We’ll let you know when we launch!
                    </div>
                    <Row>
                        <Col xs={24} sm={16}
                             md={{ span: 5, offset:8}}
                             lg={{ span: 5, offset:6}}
                             xl={{ span: 7, offset:6}}
                             xxl={{ span: 5, offset:8}}>

                            <Input size={'large'} className={'launch-time-input'} placeholder={'Email'}/>
                        </Col>
                        <Col xs={24} sm={5} md={{ span: 5 }} lg={{ span: 5 }} xl={{ span: 5}} xxl={{span: 5}}>
                            <Button className={'vbr-btn-style'}>
                                Get Notified!
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={16} md={19} lg={24} xl={{ span: 22 }} xxl={{ span: 24 }}>
                            <div className={'home-privacy-policy-text'}>
                                <h4> We promise no spam!<span><a href="/"><b> <u> Privacy Policy</u> </b></a></span></h4>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Fragment>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

NewHomeContainer.propTypes = {}

export default connect(mapStateToProps, {})(NewHomeContainer)
