import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Carousel, Layout, Row, Col, Button, Card, Input, Avatar, Empty, Breadcrumb, Form, Icon, Statistic } from 'antd'
import "../styles/base.css"
import HeaderMenu from '../components/Elements/HeaderMenu'
const { TextArea } = Input
const { Meta } = Card

export default class NewIcoContainer extends Component {

    render() {

        const { Countdown } = Statistic;
        const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

        function onFinish() {
            console.log('finished!');
        }

        return (
            <div >
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
                        <HeaderMenu />
                    <Row>
                        <div className="intro-text">
                            <Col xs={24} sm={16}>
                                <h1 className="invest-in-the-first">
                                    <span className="big">Invest in the first</span></h1>
                                <h1 className="invest-in-the-first">Blockchain Community for</h1>
                                <h1 className="invest-in-the-first">Freelancers</h1>
                                <br />
                                <br />
                                <p className="stay-up-to-date-and">Stay up to date, and get notified about when we open the Initial Coin Offering</p>
                                <Row>
                                    <Col span={14}>
                                        <div className="example-input">
                                            <Input className="ico-email-reg" size="large" placeholder="Email" />
                                            <Button className="get-notified">Get Notified!</Button>
                                        </div>
                                        <div>
                                            <p className="no-spam">We promise no spam! Privacy Policy</p>
                                        </div>
                                    </Col>
                                </Row>
                                </Col>
                            </div>
                            <div>
                                <Col xs={24} sm={6}>
                                    <div className="count-down">
                                    </div>
                                </Col>
                                <br />
                            </div>
                        </Row>

                        <br />
                        <br />
                        <br />
                </div>
                <br />
                <br />
                <br />
                <Row>
                    <Col xs={24} sm={16} md={{ span: 12, push: 1 }} lg={{ span: 11, push: 2 }} xl={{ span: 12, push: 2 }} xxl={{ span: 12, push: 4 }}>
                        <div className={'join-freelancer-box'} style={{marginLeft: "5px"}}>
                            <span className={'why-veelancing'}>
                                Why Veelancing?</span>
                            <br />
                            <br />
                            <br />
                            <p className="investors-text">
                                Veelancing is a decentralized platform for freelancers and talent seekers from all over the world.
                                Here, you can find the job you love or hire experts that fit your needs.</p>
                            <p className="investors-text">
                                With the help of Blockchain technology, we created a transparent and flexible platform that belongs to the community.<br />
                                Everyone can contribute to the platform by requesting and voting changes and new features.</p>
                            <p className="investors-text">With Veelancing, we give everyone the opportunity to have access to instant payment and cryptocurrencies.</p>
                            <br />
                            <br />
                            <br />
                            <Button className={'vbr-btn-style'} style={{marginLeft: "15px"}}>
                                Learn More
                            </Button>
                        </div>
                    </Col>
                    <Col xs={24} sm={16} md={{ span: 12, push: 4 }} lg={11} xl={{ span: 12 }} xxl={{ span: 12 }}>
                        <br />
                        <br />
                        <br />
                        <div>
                            <div className={"geometric-particles"}>
                                <img src={'../../static/images/geometric_particles.svg'} />
                            </div>
                            <div>
                                <img className={"coins"} src={'../../static/images/coins_photo@1x.jpg'} style={{marginLeft: "15px"}} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <br />
                    <br />
                    <br />
                    <div className='rectangle-copy' style={{ position: 'relative' }}>
                        <Col xs={24} sm={12} md={12} >
                            <div className={'the-problem'}>
                                The Problem
                        </div>
                            <br />
                            <br />
                            <p className="veelancing-is-a-dece">
                                Veelancing is a decentralized platform for freelancers and talent seekers from all over the world.
                                Here, you can find the job you love or hire experts that fit your needs.
                        </p>
                            <p className="veelancing-is-a-dece">
                                With the help of Blockchain technology, we created a transparent and flexible platform that belongs to the community.
                                Everyone can contribute to the platform by requesting and voting changes and new features.
                        </p>
                            <p className="veelancing-is-a-dece">
                                With Veelancing, we give everyone the opportunity to have access to instant payment and cryptocurrencies.
                        </p>
                        </Col>

                        <Col xs={24} sm={12} md={12}>
                            <div className={'the-problem'}>
                                The Solution
                        </div>
                            <br />
                            <br />
                            <p className="veelancing-is-a-dece">
                                Veelancing is a decentralized platform for freelancers and talent seekers from all over the world.
                                Here, you can find the job you love or hire experts that fit your needs.
                        </p>
                            <p className="veelancing-is-a-dece">
                                With the help of Blockchain technology, we created a transparent and flexible platform that belongs to the community.
                                Everyone can contribute to the platform by requesting and voting changes and new features.
                        </p>
                            <p className="veelancing-is-a-dece">
                                With Veelancing, we give everyone the opportunity to have access to instant payment and cryptocurrencies.
                        </p>
                        </Col>
                    </div>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col span={12} push={1}>
                        <h1 className={'the-blockchain-techn'}>
                            The Blockchain Technology
                        </h1>
                        <p className="hotographs-are-a-wa">
                            Photographs are a way of preserving a moment in our lives for the rest of our lives.
                            Many of us have at least been tempted at the flashy array of photo printers which seemingly
                            leap off the shelves at even the least tech-savvy.</p>
                        <br />
                        <br />
                        <Row>
                            <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={8}>
                                <img className="technology-images"
                                     src="../../static/images/python@2x.jpg" />
                            </Col>
                            <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={8}>
                                <img className="technology-images"
                                     src="../../static/images/envoy@2x.jpg" />
                            </Col>
                            <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={8}>
                                <img className="technology-images"
                                     src="../../static/images/django@2x.jpg" />
                            </Col>
                        </Row>
                        <br />
                        <Row >
                            <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={8}>
                                <img className="technology-images"
                                     src="../../static/images/mongo@2x.jpg" />
                            </Col>
                            <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={8}>
                                <img className="technology-images"
                                     src="../../static/images/react@2x.jpg" />
                            </Col>
                            <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={8}>
                                <img className="technology-images"
                                     src="../../static/images/ethereum@2x.jpg" />
                            </Col>
                        </Row>
                    </Col>

                    <Col span={12} push={2}>
                        <div>
                            <img src={'../../static/images/geometric_particles2.svg'} />
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <Col span={24} push={10}><h1 className="the-blockchain-techn">Our Journey</h1></Col>
                <br />
                <br />
                <br />
                <br />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Icon type="bulb" theme="filled" />}
                    >
                        <h3 className="vertical-timeline-element-title">Veelancing concept is born</h3>
                        <p>
                        ✓ Concept & Team Developement
                        </p>
                        <p>
                        ✓ Tech Research & Market Analysis   
                        </p>
                        <p>
                        ✓ Platform Infrastructure & Architecture
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Q1 - 2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Icon type="fund" theme="filled" />}
                    >
                        <h3 className="vertical-timeline-element-title">Planning & Strategy</h3>
                        <p>
                        ✓ Blockchain Testing
                        </p>
                        <p>
                        ✓ Whitepaper Creation   
                        </p>
                        <p>
                        ✓ Marketing Strategy   
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Q2 - 2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Icon type="setting" theme="filled" />}
                    >
                        <h3 className="vertical-timeline-element-title">Building the Platform</h3>
                        <p>
                        ✓ Veelancing Platform Developement
                        </p>
                        <p>
                        ✓ Partnership with Coin Exchange Data    
                        </p>
                        <p>
                        ✓ Testing KYC API
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Q3 - 2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Icon type="notification" theme="filled" />}
                    >
                        <h3 className="vertical-timeline-element-title">Launching the Demo Version</h3>
                        <p>
                        ✓ User Testing
                        </p>
                        <p>
                        ✓ Capture Feedback & Iterate   
                        </p>
                        <p>
                        ✓ Start Marketing Campaign   
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Q4 - 2019"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<Icon type="dollar-circle" theme="filled" />}
                    >
                        <h3 className="vertical-timeline-element-title">Raising Funds</h3>
                        <p>
                        ✓ Private fundraising for early-bird investors
                        </p>
                        <p>
                        ✓ Launching Pre-initial Coin Offering    
                        </p>
                        <p>
                        ✓ Launching Initial Coin Offering   
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Q1 - 2020"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<Icon type="project" theme="filled" />}
                    >
                        <h3 className="vertical-timeline-element-title">Growing User Data Base</h3>
                        <p>
                        ✓ Referral Program & Airdrop
                        </p>
                        <p>
                        ✓ Growing Veelancing Community   
                        </p>
                        <p>
                        ✓ New Partnerships  
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Q2 - 2020"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<Icon type="interaction" theme="filled" />}
                    >
                        <h3 className="vertical-timeline-element-title">Launch Beta Version</h3>
                        <p>
                        ✓ User Testing Beta Version
                        </p>
                        <p>
                        ✓ Capture Feedback & Iterate   
                        </p>
                        <p>
                        ✓ Exchange Market Developement   
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Q3 & Q4 - 2020"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<Icon type="rocket" theme="filled" />}
                    >
                        <h3 className="vertical-timeline-element-title">Official Platform Release</h3>
                        <p>
                        ✓ Final Platform Release
                        </p>
                        <p>
                        ✓ Mining Tokens   
                        </p>
                        <p>
                        ✓ Release Exchange Market Feature   
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}
