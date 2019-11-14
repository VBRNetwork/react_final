import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import '../src/styles/ico.css'
import { Carousel, Layout, Row, Col, Button, Card, Input, Avatar, Empty, Breadcrumb, Form, Icon } from 'antd'

const { TextArea } = Input
const { Meta } = Card

export default class ico2 extends Component {

    render () {
        return (
            <div>
                <div>
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
                            <div className={'logo'}>
                                <Col span={12}>
                                  <p>VEELANCING</p>
                                </Col>

                                 <Col span={12}>

                                 </Col>
                            </div>

                        </Row>

                        <Row>
                            <Col span={18} push={8}>
                                <div style={{ width: '50%' }} className="contact-form">
                                    <Card className='p-5'>
                                        <strong><h3>Contact Us</h3></strong>
                                        <Form className='login-form'>
                                            <Form.Item>
                                                <Input
                                                    size="small"
                                                    placeholder='Name'
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Input
                                                    size="small"
                                                    placeholder='Email'
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <TextArea
                                                    rows={4}
                                                    size="small"
                                                    placeholder='Description'
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Button
                                                    style={{
                                                        background: 'rgba(0, 177, 153, 0.74)',
                                                        borderColor: 'rgba(0, 177, 153, 0.74)'
                                                    }}
                                                    type='primary'
                                                    htmlType='submit'
                                                    className='contact-form-button'>
                                                    Submit
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </Card>
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
