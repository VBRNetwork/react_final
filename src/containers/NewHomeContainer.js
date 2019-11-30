import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import { Row, Col, Button, Menu, Icon, Input, Form, Dropdown, Avatar } from 'antd'
import Link from 'next/link'
import HeaderMenu from '../components/Elements/HeaderMenu'
import { isBrowser, isMobile } from 'react-device-detect'

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
            },
            particles_number : 70
        }

        this.handleChangeParticles = this.handleChangeParticles.bind(this);
    }

    handleChangeParticles(value) {
        this.setState({
            particles_number: value
        })
    }

    componentDidMount () {
        let number_particles = 60;

        if(isBrowser){
            number_particles = 80;
        }
        if(isMobile){
            number_particles = 30;
        }

        this.handleChangeParticles(number_particles);
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
            <Fragment>
                <div className='container background-header'>
                    <Particles
                        style={{ position: 'absolute' }}
                        params={{
                            particles: {
                                number: {
                                    value: this.state.particles_number
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
                        <Col xs={24} sm={24} md={{ span: 17, offset: 1 }} lg={{ span: 17, offset: 2 }}
                             xl={{ span: 17, offset: 3 }} xxl={{ span: 15, offset: 5 }}>
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
                                    <Row gutter={5}>
                                        <Col xs={24} md={7}>
                                            <Button className="btn-style" size="large">
                                                <Link href='/register'>
                                                    <a> <b>Join as Freelancer</b>
                                                    </a>
                                                </Link>
                                            </Button>
                                        </Col>
                                        <Col xs={24} md={7}>
                                            <Button className="btn-style" size="large">
                                                <Link href='/jobs/add-job'>
                                                    <a> <b>Post a job</b>
                                                    </a>
                                                </Link>
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>


                <div style={{ marginTop: '200px', marginBottom: '50px' }}>
                    <Row>
                        <Col xs={{ span: 21, offset: 2 }} sm={16} md={24} lg={9} xl={9} xxl={{ span: 6, offset: 3 }}>
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
                                        <Link href='/categories' as={'categories'}>
                                            <b style={{ color: '#FFF' }}>See all categories</b>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{ span: 19, offset: 1 }} sm={16} md={{ span: 16 }} lg={10} xl={9} xxl={{ span: 10 }}>
                            <div>
                                <Row>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <img className="categories-image img-responsive"
                                                 src="../../static/images/design/business_consultancy_image@1x.png"
                                                 alt=""/>
                                            <br/>
                                            <span className="categories-title">Business Consultancy</span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <img className="categories-image img-responsive"
                                                 src="../../static/images/design/customer_service_image@1x.png" alt=""/>
                                            <br/>
                                            <span className="categories-title">Customer Service</span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <img className="categories-image img-responsive"
                                                 src="../../static/images/design/design_and_creative_image@1x.png"
                                                 alt=""/>
                                            <br/>
                                            <span className="categories-title">Design & Creative</span>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <img className="categories-image img-responsive"
                                                 src="../../static/images/design/digital_marketing_image@1x.png"
                                                 alt=""/>
                                            <br/>
                                            <span className="categories-title">Digital Marketing</span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <img className="categories-image img-responsive"
                                                 src="../../static/images/design/it_and_programming_image@1x.png"
                                                 alt=""/>
                                            <br/>
                                            <span className="categories-title">IT & Programing</span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <img className="categories-image img-responsive"
                                                 src="../../static/images/design/writing_and_translation_image@1x.png"
                                                 alt=""/>
                                            <br/>
                                            <span className="categories-title">Writing & Translation</span>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '80px', marginTop: '120px' }}>
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

                <div>
                    <Row>
                        <Col xs={{ span: 20 }} sm={16} md={{ span: 12 }} lg={6} xl={6} xxl={{ span: 4, offset: 5 }}>
                            <div style={{ padding: '20px' }}>
                                <img src={'../../static/images/communicate_directly.svg'}/> <br/>
                                <span className={'communicate-directly'}>Communicate Directly</span>
                                <span className={'home-paragraph-1'}>
                                    <p>
                                        You can easily connect and communicate
                                        <br/>
                                        with a freelancer or recruiter directly with our chat feature.
                                    </p>
                                </span>
                            </div>
                        </Col>
                        <Col xs={{ span: 20 }} sm={16} md={{ span: 12 }} lg={6} xl={6} xxl={{ span: 4 }}>
                            <div style={{ padding: '20px' }}>
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
                            </div>
                        </Col>

                        <Col xs={{ span: 20 }} sm={16} md={{ span: 12 }} lg={6} xl={6} xxl={{ span: 4 }}>
                            <div style={{ padding: '20px' }}>
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
                            </div>
                        </Col>

                        <Col xs={{ span: 20 }} sm={16} md={{ span: 12 }} lg={6} xl={6} xxl={{ span: 4 }}>
                            <div style={{ padding: '20px' }}>
                                <img src={'../../static/images/get_paid_instantly.svg'}/> <br/>
                                <span className={'communicate-directly'}>Exchange You Money</span>
                                <span className={'home-paragraph-1'}>
                                    <p>
                                        All transactions are made with our Veelancing token.
                                        <br/>
                                        You can exchange tokens into any Crypto or currency with minimal fees or no fees at all.
                                    </p>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div style={{ margin: '50px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Button className={'vbr-btn-style'}>
                            <Link href='/how-it-works' as={'/how-it-works'}>
                                <b style={{ color: '#FFF' }}> How it Works</b>
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className={'home-investors-box'} style={{ position: 'relative' }}>
                    <div>
                        <Row>
                            <Col xs={{ span: 22 }} sm={16} md={12} lg={12} xl={{ span: 10 }}
                                 xxl={{ span: 8, offset: 4 }}>
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
                                    <Link href='/register' as={'/register'}>
                                        <b style={{ color: '#FFF' }}>Become an Investor</b>
                                    </Link>
                                </Button>
                            </Col>
                            <Col xs={24} sm={16} md={12} lg={12} xl={11} xxl={{ span: 8 }}>
                                <img className={'img-responsive'} style={{ marginTop: '150px' }}
                                     src="../../static/images/design/become_an_investor_image@2x.jpg" alt=""/>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div style={{ marginTop: '80px', marginBottom: '80px' }}>
                    <Row>
                        <Col xs={{ span: 22, offset: 2 }} sm={16} md={{ span: 12, push: 1 }} lg={{ span: 11, push: 2 }}
                             xl={{ span: 10, push: 2 }} xxl={{ span: 10, push: 2 }}>
                            <div className={'join-freelancer-box'}>
                                <span className={'join-freelancer-title'}>
                                    Be part of a community that
                                    <br/>
                                    owns the platform.
                                </span>
                                <p className={'join-freelancer-text'}>
                                    We believe in a true form of community.
                                    <br/>
                                    With Veelancing, everyone can contribute <br/> to the platform
                                    by requesting and voting <br/>
                                    changes and new features.
                                </p>
                                <Button className={'vbr-btn-style'}>
                                    <Link href='/register' as={'/register'}>
                                        <b style={{ color: '#FFF' }}> Join as Freelancer</b>
                                    </Link>
                                </Button>
                            </div>
                        </Col>
                        <Col xs={24} sm={16} md={12} lg={10} xl={{ span: 10 }} xxl={{ span: 8, offset: 0 }}>
                            <div>
                                <img className={'img-responsive'}
                                     src={'../../static/images/for_freelancers_imagery@2x.png'}/>
                            </div>
                        </Col>
                    </Row>
                </div>


                <Row>
                    <Col sm={16} md={12} lg={10} xl={{ span: 10, offset: 2 }} xxl={{ span: 8, offset: 2 }}>
                        <div>
                            <img className={'img-responsive'}
                                 src={'../../static/images/talent_seeker_imagery@1x.png'}/>
                        </div>
                    </Col>
                    <Col xs={{ span: 21 }}
                         sm={16}
                         md={{ span: 12, }}
                         lg={{ span: 10 }}
                         xl={{ span: 8, offset: 1 }}
                         xxl={{ span: 8 }}>

                        <div className={'join-freelancer-box'}>
                            <div className={'join-freelancer-title '}>
                                Find the best candidate
                                <br/>
                                for the job.
                            </div>
                            <p className={'join-freelancer-text'}>
                                We believe in a true form of community.<br/>
                                With Veelancing, everyone can contribute
                                <br/>
                                to the platform by requesting and voting <br/>
                                changes and new features.
                            </p>
                            <Button className={'vbr-btn-style mt35'}>
                                <Link href='/jobs/add-job' as={'/jobs/add-job'}>
                                    <b style={{ color: '#FFF' }}> Post a job</b>
                                </Link>
                            </Button>
                        </div>

                    </Col>
                </Row>

                <div style={{ marginTop: '100px', marginBottom: '100px', textAlign: 'center' }}>
                    <div className={'well-let-you-know-w'}>
                        We’ll let you know when we launch!
                    </div>
                    <div style={{ maxWidth: '300px', minWidth: '340px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center' }}>
                            <Input size={'large'} className={'launch-time-input'} style={{ marginTop: '20px' }}
                                   placeholder={'Email'}/>
                            <Button className={'vbr-btn-style'} style={{ marginTop: '20px' }}>
                                Get Notified!
                            </Button>
                        </div>
                    </div>
                    <Row>
                        <Col xs={24} sm={16} md={19} lg={24} xl={{ span: 22 }} xxl={{ span: 24 }}>
                            <div className={'home-privacy-policy-text'}>
                                <h4> We promise no spam!<span><a href="/"><b> <u> Privacy Policy</u> </b></a></span>
                                </h4>
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
