import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Particles from 'react-particles-js'
import '../styles/ico.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Carousel, Divider, Layout, Row, Col, Button, Card, Input, Avatar, Empty, Statistic} from 'antd';
const { Header, Content, Footer, Sider } = Layout
const { Meta } = Card;
const { TextArea } = Input;
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;


class IcoContainer extends Component {
    static async getInitialProps({store, query}) {
    }

    componentDidMount() {
    }

    render() {
        return (
                    <Layout>
                        <Row>
                            <Col span={8}>
                                <Card    title="VBR Network Concept" 
                                            bordered={false} 
                                            style={{ width: '100%' }} 
                                    >
                                    <img    style={{float: 'right'}} 
                                            alt="concept" 
                                            src={'../../static/images/asset_5.png'} 
                                    />
                                    <p> We realized that the current freelancing market is missing something bad, 
                                        and those who have great ideas are often not given a platform to express them.
                                        The market grows best with your input, not with impersonal customer support and dishonesty. 
                                        It's time to start over and give you the tools you need to build your project to the best of your ability. 
                                        Say goodbye to having to read between the lines!
                                    </p>
                                    <p>
                                        Enter VBR: Made by freelancers, for freelancers. 
                                        You know how you want to run your business far better than we do: help us help you.
                                        
                                    </p>
                                    <p>
                                        Our Terms and Projects are voted on by you and the community. 
                                        It's time to abandon bureacratic processes and anti-consumer practices. 
                                    </p>
                                    <p>
                                        VBR members strive to let the market grow on its’ own, with as little interference as possible. 
                                        However, we've come up with a few improvements ourselves, which we hope you will find useful!
                                    </p>
                                    <p> 
                                        One of our tools will allow the customer to track the progress of the freelancer in real time, 
                                        by measuring the project size against other similar projects in our library. 
                                        This will help us eliminate long SLAs.
                                    </p>
                                    <p>
                                        VBR will be working closely with partners 
                                        that will allow talented freelancers 
                                        from underdeveloped countries to integrate themselves better into the global market, 
                                        ensuring equal opportunities for all.
                                    </p>
                                    <p>
                                        Did you just BARELY miss that one crypto startup that would have made your day (and your fortune)? 
                                        Don't miss this one. We're here to change the game, and your standards. 
                                        Help us change the state of the game. We're not taking the reins, you are. 
                                        We're only here to give you the tools to do that. Invest today, profit tommorrow. 
                                        Your future depends on you, and we aim to brighten it. Join the first truly free market. 
                                        Not as an employee, as our partner.
                                    </p>
                                </Card>
                                <br />
                                <Row>
                                    <Col span={4}>
                                    <img     
                                        alt="concept" 
                                        src={'../../static/images/asset_8.png'} 
                                        style={{position: 'absolute'}}
                                        
                                    />
                                    </Col>
                                    <Col span={20}>
                                        <div className="contact-form">

                                            <div style={{textAlign: 'center'}}><h3><strong>Contact Us</strong></h3></div>

                                            <Input size="small" placeholder="Name" />

                                            <Input size="small" placeholder="Email" />

                                            <TextArea rows={4} />
                                            <div style={{fontSize: '12px', marginTop: '-10px', color: '#030852'}}>Press enter to send the message.</div>
                                            <div style={{float: 'right', marginTop: '-25px'}}>
                                                <Button style={{background: '#2EC3AB', borderColor: '#2EC3AB'}} type="primary" >Submit</Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <hr />
                                <div >
                                    <Row>
                                        <Col span={24}>
                                            <div style={{textAlign: 'center'}} >
                                                <Empty
                                                    
                                                    image={'../../static/images/vbrLogo.png'}
                                                    imageStyle={{
                                                    height: 60,
                                                    }}
                                                    description={
                                                    <span>
                                                        <strong>Whitepaper</strong>
                                                    </span>
                                                    }
                                                >
                                                    <Button type="primary" style={{background: '#2EC3AB', borderColor: '#2EC3AB'}}>Download Now</Button>
                                                </Empty>
                                            </div>
                                        </Col>
                                    </Row>
                               </div>
                               <hr />
                                <Row>
                                   <Col span={24}>
                                        <div style={{textAlign: 'center'}} >
                                            <img     
                                                alt="concept" 
                                                src={'../../static/images/picture_2_1.png'} 
                                                
                                            />
                                        </div>
                                   </Col>
                               </Row>
                               <hr />
                            </Col>
                            
                            <Col span={16}>
                                <Content>
                                    <div style={{  position: 'relative', background: 'linear-gradient(rgb(46, 195, 171), rgb(35, 33, 33))'}}>
                                        <div style={{ position: 'absolute', width: '100%'}}>
                                            <Particles
                                                params={{
                                                    particles: {
                                                        number: {
                                                            value: 100
                                                        },
                                                        size: {
                                                            value: 3
                                                        },
                                                        color: {value: '#FFF'}
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
                                            <Col span={24} >
                                                <div style={{float: 'right', marginRight: '20%'}}>
                                                    <Card 
                                                        style={{width: '100%', background: '#1f003a29'}}
                                                        bordered={false}
                                                        cover={
                                                            <div style={{textAlign: 'center'}}>
                                                                    <Countdown 
                                                                        style={{color: '#FFF', marginTop: '5%'}} 
                                                                        title="VBR ICO Countdown" 
                                                                        value={deadline} 
                                                                    />
                                                                    <div style={{color: '#FFF'}}><strong>Days</strong>

                                                                    </div>
                                                            </div>
                                                        }
                                                    >   
                                                        <hr />
                                                        <div >
                                                            <h4 style={{color: '#FFF', textAlign: 'center'}}>    
                                                                <strong>    VBR Network's ICO will be launched shortly. 
                                                                    <hr />  In the meantime, feel free to read all the details on our web site. 
                                                                </strong>
                                                            </h4>
                                                        </div>
                                                        <hr />
                                                    </Card>
                                                </div>
                                            </Col>
                                        </Row>
                                        <br />
                                        <br />
                                    </div>
                                    <br />
                                    <Row >
                                        <Col span={8}>
                                            <div style={{ textAlign: 'center'}}>
                                            <img     
                                                alt="concept" 
                                                src={'../../static/images/asset_7.png'} 
                                                
                                            />
                                            </div>
                                        </Col>
                                
                                        <Col span={8}>
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240}}
                                                    title="Q2 2018"
                                            >   <div>
                                                    <p>
                                                        Concept Development
                                                        <hr />
                                                        Gathering The Team
                                                        <hr />
                                                        Tech Reaserch & Market Analysis
                                                    </p>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240}}
                                                    title="Q3 2018"
                                            >   <div>
                                                    <p>
                                                        Infrastructure Development
                                                        <hr />
                                                        Ethereum Blockchain Analysis
                                                        <hr />
                                                        Pitch Deck Creation
                                                    </p>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8} >
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240, margin: '0 auto'}}
                                                    title="Q4 2018"
                                            >   <div>
                                                    <p>
                                                        Marketplace Architecture
                                                        <hr />
                                                        Databse Architecture
                                                        <hr />
                                                        Contacted Freelancers via Social Media
                                                    </p>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={8} >
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240, margin: '0 auto'}}
                                                    title="Q1 2019"
                                            >   <div>
                                                    <p>
                                                        Blockchain Testing
                                                        <hr />
                                                        Whitepaper Creation
                                                        <hr />
                                                        Developing Marketing Strategy
                                                    </p>
                                                </div>
                                            </Card>
                                        </Col>
                                    
                                        <Col span={8}>
                                            <div style={{textAlign: 'center'}}>
                                            <img     
                                                alt="concept" 
                                                src={'../../static/images/asset_9.png'} 
                                                
                                            />
                                            </div>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col span={12} >
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240, margin: '0 auto'}}
                                                    title="Q2 2019"
                                            >   <div>
                                                    <p>
                                                        Developing Demo Marketplace
                                                        <hr />
                                                        Partnership with Coin Exchange Data
                                                        <hr />
                                                        Testing KYC API
                                                    </p>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={12} >
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240, margin: '0 auto'}}
                                                    title="Q3 2019"
                                            >   <div>
                                                    <p>
                                                        Launching Demo of the Marketpace
                                                        <hr />
                                                        Gathering Feedback from potential users
                                                        <hr />
                                                        Spread the word through online channels
                                                    </p>
                                                </div>
                                            </Card>
                                        </Col>

                                    </Row>
                                    <br />
                                    <Row>
                                
                                        <Col span={12} >
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240}}
                                                    title="Q4 2019"
                                            >   <div>
                                                    <p>
                                                        Private fundraising for early-bird investors
                                                        <hr />
                                                        Launching Pre-ICO
                                                        <hr />
                                                        ICO Launch
                                                    </p>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={12} >
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240}}
                                                    title="Q1 2020"
                                            >   <div>
                                                    <p>
                                                        Referal Program & Airdrop
                                                        <hr />
                                                        Growing freelancer's commumnity under VBR Network
                                                        <hr />
                                                        Exchanges Partnership
                                                    </p>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col span={10} offset={2}>
                                        
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240}}
                                                    title="Q2 2020"
                                            >   <div>
                                                    <p>
                                                        Launching Beta with all functionalities
                                                        <hr />
                                                        Developing Exchange Platform
                                                        <hr />
                                                        Gathering Feedback for Beta
                                                    </p>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={10} offset={2}>
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240}}
                                                    title="Q3/Q4 2020"
                                            >   <div>
                                                    <p>
                                                        Releasing Final Version of the VBR Marketplace
                                                        <hr />
                                                        Minting Tokens
                                                        <hr />
                                                        Releasing Exchange Platform 
                                                    </p>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <br />
                                        <div style={{textAlign: 'center'}}><h2 ><strong>Meet VBR Network Team</strong></h2></div>
                                        <Row>
                                            <Col span={12} offset={6}>
                                                <Carousel autoplay >
                                                        
                                                    <Card
                                                        hoverable
                                                        bordered={false}
                                                        style={{ width: 240 }}
                                                        cover={<img style={{position: 'absolute'}} src={'../../static/images/picture_6.png'}/>}
                                                        className="trans-card"
                                                        
                                                    >
                                                        <Meta 
                                                        avatar={<Avatar size={64} 
                                                        icon="user" 
                                                        style={{marginTop: '5px', marginLeft: '10px', background: '#FFF', color: '#FFF', float: 'right'}} />} 
                                                        title="Stefan Vanea" 
                                                        description="Chief Executive Officer" />
                                                    </Card>
                                                    
                                                    <Card
                                                        hoverable
                                                        bordered={false}
                                                        style={{ width: 240 }}
                                                        cover={<img style={{position: 'absolute'}} src={'../../static/images/picture_6.png'}/>}
                                                        className="trans-card"
                                                    >
                                                        <Meta 
                                                        avatar={<Avatar size={64} 
                                                        icon="user" 
                                                        style={{marginTop: '5px', marginLeft: '10px', background: '#FFF', color: '#FFF', float: 'right'}} />}
                                                        title="Serghei Fedot" 
                                                        description="Chief Technology Officer" />
                                                    </Card>
                                                    
                                                    <Card
                                                        hoverable
                                                        bordered={false}
                                                        style={{ width: 240}}
                                                        cover={<img style={{position: 'absolute'}} src={'../../static/images/picture_6.png'}/>}
                                                        className="trans-card"
                                                    >
                                                        <Meta 
                                                        avatar={<Avatar size={64} 
                                                        icon="user" 
                                                        style={{marginTop: '5px', marginLeft: '10px', background: '#FFF', color: '#FFF', float: 'right'}} />}
                                                        title="Alex Barborica" 
                                                        description="Chief Operating Officer" />
                                                    </Card>
                                                    
                                                    <Card
                                                        hoverable
                                                        bordered={false}
                                                        style={{ width: 240 }}
                                                        cover={<img style={{position: 'absolute'}} src={'../../static/images/picture_6.png'}/>}
                                                        className="trans-card"
                                                    >
                                                        <Meta 
                                                        avatar={<Avatar size={64} 
                                                        icon="user" 
                                                        style={{marginTop: '5px', marginLeft: '10px', background: '#FFF', color: '#FFF', float: 'right'}} />}
                                                        title="Bogdan Vasilescu" 
                                                        description="Chief Marketing Officer" />
                                                    </Card>
                                                    <Card
                                                        hoverable
                                                        bordered={false}
                                                        style={{ width: 240 }}
                                                        cover={<img style={{position: 'absolute'}} src={'../../static/images/picture_6.png'}/>}
                                                        className="trans-card"
                                                    >
                                                        <Meta 
                                                        avatar={<Avatar size={64} 
                                                        icon="user" 
                                                        style={{marginTop: '5px', marginLeft: '10px', background: '#FFF', color: '#FFF'}} />}
                                                        title="Cristian Lipciuc" 
                                                        description="Head of Change Management" />
                                                    </Card>

                                                </Carousel>
                                            </Col>
                                        </Row>
                                    <Row>
                                        <Col>
                                            <div style={{backgroundColor:'white'}}>
                                                <div style={{margin:'20px'}}>
                                                    <div> 
                                                        <h3> <strong>Partners</strong> </h3>
                                                    </div>
                                                    <hr />
                                                    <Card bordered={false}>
                                                        <img src={'../../static/images/logo-ced.png'}/>
                                                    </Card>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div style={{backgroundColor:'white'}}>
                                                <div style={{margin:'20px'}}>
                                                    
                                                    <div> 
                                                        <h3> <strong>Technology</strong> </h3>
                                                    </div>
                                                    <hr />
                                                    <Card bordered={false}>
                                                        <img  style={{width: '35%'}} src={'../../static/images/python-logo.png'}/>
                                                        <img  style={{width: '30%'}} src={'../../static/images/logo_envoy2.png'}/>
                                                        <img  style={{width: '20%', marginLeft: '5%'}} src={'../../static/images/django-logo.png'}/>
                                                        <img  style={{width: '35%'}} src={'../../static/images/react-logo.png'}/>
                                                        <img  style={{width: '30%'}} src={'../../static/images/eth-logo.png'}/>
                                                        <img  style={{width: '30%'}} src={'../../static/images/mongodb-logo.png'}/>
                                                    </Card>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Content>
                            </Col>
                        </Row>
                    </Layout>
                )
            }
        }
function mapStateToProps(state) {
    return {}
}

IcoContainer.propTypes = {}

export default connect(mapStateToProps, {})(IcoContainer)