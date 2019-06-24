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
                                    <p> We realize that the proportions of current market share
                                        are not reflecting the truth, as out there is still more
                                        unexploited market then the current one; therefore, we
                                        plan to build the VBR Academy, as part of our platform,
                                        in order to help those who would like to get into the
                                        field, but do not currently have the possibility to do so.
                                    </p>
                                    <p>
                                        This will consist of video courses that will give people
                                        new skills in the several domains domain.
                                    </p>
                                    <p> VBR aims to start with free developing courses for
                                        women, so we can offer them the opportunity of
                                        learning in a friendly, easy way, what majority of them
                                        were unable to understand yet, due to lack of friendly,
                                        free courses.
                                    </p>
                                    <p> The Terms of Service will be voted upon by the
                                        community, to ensure that our platform truly satisfies as
                                        many people as possible. VBR members strive to let
                                        the market grow on its’ own, with as little interference
                                        as possible.
                                    </p>
                                    <p>
                                        One of our tools will allow the customer to track the
                                        progress of the freelancer in real time, based on
                                        measurement of project size. This will help eliminate
                                        long SLAs.
                                    </p>
                                    <p>
                                        VBR will be working closely with partners that will allow
                                        talented freelancers from underdeveloped countries to
                                        integrate themselves better into the global market,
                                        ensuring equal opportunities for all.
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
                                                    
                                                    image={'../../static/images/vbr_logo.png'}
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
                                            <Col span={24}>
                                                <div style={{textAlign: 'center'}}>
                                                    <Countdown style={{color: '#FFF'}} title="VBR ICO Countdown" value={deadline} />
                                                    <br />
                                                    <br />
                                                    <div >
                                                        <h3 style={{color: '#FFF'}}>    
                                                            <strong>    VBR Network's ICO will be launched shortly. 
                                                                <br />  In the meantime, feel free to read all the deatils on our web site. 
                                                            </strong>
                                                        </h3>
                                                    </div>
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
                                            >
                                                <p>
                                                    Concept Development
                                                    <hr />
                                                    Gathering The Team
                                                    <hr />
                                                    Tech Reaserch & Market Analysis
                                                </p>
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240}}
                                                    title="Q3 2018"
                                                >
                                                <p>
                                                    Infrastructure Development
                                                    <hr />
                                                    Ethereum Blockchain Analysis
                                                    <hr />
                                                    Pitch Deck Creation

                                                </p>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8} >
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240, margin: '0 auto'}}
                                                    title="Q4 2018"
                                                >
                                                <p>
                                                    Marketplace Architecture
                                                    <hr />
                                                    Databse Architecture
                                                    <hr />
                                                    Contacted Freelancers via Social Media
                                                </p>
                                            </Card>
                                        </Col>
                                        <Col span={8} >
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240, margin: '0 auto'}}
                                                    title="Q1 2019"
                                                >
                                                <p>
                                                    Blockchain Testing
                                                    <hr />
                                                    Whitepaper Creation
                                                    <hr />
                                                    Developing Marketing Strategy
                                                </p>
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
                                                >
                                                <p>
                                                    Developing Demo Marketplace
                                                    <hr />
                                                    Partnership with Coin Exchange Data
                                                    <hr />
                                                    Testing KYC API
                                                </p>
                                            </Card>
                                        </Col>
                                        <Col span={12} >
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240, margin: '0 auto'}}
                                                    title="Q3 2019"
                                                >
                                                <p>
                                                    Launching Demo of the Marketpace
                                                    <hr />
                                                    Gathering Feedback from potential users
                                                    <hr />
                                                    Spread the word through online channels
                                                </p>
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
                                                >
                                                <p>
                                                    Private fundraising for early-bird investors
                                                    <hr />
                                                    Launching Pre-ICO
                                                    <hr />
                                                    ICO Launch
                                                </p>
                                            </Card>
                                        </Col>
                                        <Col span={12} >
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240}}
                                                    title="Q1 2020"
                                                >
                                                <p>
                                                    Referal Program & Airdrop
                                                    <hr />
                                                    Growing freelancer's commumnity under VBR Network
                                                    <hr />
                                                    Exchanges Partnership
                                                </p>
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
                                                >
                                                <p>
                                                    Launching Beta with all functionalities
                                                    <hr />
                                                    Developing Exchange Platform
                                                    <hr />
                                                    Gathering Feedback for Beta
                                                </p>
                                            </Card>

                                        </Col>
                                        <Col span={10} offset={2}>
                                            <Card   hoverable
                                                    bordered={false}
                                                    style={{ width: 240}}
                                                    title="Q3/Q4 2020"
                                                >
                                                <p>
                                                    Releasing Final Version of the VBR Marketplace
                                                    <hr />
                                                    Minting Tokens
                                                    <hr />
                                                    Releasing Exchange Platform 
                                                </p>
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
                                                        cover={<Avatar size={64} icon="user" style={{marginTop: '5px', marginLeft: '10px'}} />}
                                                        className="trans-card"
                                                    >
                                                        <Meta title="Stefan Vanea" description="Chief Executive Officer" />
                                                    </Card>
                                                    
                                                    <Card
                                                        hoverable
                                                        bordered={false}
                                                        style={{ width: 240 }}
                                                        cover={<Avatar size={64} icon="user" style={{marginTop: '5px', marginLeft: '10px'}} />}
                                                        className="trans-card"
                                                    >
                                                        <Meta title="Serghei Fedot" description="Chief Technology Officer" />
                                                    </Card>
                                                    
                                                    <Card
                                                        hoverable
                                                        bordered={false}
                                                        style={{ width: 240}}
                                                        cover={<Avatar size={64} icon="user" style={{marginTop: '5px', marginLeft: '10px'}} />}
                                                        className="trans-card"
                                                    >
                                                        <Meta title="Alex Barborica" description="Chief Operating Officer" />
                                                    </Card>
                                                    
                                                    <Card
                                                        hoverable
                                                        bordered={false}
                                                        style={{ width: 240 }}
                                                        cover={<Avatar size={64} icon="user" style={{marginTop: '5px', marginLeft: '10px'}} />}
                                                        className="trans-card"
                                                    >
                                                        <Meta title="Bogdan Vasilescu" description="Chief Marketing Officer" />
                                                    </Card>
                                                    <Card
                                                        hoverable
                                                        bordered={false}
                                                        style={{ width: 240 }}
                                                        cover={<Avatar size={64} icon="user" style={{marginTop: '5px', marginLeft: '10px'}} />}
                                                        className="trans-card"
                                                    >
                                                        <Meta title="Cristian Lipciuc" description="Head of Change Management" />
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
                                                    <Card bordered={false}>
                                                    <img src={'../../static/images/logo-ced.png'}/>
                                                    <img  style={{width: '30%', marginLeft: '5%'}} src={'../../static/images/logo_envoy2.png'}/>
                                                    <img  style={{width: '20%', marginLeft: '3%'}} src={'../../static/images/GitHub_Logo.png'}/>
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