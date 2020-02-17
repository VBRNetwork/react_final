import React, { Component } from 'react'
import Particles from 'react-particles-js'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {Row, Col, Button, Input, Tooltip } from 'antd'
import HeaderMenu from '../components/Elements/HeaderMenu'
import CountDown from '../../src/components/CountDown'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import vbrincapi from 'libs/vbrinc-api'

class NewIcoContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: '',
            error_email:false,
            success:false
        }
        this.subscribeAction = this.subscribeAction.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
    }

    subscribeAction(){
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(this.state.email)) {
           vbrincapi.subscribeToNewsletter(this.state.email).then((e) => {
               if(e.error === false){
                   this.setState({
                       success:true,
                       error_email:false,
                   })
               }
               if(e.error === true){
                   this.setState({
                       error_email:true,
                       success:false,
                   })
               }
            });
        }
        return false;
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    render() {
        return (
            <div >
                <Helmet>
                    <title>Initial Coin Offering - Veelancing</title>
                    <meta
                        name='description'
                        content='Initial Coin Offering - Become part of community'
                    />
                </Helmet>
                <div className='container background-header'>
                    <Particles
                        style={{ position: 'absolute' }}
                        params={{
                            particles: {
                                number: {
                                    value: 45
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
                    <div style={{paddingTop:'80px',paddingBottom:'50px'}}>
                        <Row>
                            <Col xs={24} sm={24} md={{span:12, push:1}} lg={{span:10, push:1}}>
                                <div className="invest-in-the-first">
                                    Invest in the first <br/>
                                    Blockchain Community for
                                    Freelancers
                                </div>
                                <div className="stay-up-to-date-and">
                                    <span>Stay up to date, and get notified, <br/> about when we open the Initial Coin Offering</span>
                                </div>
                                <Row>
                                    <Col xs={24} sm={24} md={24} lg={18}>
                                        <div className="example-input">
                                            <Input className="ico-email-reg" size="large" type="email" placeholder="Email"
                                                   onChange={this.changeEmail}
                                                   onPressEnter={this.changeEmail}/>
                                            <Button style={{backgroundColor:'#FFFFFF'}} size={'large'} onClick={this.subscribeAction}>Get Notified!</Button>
                                            <Tooltip placement="topLeft" title="ICO will start soon !"><Button style={{backgroundColor:'#FFFFFF', color: '#0b9599', marginLeft: '2%'}} size={'large'} disabled><strong>Buy Tokens</strong></Button></Tooltip>
                                        </div>

                                        <div style={{marginLeft:'20px'}}>
                                            {(!this.state.success && this.state.error_email) &&
                                            <span className={'error-text'}>Please enter a valid email or maybe the email already exists.  </span>}
                                            {(this.state.success && !this.state.error_email)  &&
                                            <span className={'success-text'}>Thank you for subscription. </span>}
                                        </div>

                                        <div>
                                            <p className="no-spam">
                                                We promise no spam! <u>Privacy Policy</u>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={{ span: 9, push:2 }}>
                                <div className="count-down tba-text" style={{margin:'0 auto'}}>
                                    <h2 className="ico-tba-title">Veelancing ICO Will Start In</h2>
                                    <div className="ico-tba-text"  ><h1 style={{color: '#FFF'}}>To Be Announced</h1></div>
                                    { false && <CountDown timeTillDate="05 01 2020, 6:00 am" timeFormat="MM DD YYYY, h:mm a" /> }
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className={'mt35'}>
                    <Row>
                        <Col xs={24} sm={16} md={{ span: 12, push: 1 }} lg={{ span: 11, push: 2 }} xl={{ span: 12, push: 2 }} xxl={{ span: 10, push: 2 }}>
                            <div className={'join-freelancer-box'} style={{ marginLeft: "5px" }}>
                                <span className={'why-veelancing'}>
                                    Why Veelancing?
                                </span>
                                <p className="investors-text-ico">
                                    Veelancing is a decentralized platform for freelancers and talent seekers from all over the world. <br/>
                                    <br/>
                                    Here, you can find the job you love or hire experts that fit your needs.
                                    <br/>
                                    We believe Veelancing is the platform that will make freelancing the stress-free <br />
                                    and fair career option it once was. Aside from making your own rules by voting on the T&C 
                                    and being sure exactly what job you are signing up for due to smart contracts, 
                                    we also make sure to address what’s really on all of our minds: money. <br />
                                    <br/>
                                    At only 3% service fees, Veelancing is the most unobtrusive freelancing website around. <br />
                                </p>
                                <Button className={'vbr-btn-style'} style={{ marginLeft: "15px" }}>
                                    Learn More
                                </Button>
                            </div>
                        </Col>
                        <Col xs={24} sm={16} md={{ span: 12}} lg={{ span: 8, push:2 }} xl={{ span: 8, push:2 }} xxl={{ span: 10, push:2}}>
                            <div style={{width:'300px', margin:'0 auto'}}>
                                <div>
                                    <img src={'../../static/images/geometric_particles.svg'} />
                                </div>
                                <div>
                                    <img className={"coins"} src={'../../static/images/coins_photo@1x.jpg'} style={{ marginLeft: "120px" }} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={'rectangle-copy mt35'}>
                    <Row>
                        <Col xs={24} sm={12} md={{ span: 12}} lg={12} xl={{span:12}} xxl={{span:12,offset:0}}>
                            <div className={'the-problem'}>
                                The Problem
                            </div>
                            <p className="veelancing-is-a-dece">
                                The current freelancing market has been monopolized by big corporations 
                                who impose more and more overbearing restrictions and claim the lions’ share as fees. <br />
                                <br />
                                This problem is exacerbated by poor customer support, long delays and sometimes even unfair mediation. <br />
                                <br/>
                                Furthermore, freelancers as clients often have no say in the platform they make their living on. <br />
                            </p>
                        </Col>

                        <Col xs={24} sm={12} md={{ span: 12}} lg={{span:12}} xl={12} xxl={{span:12,offset:0}}>
                            <div className={'the-solution'}>
                                The Solution
                            </div>
                            <p className="veelancing-is-a-dece">
                                Veelancing is a decentralized platform for freelancers and talent seekers from all over the world. <br/>
                                <br/>
                                Here, you can find the job you love or hire experts that fit your needs. <br/>
                                With the help of Blockchain technology, we created a transparent and flexible platform that belongs to the community.
                                <br/>
                                <br/>
                                Everyone can contribute to the platform by requesting and voting changes and new features. <br/>
                                <br/>
                                With Veelancing, we give everyone the opportunity to have access to instant payment and cryptocurrencies. <br/>
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className="mt35">
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={{ span: 9,offset:3}}>
                            <h1 className={'the-blockchain-techn'}>
                                Veelancing Technology
                            </h1>
                            <p className="photographs-are-a-wa">
                                Veelaning is a decentralized marketplace, based on Blockchain technology, and built within Ethereum Blockchain.<br />
                                We are using latest technology, and future proof tools in order to povide the best, community oriented and user friendly <br />
                                environment. <br/>
                                <br/>
                                Envoy, Django and React are few of the technologies we are working with, stay tuned for more on our blog !
                            </p>
                            <br />
                            <br />
                            <Row>
                                <Col xs={24} sm={12} md={{span: 12}} lg={12} xl={8} xxl={8}>
                                    <img className="technology-images"
                                         src="../../static/images/python@2x.jpg" />
                                </Col>
                                <Col xs={24} sm={12} md={{span: 12}} lg={12} xl={8} xxl={8}>
                                    <img className="technology-images"
                                         src="../../static/images/envoy@2x.jpg" />
                                </Col>
                                <Col xs={24} sm={12} md={{span: 12}} lg={12} xl={8} xxl={8}>
                                    <img className="technology-images"
                                         src="../../static/images/django@2x.jpg" />
                                </Col>
                                <Col xs={24} sm={12} md={{span: 12}} lg={12} xl={8} xxl={8}>
                                    <img className="technology-images"
                                         src="../../static/images/mongo@2x.jpg" />
                                </Col>
                                <Col xs={24} sm={12} md={{span: 12}} lg={12} xl={8} xxl={8}>
                                    <img className="technology-images"
                                         src="../../static/images/react@2x.jpg" />
                                </Col>
                                <Col xs={24} sm={12} md={{span: 12}} lg={12} xl={8} xxl={8}>
                                    <img className="technology-images"
                                         src="../../static/images/ethereum@2x.jpg" />
                                </Col>
                            </Row>
                        </Col>
                        <div className="tech-particles">
                            <Col xs={24} sm={24} md={{span:24}} lg={{ span: 10, offset:2}}>
                                <img src={'../../static/images/geometric_particles2.svg'} />
                            </Col>
                        </div>
                    </Row>
                </div>

                <div className={'mt35'}>
                    <Row type="flex" justify="center">
                        <Col xs={24} sm={24} md={24} lg={{ span: 24 }} xl={{ span: 24}} xxl={{ span: 24}}>
                            <h1 className="our-journey"> Roadmap </h1>
                        </Col>
                    </Row>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ boxShadow: "0 15px 30px 0 rgba(0, 96, 94, 0.3)", borderRadius: "10px" }}
                            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                            date="2018"
                            iconStyle={{ background: '#008D7F', color: '#fff' }}
                            icon={<img className="timeline-images" src={'../../static/images/concept.svg'} />}>

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
                            icon={<img className="timeline-images2" src={'../../static/images/strategy.svg'} />} >

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
                            <h3 className="vertical-timeline-element-title">Platform Improvement</h3>
                            <p>
                                ✓ Implementing changes based on users feedback
                            </p>
                            <p>
                                ✓ Analyzed Google stats to determine correct target user
                            </p>
                            <p>
                                ✓ Adapted marketing strategy based on latest analysys
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ boxShadow: "0 15px 30px 0 rgba(0, 96, 94, 0.3)", borderRadius: "10px" }}
                            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                            date="Q1 - 2020"
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
                            date="Q2 - 2020"
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
                            date="Q3 - 2020"
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
                            date="Q4 - 2020"
                            iconStyle={{ background: '#008D7F', color: '#fff' }}
                            icon={<img className="timeline-images2" src={'../../static/images/official_launch.svg'} />}
                        >
                            <h3 className="vertical-timeline-element-title">Official Platform Release</h3>
                            <p>
                                ✓ Final Platform Release
                            </p>
                            <p>
                                ✓ Minting Tokens
                            </p>
                            <p>
                                ✓ Release Exchange Market Feature
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>

                <Row >
                    <div className="the-team-box">

                        <Col span={8} push={1}>
                            <h1 className="the-team">The team</h1>
                            <p className="the-team-text">We are a team of engineers and tech enthusiasts that aim to make the world a better place with the help of technology.</p>
                        </Col>

                        <Col span={12} push={3}>
                            <Row >
                                <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                        src="../../static/images/sample-avatar.jpg" />
                                    <div className="the-team-name">Stefan Vanea</div>
                                    <div className="the-team-title">Chief Executive Officer</div>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                        src="../../static/images/sample-avatar.jpg" />
                                    <div className="the-team-name">Fedot Serghei</div>
                                    <div className="the-team-title">Head of IT & Dev WW</div>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                         src="../../static/images/sample-avatar.jpg"  />
                                    <div className="the-team-name">Sorin Anghelescu</div>
                                    <div className="the-team-title">Chief Financial Officer</div>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                         src="../../static/images/sample-avatar.jpg"  />
                                    <div className="the-team-name">Alexandru Barborica</div>
                                    <div className="the-team-title">Chief Technology Officer</div>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                         src="../../static/images/sample-avatar.jpg"  />
                                    <div className="the-team-name">Cristian Lipciuc</div>
                                    <div className="the-team-title">Content Creator & Copywriter</div>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                         src="../../static/images/sample-avatar.jpg"  />
                                    <div className="the-team-name">Ileana Marcut</div>
                                    <div className="the-team-title">UX & UI Designer</div>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                         src="../../static/images/sample-avatar.jpg"  />
                                    <div className="the-team-name">Marius Glufcios</div>
                                    <div className="the-team-title">Investor & President</div>
                                </Col>
                            </Row>

                        </Col>
                    </div>
                </Row>

                <div style={{marginTop:'50px', marginBottom:'50px'}}>
                    <Row>
                        <Col span={8} push={1}>
                            <div className="our-partners-box">
                                <h1 className="our-partners-title">Our Partners</h1>
                            </div>
                        </Col>
                        <Col span={9} push={3}>
                            <Row >
                                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={8}>
                                    <img className="the-team-images"
                                         src="https://coinexchangedata.com/images/logo-ced-day.png" />
                                    <div className="the-team-name">CoinExchangeData</div>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={8}>
                                    <img className="the-team-images"
                                         src="../../static/images/NMC_productions.png" />
                                    <div className="the-team-name">NMC Productions</div>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={8}>
                                    <img className="the-team-images"
                                         src="../../static/images/urban_logo_home.png" />
                                    <div className="the-team-name">Urban Garden</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <Row type="flex">
                    <Col xs={24} sm={24} md={24} lg={{ span: 24 }} xl={{ span: 24}} xxl={{ span: 24}}>
                        <h1 className="initial-coin">The initial coin offering starts soon!</h1>
                    </Col>
                </Row>

                <div style={{ maxWidth: '300px', minWidth: '340px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{marginLeft:'20px'}}>
                            {(!this.state.success && this.state.error_email) &&
                            <span className={'error-text'}>Please enter a valid email or maybe the email already exists.  </span>}
                            {(this.state.success && !this.state.error_email)  &&
                            <span className={'success-text'}>Thank you for subscription. </span>}
                        </div>
                        <Input size={'large'} className={'launch-time-input'} type="email" style={{ marginTop: '20px' }}
                            placeholder={'Email'} onChange={this.changeEmail} onPressEnter={this.changeEmail} />
                        <Button className={'vbr-btn-style'} style={{ marginTop: '20px' }} onClick={this.subscribeAction}>
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
                        <Col xs={24} sm={24} md={24} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 24}}>
                            <h1 className="want-to-hear-more">Want to hear more? Let's Talk!</h1>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col xs={24} sm={24} md={24} lg={{ span: 12 }} xl={{ span: 12}} xxl={{ span: 24 }}>
                            <Button className="vbr-btn-style">Contact Us</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
    }
}

NewIcoContainer.propTypes = {
}

export default connect(mapStateToProps, {})(NewIcoContainer)
