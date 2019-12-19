import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/home.css'
import { Carousel, Layout, Row, Col, Button, Card, Avatar } from 'antd'
import {
    isBrowser,
    isMobile,
    isTablet,
    isSmartTV
  } from "react-device-detect";
import Link from 'next/link'

const { Meta } = Card

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state= {
            particles: 30,
        };

        this.handleChangeParticles = this.handleChangeParticles.bind(this);
    }

    handleChangeParticles(value) {
        this.setState({
            particles: value,
        })
    }

    componentDidMount () {
        let number_particles = 30;

        if(isBrowser){
            number_particles = 45;
        }
        if(isMobile){
            number_particles = 20;
        }

        this.handleChangeParticles(number_particles);
    }

    render () {
     
        return (
            <Fragment>
                <div style={{ position: 'relative' }}>
                    <div className='container'
                         style={{ background: 'linear-gradient(rgb(46, 195, 171), rgb(35, 33, 33))' }}>
                        <Particles
                            style={{ 'position': 'absolute' }}
                            params={{
                                particles: {
                                    number: {
                                        value: this.state.particles
                                    },
                                    size: {
                                        value: 2
                                    },
                                    color:{
                                        value:'#FFF'
                                    }
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
                        />
                        <div style={{ padding: '80px' }}>
                            <Row type="flex" justify="space-around">
                                <Col xs={24} sm={24} md={24} lg={24} xl={{ span: 18 }}>
                                    <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                                        <div className='intro-text'>
                                            <h2 className='slogan'>
                                                Peer-to-peer Marketplace for Freelancers <br/> Powered by Blockchain
                                            </h2>
                                            <p className="subtext-css">
                                                Instant payments, Lowest Fees, Peer-to-peer interaction, Smart Contract
                                                based jobs
                                            </p>
                                            <Link href='/register'>
                                                <Button
                                                    className='ant-btn-lg'
                                                    type='primary'
                                                    style={{
                                                        backgroundColor: '#2EC3AB',
                                                        borderColor: '#2EC3AB'
                                                    }}>Join our platform
                                                </Button>
                                            </Link>
                                        </div>
                                    </Col>

                                    <Col xs={24} sm={14} md={14} lg={14} xl={14}>
                                        <img src={'../../static/images/asset_6.png'}
                                             style={{ height: '190px', marginLeft: '30%', marginTop: '60px' }}/>
                                        <img src={'../../static/images/asset_9.png'}
                                             style={{ marginLeft: '25%', height: '190px' }}/>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

               <Row style={{ background: '#ECECEC' }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={{ span: 18, offset: 3 }}
                         style={{ marginTop: '20px', marginBottom: '20px', background: '#FFF' }}>
                        <h1 style={{ textAlign: 'center', padding: '10px' }}>What jobs you can find?</h1>
                        <div style={{ width: '80%', margin: '0 auto', padding: '20px' }}>
                            <Row>
                                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                                    <div style={{ textAlign: 'center', cursor: 'pointer', padding: '20px' }}>
                                        <div>
                                            <img
                                                height='80'
                                                width='80'
                                                alt='171x180'
                                                src={'../../static/images/img-1.png'}
                                            />
                                            <br/>
                                            <div style={{ textAlign: 'center' }}><strong>Writing & Translation</strong>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                                    <div style={{ textAlign: 'center', cursor: 'pointer' }}>
                                        <div href='#link' style={{ cursor: 'pointer', padding: '20px' }}>
                                            <img
                                                height='80'
                                                width='80'
                                                alt='171x180'
                                                src={'../../static/images/img-2.png'}
                                            />
                                            <br/>
                                            <div style={{ textAlign: 'center' }}><strong>Web & Graphic Design</strong>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                                    <div style={{ textAlign: 'center', cursor: 'pointer' }}>
                                        <div href='#link' style={{ cursor: 'pointer', padding: '20px' }}>
                                            <img
                                                height='80'
                                                width='80'
                                                alt='171x180'
                                                src={'../../static/images/img-3.png'}
                                            />
                                            <br/>
                                            <div style={{ textAlign: 'center' }}><strong>Business
                                                Consultancy</strong></div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row gutter={8} align="middle" type="flex" justify="space-around">
                                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                                    <div style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        <div href='#link' style={{ cursor: 'pointer', padding: '20px' }}>
                                            <img
                                                height='80'
                                                width='80'
                                                alt='171x180'
                                                src={'../../static/images/img-5.png'}
                                            />
                                            <br/>
                                            <strong>IT & Programming</strong>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                                    <div style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        <div href='#link' style={{ cursor: 'pointer', padding: '20px' }}>
                                            <img
                                                height='80'
                                                width='80'
                                                alt='171x180'
                                                src={'../../static/images/img-06.png'}
                                            />
                                            <br/>
                                            <div style={{ textAlign: 'center' }}><strong>Digital Marketing</strong>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                                    <div style={{ cursor: 'pointer', textAlign: 'center' }}>
                                        <div href='#link' style={{ cursor: 'pointer', padding: '20px' }}>
                                            <img
                                                height='80'
                                                width='80'
                                                alt='171x180'
                                                src={'../../static/images/img-4.png'}
                                            />
                                            <br/>
                                            <strong>More Coming Soon</strong>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <div style={{ paddingBottom: '10px',paddingTop:'10px',background: 'rgb(236, 236, 236)' }}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24}  xl={24} xxl={{ span: 18, offset: 3 }}>
                            <Row>
                                <Col xs={24} sm={24} md={6} lg={6} xl={{span:5,offset:1}} xxl={{span:5,offset:1}}>
                                        <Card
                                            title={
                                                <div>
                                                    <strong>
                                                        Theo Ghizdareanu
                                                    </strong>
                                                    <br/>
                                                    <span>
                                                        3D Generalist Artist
                                                    </span>
                                                </div>
                                            }
                                            extra={<Avatar size={'large'} style={{ width: 70, height: 70 }}
                                                           src={'../../static/images/theo_freelancer.jpeg'}/>}>
                                            <Meta
                                                description={
                                                    <div>
                                                        <strong>
                                                            <p>
                                                                After working as a freelancer for 3 years and counting,
                                                                with a wide variety of clients from around the world
                                                                (UK, US, Austria, China, Australia etc),
                                                                I grew into a 3D Generalist expanding my skills and got
                                                                to enter into the CGI Industry.
                                                            </p>
                                                            <p>
                                                                In the present I am active in both worlds, modeling and
                                                                texturing low poly environments for games and apps,
                                                                but also creating realistic environments and products
                                                                for CGI needs, such as advertising firms and print
                                                                industry.
                                                            </p>
                                                        </strong>
                                                    </div>}
                                            />
                                        </Card>
                                </Col>
                                <Col xs={24} sm={24} md={6} lg={6} xl={{span:5,offset:1}} xxl={{span:5,offset:1}}>
                                        <Card
                                            title={
                                                <div>
                                                    <strong>
                                                        Freelancer 2
                                                    </strong>
                                                    <br/>
                                                    <span>
                                                                Web Developer
                                                            </span>
                                                </div>
                                            }
                                            extra={<Avatar size={'large'} icon='user'/>}
                                            style={{ width: 240 }}
                                        >
                                            <Meta
                                                description={
                                                    <div>
                                                        <strong>
                                                            <p>
                                                                I am a web developer, with 4 years experience, and with
                                                                a large portfolio.
                                                            </p>
                                                            <p>
                                                                I am very happy to try VBR Marketplace, and looking
                                                                forward to meet all of you !
                                                            </p>
                                                        </strong>
                                                    </div>}
                                            />
                                        </Card>
                                </Col>
                                <Col xs={24} sm={24} md={6} lg={6} xl={{span:5,offset:1}} xxl={{span:5,offset:1}}>
                                        <Card
                                            title={
                                                <div>
                                                    <strong>
                                                        Freelancer 3
                                                    </strong>
                                                    <br/>
                                                    <span>
                                                                SEO Specialist
                                                            </span>
                                                </div>
                                            }
                                            extra={<Avatar size={'large'} icon='user'/>}
                                            style={{ width: 240 }}
                                        >
                                            <Meta
                                                description={
                                                    <div>
                                                        <strong>
                                                            <p>
                                                                I am a SEO specialist, with 4 years experience, and with
                                                                a large portfolio.
                                                            </p>
                                                            <p>
                                                                I am very happy to try VBR Marketplace, and looking
                                                                forward to meet all of you !
                                                            </p>
                                                        </strong>
                                                    </div>}
                                            />
                                        </Card>
                                </Col>
                                <Col xs={24} sm={24} md={6} lg={6} xl={{span:5,offset:1}} xxl={{span:5,offset:1}}>
                                        <Card
                                            title={
                                                <div>
                                                    <strong>
                                                        Freelancer 3
                                                    </strong>
                                                    <br/>
                                                    <span>
                                                                            SEO Specialist
                                                                        </span>
                                                </div>
                                            }
                                            extra={<Avatar size={'large'} icon='user'/>}
                                            style={{ width: 240 }}
                                        >
                                            <Meta
                                                description={
                                                    <div>
                                                        <strong>
                                                            <p>
                                                                I am a SEO specialist, with 4 years experience, and with
                                                                a large portfolio.
                                                            </p>
                                                            <p>
                                                                I am very happy to try VBR Marketplace, and looking
                                                                forward to meet all of you !
                                                            </p>
                                                        </strong>
                                                    </div>}
                                            />
                                        </Card>
                                </Col>
                            </Row>


                            <div id='how-it-works' style={{ marginTop: '30px' }}>
                                <h2 className='text-center how-it-work-title'
                                    style={{ textAlign: 'center' }}
                                > What we offer ?
                                </h2>
                            </div>
                            <div>
                                <Row gutter={20}>
                                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                        <Card title={<div><strong><h3>Lowest Fees</h3></strong></div>} bordered={false}>
                                            <p>
                                                Time is money, in that we don’t want to waste either.
                                            </p>
                                            <p>
                                                This is why we implemented lowest fee on market,
                                                3% for each transaction between customer and freelancer.
                                            </p>
                                            <p>
                                                Even more, our Exchange Market fees will be dynamic, between 0% - 3%.
                                            </p>
                                            <br/>
                                            <br/>
                                        </Card>
                                    </Col>
                                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                        <Card title={<div><strong><h3>100% Transparency</h3></strong></div>}
                                              bordered={false}>
                                            <p>
                                                Customers will be able to trace the progress of their project
                                                in real time,
                                                due to our system that compares it to similar projects in our
                                                pre-existent library.
                                            </p>
                                            <p>
                                                This is a machine learning algorithm which allow VBR Platform
                                                to be among most transparent in the existing market.
                                            </p>
                                        </Card>
                                    </Col>
                                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                        <Card title={<div><strong><h3>Instant Payments</h3></strong></div>}
                                              bordered={false}>
                                            <p>
                                                All transactions with our token will be processed instantly,
                                                and in a highly secure environment.
                                            </p>
                                            <p>
                                                We simplify a lot the payment process for both freelancer and customer:
                                            </p>
                                            <p>
                                                Introducing automatic exchanges, free withdraws to bank account,
                                                or minimum exchange fees.
                                            </p>

                                        </Card>
                                    </Col>
                                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                        <Card title={<div><strong><h3>Exchange Market</h3></strong></div>}
                                              bordered={false}>
                                            <p>
                                                We want our users to feel as comfortable as possible.
                                            </p>
                                            <p>
                                                Therefore we are implementing an exchange market right on our
                                                platform.
                                            </p>
                                            <p>
                                                Our users can exchange crypto to fiat, crypto to crypto etc. with
                                                minimal fees, or no fees at all, based on out Terms & Conditions.
                                            </p>
                                            <br/>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Layout>
                    <div className="home-section" style={{ marginTop: '10px' }}>
                        <Row type="flex" justify="space-around">
                            <Col xs={24} sm={12} md={6} lg={8} xl={3}>
                                <img
                                    className='chair-tablet-image img-fluid'
                                    src={'../../static/images/asset_1.png'}
                                    style={{ marginTop: '50%' }}
                                />
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={8} xl={8}>
                                <Card
                                    bordered={false}
                                >
                                    <div className='middle-description-text'>
                                        <div className='footer-description-title'>
                                            <h3>What’s great about our platform?</h3>
                                        </div>
                                        <hr/>
                                        <div style={{ fontSize: 16 }} className='footer-description-content'>
                                            <h4>
                                                <p>
                                                    Lowest fee on market: 3% for jobs, and dynamic fee: 0% - 3% for
                                                    exchanges.
                                                </p>
                                                <p>
                                                    Mediation will be carried out by the smart contract
                                                    agreed upon by the parties and our Terms of Service, by the
                                                    community.
                                                </p>
                                                <p> We provide instant payments using <strong>VBR tokens</strong>, and
                                                    within 48
                                                    hours for fiat payouts.</p>
                                                <p>
                                                    Customer can follow the progress of his required product
                                                    in real time, based on project
                                                </p>
                                                <p>
                                                    Using Blockchain technology to simplify,
                                                    reduce costs, decentralize, and to build a community.
                                                </p>
                                            </h4>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={8} xl={4}>
                                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                                    <Button style={{
                                        backgroundColor: '#2EC3AB',
                                        borderColor: '#2EC3AB'
                                    }} className='vbr-button' type={'primary'}>
                                        <a href={'../../static/files/vbr_network_whitepaper.docx'}> Download
                                            Whitepaper</a>
                                    </Button>
                                    <br/>
                                    <span className='small' style={{ fontSize: '11px' }}>
                                        Read more about VBR Platform
                                    </span>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <img
                                        src={'../../static/images/asset_4.png'}
                                        style={{ marginTop: '20%' }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Layout>
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

HomeContainer.propTypes = {}

export default connect(mapStateToProps, {})(HomeContainer)
