import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/home.css'
import { Carousel, Layout, Row, Col, Button, Card } from 'antd'
import Link from 'next/link'

class HomeContainer extends Component {
    componentDidMount () {
    }



    render () {
        return (
            <Fragment>

                <div style={{ position: 'relative' }}>
                    <div className='container' style={{
                        background: 'linear-gradient(rgb(46, 195, 171), rgb(35, 33, 33))'
                    }}>

                        <Particles
                            style={{ 'position': 'absolute' }}
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
                        />

                        <div style={{ padding: '80px' }}>
                            <Row type="flex" justify="space-around">
                                <Col xs={24} sm={24} md={24} lg={24} xl={{ span: 18 }}>
                                    <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                                        <div className='intro-text'>
                                            <h2 className='slogan'>
                                                Freelancer's Marketplace on Blockchain
                                            </h2>
                                            <p className="subtext-css">
                                                Instant payments, Lowest Fees, Peer-to-peer interaction, Smart Contract based jobs
                                            </p>

                                                <Link href='/register'><Button
                                                    className='ant-btn-lg'
                                                    type='primary'
                                                    style={{
                                                        backgroundColor: '#2EC3AB',
                                                        borderColor: '#2EC3AB'
                                                    }}>Join our platform </Button></Link>

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
                                            <div style={{ textAlign: 'center' }}><strong>Writing</strong></div>
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
                                            <div style={{ textAlign: 'center' }}><strong>Design</strong></div>
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
                                            <strong>Developers</strong>
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
                                            <div style={{ textAlign: 'center' }}><strong>Marketing & SEO</strong>
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



                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={{ span: 18, offset: 3 }}>
                            <div style={{margin:'5px'}}>
                                <Carousel autoplay className="home-carousel">
                                    <div style={{ backgroundColor: 'black', width: '100%' }}>
                                        <div className="image">
                                            <img
                                                className='d-block h-200'
                                                src={'../../static/images/freelancer-working2.png'}
                                                alt='First slide'
                                            />
                                        </div>
                                    </div>

                                    <div style={{ backgroundColor: 'black', width: '100%' }}>
                                        <div className="image">
                                            <img
                                                className='d-block'
                                                src={'../../static/images/picture_7.png'}
                                                alt='Second slide'
                                            />
                                        </div>
                                    </div>

                                    <div style={{ backgroundColor: 'black', width: '100%' }}>
                                        <div className="image">
                                            <img
                                                className='d-block h-200'
                                                src={'../../static/images/freelancer_old.png'}
                                                alt='Third slide'
                                            />
                                        </div>
                                    </div>

                                    <div style={{ backgroundColor: 'black', width: '100%' }}>
                                        <div className="image">
                                            <img
                                                className='d-block h-200'
                                                src={'../../static/images/picture_3.png'}
                                                alt='Fourth slide'
                                            />
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>


                    <Row style={{ marginBottom: '30px' }}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={{ span: 18, offset: 3 }}>
                            <div id='how-it-works' style={{ marginTop: '30px' }}>
                                <h2 className='text-center how-it-work-title' style={{ textAlign: 'center' }}>What we
                                    offer
                                    ?</h2>
                            </div>

                            <Row gutter={20}>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <Card title="Online and Cold wallets" bordered={false}>
                                        <p>
                                            Time is money, in that we don’t want to waste either.
                                        </p>
                                        <p>
                                            This is why we implemented a cold wallet system, to ensure the
                                            security
                                            of your transactions.
                                        </p>
                                        <p>
                                            Coupled with our Proof of Origin and state of the art encryption, we
                                            truly hope to provide only the best.
                                            <br/>
                                        </p>
                                    </Card>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <Card title="100% Transparency" bordered={false}>
                                        <p>
                                            Customers will be able to trace the progress of their project
                                            instantly,
                                            due to our system that compares it to similar projects in our
                                            pre-existent library.
                                        </p>
                                        <p>
                                            Delays due to unprofessional work ethic are now a thing of the past.
                                            Just like your worries.
                                            Whatever it is, you're covered.
                                        </p>
                                    </Card>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <Card title="Instant payments" bordered={false}>
                                        <p>
                                            All payments with our token will be processed instantly,
                                            and based on Zero-Knowledge-Proof protocol and Proof-of-Origin
                                            protocol.
                                        </p>
                                        <p>
                                            Payments in fiat or any other payment method (i.e. bitcoin) will
                                            still
                                            be fast,
                                            but depend on their respective processors from the chain.
                                        </p>

                                    </Card>
                                </Col>
                                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <Card title="Exchange Platform" bordered={false}>
                                        <p>
                                            We want our users to feel as comfortable as possible.
                                        </p>
                                        <p>
                                            Therefore we are implementing an exchange market right on our
                                            platform.
                                        </p>
                                        <p>
                                            Our users can exchange crypto to fiat, crypto to crypto etc. with
                                            minimal fees, or no fees at all.
                                            <br/>
                                        </p>

                                    </Card>
                                </Col>
                            </Row>

                        </Col>
                    </Row>

                </Row>

                <Layout>
                    <div className="home-section">
                        <Row type="flex" justify="space-around">
                            <Col xs={24} sm={12} md={6} lg={8} xl={3}>
                                <img

                                    className='chair-tablet-image img-fluid'
                                    src={'../../static/images/asset_1.png'}
                                    style={{ marginTop: '50%' }}
                                />
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={8} xl={8}>
                                <Card bordered={false}>
                                    <div className='middle-description-text'>
                                        <div className='footer-description-title'>
                                            What’s great about our platform?
                                        </div>
                                        <hr/>
                                        <p>
                                            We provide instant payments using <strong>VBR tokens</strong>, and within 48
                                            hours for fiat payouts.
                                        </p>
                                        <p>
                                            Mediation will be carried out by the smart contract
                                            agreed upon by the parties and our Terms of Service, by the
                                            community.
                                        </p>
                                        <p> Meticulously picked customer experience team</p>
                                        <p>
                                            Customer can follow the progress of his required product
                                            in real time, based on project
                                        </p>
                                        <p>
                                            Ample recruitment process for freelancers in order to
                                            limit the amount of scammers on our platform <strong>highly
                                            secure</strong> environment based on algorithms developed to
                                            ensure the safety of each and every one of our users.
                                        </p>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={8} xl={4}>
                                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                                    <Button style={{
                                        backgroundColor: '#2EC3AB',
                                        borderColor: '#2EC3AB'
                                    }} className='vbr-button' type={'primary'}>
                                        <a href={'../../static/files/vbr_network_whitepaper.docx'}> Download Whitepaper</a>
                                    </Button>
                                    <br/>
                                    <span className='small' style={{ fontSize: '11px' }}>
                                        No more hidden fees or unfair mediation
                                    </span>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <img src={'../../static/images/asset_4.png'}
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
    return {}
}

HomeContainer.propTypes = {}

export default connect(mapStateToProps, {})(HomeContainer)
