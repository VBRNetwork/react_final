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
                            <Col xs={24} sm={16} md={12} lg={14}>
                                <h1 className="invest-in-the-first">
                                    Invest in the first<br />
                                    Blockchain Community for <br />
                                    Freelancers</h1>
                                <br />
                                <br />
                                <p className="stay-up-to-date-and">Stay up to date, and get notified about when we open the Initial Coin Offering</p>
                                <Row>
                                    <Col xs={24} sm={14} md={12} lg={18}>
                                        <div className="example-input">
                                            <Input className="ico-email-reg" size="large" placeholder="Email" />
                                            <Button className="get-notified">Get Notified!</Button>
                                        </div>
                                        <div>
                                            <p className="no-spam">We promise no spam! <u>Privacy Policy</u></p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                        <div>
                            <Col xs={24} sm={12} md={10} lg={{ span: 10 }}>
                                <div className="count-down">
                                </div>
                            </Col>
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
                    <Col xs={24} sm={16} md={{ span: 12, push: 1 }} lg={{ span: 11, push: 2 }} xl={{ span: 12, push: 2 }} xxl={{ span: 8, push: 2 }}>
                        <div className={'join-freelancer-box'} style={{ marginLeft: "5px" }}>
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
                            <Button className={'vbr-btn-style'} style={{ marginLeft: "15px" }}>
                                Learn More
                            </Button>
                        </div>
                    </Col>
                    <Col xs={24} sm={16} md={{ span: 12, push: 4 }} lg={11} xl={{ span: 12 }} xxl={{ span: 8, offset:3 }}>
                        <br />
                        <br />
                        <br />
                        <div>
                            <div className={"geometric-particles"}>
                                <img src={'../../static/images/geometric_particles.svg'} />
                            </div>
                            <div>
                                <img className={"coins"} src={'../../static/images/coins_photo@1x.jpg'} style={{ marginLeft: "15px" }} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <div className={'rectangle-copy'}>
                    <Row gutter={[32, 32]}>
                        <Col xs={24} sm={12} md={{ span: 12}} lg={12} xl={{span:12}} xxl={12}>
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

                        <Col xs={24} sm={12} md={{ span: 12}} lg={{span:12, push: 1}} xl={12} xxl={12}>
                            <div className={'the-solution'}>
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
                    </Row>
                </div>
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col xs={24} sm={24} md={24} lg={{ span: 9, push: 2 }}>
                        <h1 className={'the-blockchain-techn'}>
                            The Blockchain Technology
                        </h1>
                        <p className="photographs-are-a-wa">
                            Photographs are a way of preserving a moment in our lives for the rest of our lives.
                            Many of us have at least been tempted at the flashy array of photo printers which seemingly
                            leap off the shelves at even the least tech-savvy.</p>
                        <br />
                        <br />
                        <Row>
                            <Col xs={24} sm={12} md={{span: 8, pull: 1}} lg={8} xl={8} xxl={8}>
                                <img className="technology-images"
                                    src="../../static/images/python@2x.jpg" />
                            </Col>
                            <Col xs={24} sm={12} md={{span: 8, pull: 1}} lg={8} xl={8} xxl={8}>
                                <img className="technology-images"
                                    src="../../static/images/envoy@2x.jpg" />
                            </Col>
                            <Col xs={24} sm={12} md={{span: 8, pull: 1}} lg={8} xl={8} xxl={8}>
                                <img className="technology-images"
                                    src="../../static/images/django@2x.jpg" />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xs={24} sm={12} md={{span: 8, pull: 1}} lg={8} xl={8} xxl={8}>
                                <img className="technology-images"
                                    src="../../static/images/mongo@2x.jpg" />
                            </Col>
                            <Col xs={24} sm={12} md={{span: 8, pull: 1}} lg={8} xl={8} xxl={8}>
                                <img className="technology-images"
                                    src="../../static/images/react@2x.jpg" />
                            </Col>
                            <Col xs={24} sm={12} md={{span: 8, pull: 1}} lg={8} xl={8} xxl={8}>
                                <img className="technology-images"
                                    src="../../static/images/ethereum@2x.jpg" />
                            </Col>
                        </Row>
                    </Col>
                    <div className="tech-particles">
                        <Col xs={24} sm={24} md={{span:24, push: 4}} lg={{ span: 7, push: 4 }}>
                            <img src={'../../static/images/geometric_particles2.svg'} />
                        </Col>
                    </div>
                </Row>
                <br />
                <br />
                <Row type="flex" justify="center">
                    <Col xs={24} sm={24} md={24} lg={{ span: 12 }} xl={{ span: 12, push: 1 }} xxl={{ span: 12, push: 4 }}>
                        <h1 className="our-journey">Our Journey</h1>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ boxShadow: "0 15px 30px 0 rgba(0, 96, 94, 0.3)", borderRadius: "10px" }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        date="2018"
                        iconStyle={{ background: '#008D7F', color: '#fff' }}
                        icon={<img className="timeline-images" src={'../../static/images/concept.svg'} />}
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
                        contentStyle={{ boxShadow: "0 15px 30px 0 rgba(0, 96, 94, 0.3)", borderRadius: "10px" }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        date="Q1 - 2019"
                        iconStyle={{ background: '#008D7F', color: '#fff' }}
                        icon={<img className="timeline-images2" src={'../../static/images/strategy.svg'} />}
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
                        contentStyle={{ boxShadow: "0 15px 30px 0 rgba(0, 96, 94, 0.3)", borderRadius: "10px" }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        date="Q2 - 2019"
                        iconStyle={{ background: '#008D7F', color: '#fff' }}
                        icon={<img className="timeline-images2" src={'../../static/images/build.svg'} />}
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
                        contentStyle={{ boxShadow: "0 15px 30px 0 rgba(0, 96, 94, 0.3)", borderRadius: "10px" }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        date="Q3 - 2019"
                        iconStyle={{ background: '#008D7F', color: '#fff' }}
                        icon={<img className="timeline-images" src={'../../static/images/demo_launch.svg'} />}
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
                        contentStyle={{ boxShadow: "0 15px 30px 0 rgba(0, 96, 94, 0.3)", borderRadius: "10px" }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        date="Q4 - 2019"
                        iconStyle={{ background: '#008D7F', color: '#fff' }}
                        icon={<img className="timeline-images3" src={'../../static/images/raising_funds.svg'} />}
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
                        contentStyle={{ boxShadow: "0 15px 30px 0 rgba(0, 96, 94, 0.3)", borderRadius: "10px" }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        date="Q1 - 2020"
                        iconStyle={{ background: '#008D7F', color: '#fff' }}
                        icon={<img className="timeline-images2" src={'../../static/images/grow.svg'} />}
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
                        contentStyle={{ boxShadow: "0 15px 30px 0 rgba(0, 96, 94, 0.3)", borderRadius: "10px" }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        date="Q2 - 2020"
                        iconStyle={{ background: '#008D7F', color: '#fff' }}
                        icon={<img className="timeline-images2" src={'../../static/images/beta.svg'} />}
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
                        contentStyle={{ boxShadow: "0 15px 30px 0 rgba(0, 96, 94, 0.3)", borderRadius: "10px" }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        date="Q3 & Q4 - 2020"
                        iconStyle={{ background: '#008D7F', color: '#fff' }}
                        icon={<img className="timeline-images2" src={'../../static/images/official_launch.svg'} />}
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
                <br />

                <Row gutter={[40, 40]}>
                    <div className="the-team-box">
                        <Col span={8} push={1}>
                            <h1 className="the-team">The team</h1>
                            <p className="the-team-text">We are a team of enginneers and tech enthusiasts that aim to make the world a better place with the help of technology.</p>
                        </Col>

                        <Col span={12} push={3}>
                            <Row gutter={[40, 40]}>
                                <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                        src="../../static/images/team_member.jpg" />
                                    <div className="the-team-name">Mamie Norton</div>
                                    <div className="the-team-title">Writing & Translation</div>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                        src="../../static/images/team_member.jpg" />
                                    <div className="the-team-name">Mamie Norton</div>
                                    <div className="the-team-title">Writing & Translation</div>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                        src="../../static/images/team_member.jpg" />
                                    <div className="the-team-name">Mamie Norton</div>
                                    <div className="the-team-title">Writing & Translation</div>
                                </Col>
                            </Row>
                            <br />
                            <Row gutter={[40, 40]}>
                                <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                        src="../../static/images/team_member.jpg" />
                                    <div className="the-team-name">Mamie Norton</div>
                                    <div className="the-team-title">Writing & Translation</div>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                        src="../../static/images/team_member.jpg" />
                                    <div className="the-team-name">Mamie Norton</div>
                                    <div className="the-team-title">Writing & Translation</div>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                        src="../../static/images/team_member.jpg" />
                                    <div className="the-team-name">Mamie Norton</div>
                                    <div className="the-team-title">Writing & Translation</div>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col span={8} push={1}>
                        <div className="our-partners-box">
                             <h1 className="our-partners-title">Our Partners</h1>
                        </div>
                    </Col>
                    <Col span={9} push={3}>
                        <Row gutter={[40, 40]}>
                            <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                <img className="our-partners-images"
                                    src="../../static/images/team_member.jpg" />
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                <img className="our-partners-images"
                                    src="../../static/images/team_member.jpg" />
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                <img className="our-partners-images"
                                    src="../../static/images/team_member.jpg" />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row type="flex" justify="center">
                    <Col xs={24} sm={24} md={24} lg={{ span: 12 }} xl={{ span: 12, push: 1 }} xxl={{ span: 10}}>
                        <h1 className="initial-coin">The initial coin offering starts soon!</h1>
                    </Col>
                </Row>

                <div style={{ maxWidth: '300px', minWidth: '340px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Input size={'large'} className={'launch-time-input'} style={{ marginTop: '20px' }}
                            placeholder={'Email'} />
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
                <div className="rectangle2">
                    <Row type="flex" justify="center">
                        <Col xs={24} sm={24} md={24} lg={{ span: 12 }} xl={{ span: 12, push: 1 }} xxl={{ span: 8, push: 2 }}>
                            <h1 className="want-to-hear-more">Want to hear more? Let's Talk!</h1>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={{ span: 12 }} xl={{ span: 12, push: 1 }} xxl={{ span: 8, push: 3 }}>
                            <Button className="vbr-btn-style">Contact Us</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
