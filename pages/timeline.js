import React, { Component } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Carousel, Layout, Row, Col, Button, Card, Input, Avatar, Empty, Breadcrumb, Form, Icon } from 'antd'

const { TextArea } = Input
const { Meta } = Card;


export default class timeline extends Component {

  render () {
    return (
        <div>
            <div style={{
                    position: 'relative',
                    background: 'linear-gradient(rgb(46, 195, 171), rgb(35, 33, 33))'
                }}>
            <div style={{ position: 'absolute', width: '100%' }}>
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 90

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
                />
            </div>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 24 }}>
                    <div style={{ width: '300px', height: '160px', margin: '0 auto' }}>
                        <div>
                            <h3 style={{ color: '#FFF', textAlign: 'center', marginTop: '10%' }}>
                                <strong>
                                    <p> 
                                        VBR Network's Initial Coin Offering
                                    </p>
                                    <p>
                                        Our Crowd Sale will be launched shortly.<br /> 
                                        Stay tuned for more details !
                                    </p>
                                </strong>
                            </h3>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>

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
                        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
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
                        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                        <p>
                        Creative Direction, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<Icon type={'fund'} />}
                    />
                </VerticalTimeline>

            <Row>
                        <Col span={20} push={7}>
                <Card 
                                    title="VBR Network Concept"
                                    bordered={false}
                                    style={{ width: '50%' }}
                                >
                             
                                    <Meta 
                                    description={
                                        <div>
                                            <img 
                                        style={{ float: 'right' }}
                                        alt="concept"
                                        src={'../../static/images/asset_5.png'}
                                    />
                
                                    <p>
                                        Did you just BARELY miss that one crypto startup that would have made your day
                                        (and your fortune)?
                                        Don't miss this one. We're here to change the game, and your standards.
                                        Help us change the state of the game. We're not taking the reins, you are.
                                        We're only here to give you the tools to do that. Invest today, profit
                                        tommorrow.
                                        Your future depends on you, and we aim to brighten it. Join the first truly free
                                        market.
                                        Not as an employee, as our partner.
                                    </p>
                                    <p>
                                        The freelancing market grows best with te community input, helped by Blockchain Technology, 
                                        along with all VBR's great features.
                                        It's time to start over and give you the tools you need to build your project to
                                        the best of your ability.
                                    </p>
                                    <p>
                                        Enter VBR: Made by freelancers, for freelancers.
                                        You know how you want to run your business far better than we do: help us help
                                        you.
                                    </p>
                                    <p>
                                        VBR will be working closely with partners
                                        that will allow talented freelancers
                                        from underdeveloped countries to integrate themselves better into the global
                                        market,
                                        ensuring equal opportunities for all.
                                    </p>
                                        </div>
                                    }
                                    />
                                    

                                    </Card>
                                    </Col>
                                    </Row>
                                    <Row>
                                       <Col span={12} push={7}>
                                           <Card 
                                                title={
                                                    <div style={{textAlign: 'center'}}>
                                                        <strong>
                                                            Download VBR Whitepaper and learn moreabout our project
                                                        </strong>
                                                    </div>}
                                                extra={<img style={{height: 50}} src={'../../static/images/vbr_logo.png'}/>}
                                                
                                           >
                                               <Meta 
                                                description={
                                                    <div style={{textAlign: 'center'}}>
                                                    
                                                    <Button type="primary"
                                                            style={{
                                                                background: '#2EC3AB',
                                                                borderColor: '#2EC3AB'
                                                            }}
                                                            htmlType='submit'>
                                                        <a href={'../../static/files/vbr_network_whitepaper.docx'}>Download
                                                            Whitepaper</a>
                                                    </Button>
                                                    </div>
                                                }
                                               />
                                                </Card>
                                       </Col>
                                       </Row>
                                
                                <Row>
                                    <Col span={18} push={8}>
                                    <div style={{width: '50%'}} className="contact-form">
                                            <Card className='p-5'>
                                                <strong><h3>Contact Us</h3></strong>
                                                <Form   className='login-form'>
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
    )
  }
}
