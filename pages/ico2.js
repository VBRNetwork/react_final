import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Carousel, Layout, Row, Col, Button, Card, Input, Avatar, Empty, Breadcrumb, Form, Icon, Statistic } from 'antd'
import "../src/styles/base.css"
const { TextArea } = Input
const { Meta } = Card

export default class ico2 extends Component {

    render () {

        const { Countdown } = Statistic;
        const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

        function onFinish() {
            console.log('finished!');
          }
   
        return (
            <div>
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
                        <Row>
                            <div>
                                <Col span={12}>
                                <div className="logo-box">
                                    <span class="logo">VEELANCING</span>
                               </div>
                                </Col>
                            </div>

                            <div>
                                 <Col >
                                
                                 </Col>
                            </div>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Row>
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
                                    <Button style={{height: '40px',
                                                    padding: '0 50px',
                                                    fontStyle: 'transparent'}}>Get Notified!</Button>
                                </div>
                                <div>
                                    <p className="no-spam">We promise no spam! Privacy Policy</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Icon type={'fund'}/>}
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
                        icon={<Icon type={'fund'}/>}
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
                        icon={<Icon type={'fund'}/>}
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
                        icon={<Icon type={'fund'}/>}
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
                        icon={<Icon type={'fund'}/>}
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
                        icon={<Icon type={'fund'}/>}
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
                        icon={<Icon type={'fund'}/>}
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
