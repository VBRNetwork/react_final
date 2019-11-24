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
                <div className='rectangle' xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <div>
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
                        <HeaderMenu/>
                        <Row style={{marginTop:'50px'}}>
                            <div>
                                <Col span={12}>
                                    <h1 className="invest-in-the-first">Invest in the first</h1>
                                    <h1 className="invest-in-the-first">Blockchain Community for</h1>
                                    <h1 className="invest-in-the-first">Freelancers</h1>
                                    <br />
                                    <br />
                                    <p className="stay-up-to-date-and">Stay up to date, and get notified about when we open the Initial Coin Offering</p>
                                </Col>
                            </div>
                            <div>
                                <Col span={12} push={2}>
                                    <div className="count-down">
                                    </div>
                                </Col>
                                <br />
                            </div>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <div className="example-input">
                                    <Input size="large" placeholder="Email" />
                                    <Button className="get-notified">Get Notified!</Button>
                                </div>
                                <div>
                                    <p className="no-spam">We promise no spam! Privacy Policy</p>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <Row>
                    <Col xs={24} sm={16} md={{ span: 12, push: 1 }} lg={{ span: 11, push: 2 }} xl={{ span: 12, push: 2 }} xxl={{ span: 12, push: 4 }}>
                        <div className={'join-freelancer-box'}>
                            <span className={'why-veelancing'}>
                                Why Veelancing?</span>
                            <br />
                            <br />
                            <br />
                            <p className="veelancing-is-a-dece">
                                Veelancing is a decentralized platform for freelancers and talent seekers from all over the world.
                                Here, you can find the job you love or hire experts that fit your needs.</p>
                            <p className="veelancing-is-a-dece">
                                With the help of Blockchain technology, we created a transparent and flexible platform that belongs to the community.
                                Everyone can contribute to the platform by requesting and voting changes and new features.</p>
                            <p className="veelancing-is-a-dece">With Veelancing, we give everyone the opportunity to have access to instant payment and cryptocurrencies.</p>
                            <br />
                            <br />
                            <br />
                            <Button className={'vbr-btn-style'}>
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
                                <img className={"coins"} src={'../../static/images/coins_photo@1x.jpg'} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <Row className='rectangle-copy'>
                    <br />
                    <br />
                    <br />
                    <Col span={10} push={1}>
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

                    <Col span={12} push={3}>
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
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Icon type={'fund'} />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Icon type={'fund'} />}
                    >
                        <h3 className="vertical-timeline-element-title">Art Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2010"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Icon type={'fund'} />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2006 - 2008"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Icon type={'fund'} />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2013"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<Icon type={'fund'} />}
                    >
                        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social
                            Media</h3>
                        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                        <p>
                            Strategy, Social Media
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2012"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<Icon type={'fund'} />}
                    >
                        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<Icon type={'fund'} />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media
                            Visual Imaging</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                        <p>
                            Creative Direction, Visual Design
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}
