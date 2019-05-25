import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Particles from 'react-particles-js'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../styles/home.css'
import {Carousel, Divider, Layout, Row, Col, Button, Card, Input} from 'antd';

const {Content} = Layout;

class HomeContainer extends Component {
    static async getInitialProps({store, query}) {
    }

    componentDidMount() {
    }

    onChange(a, b, c) {
        console.log(a, b, c);
    }

    render() {
        return (
            <Fragment>

                <div style={{position: 'relative'}}>
                    <div
                        style={{
                            background: 'linear-gradient(#2ec3ab, #b1b1b1)',
                            position: 'absolute',
                            width: '100%',
                            height: '98%',
                            zIndex: '-1'
                        }}>
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

                    <div className='container'>

                        <div style={{padding: '50px'}}>

                            <Row type="flex" justify="space-around">
                                <Col span={8}>
                                    <div className='intro-text'>
                                        <h2 className='slogan'>
                                            Disrupting the Freelancing Marketplace with the power of
                                            blockchain
                                        </h2>
                                        <p className="subtext-css">
                                            No more Fees, Scam Attempts, Poor Customer Support,
                                            Delayed Payments or Unfair Mediation!
                                        </p>
                                        <div className='input-group'>
                                            <Input
                                                size='small'
                                                type='text'
                                                className='searchpost form-control'
                                                placeholder='Post your project and choose the best freelancer'
                                            />
                                            <span className='input-group-btn'>
                                                        <Button
                                                            type='primary'
                                                            style={{
                                                                backgroundColor: '#2EC3AB',
                                                                borderColor: '#2EC3AB'
                                                            }}>
                                                        Search
                                                        </Button>
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={16}>
                                    <img src={'../../static/images/homepage_man.png'}
                                         style={{marginLeft: '10%', marginTop: '40px'}}/>
                                    <div className="small-promo-text">
                                        <div style={{position: 'relative'}}>
                                            <div
                                                style={{display: 'inline'}}
                                                className='small-icon-button'
                                            >
                                                <FontAwesomeIcon
                                                    icon='play-circle'
                                                    size='2x'
                                                    className='play-icon-color'
                                                />
                                            </div>
                                            <div style={{display: 'inline'}}>
                                                Meet The First Decentralized Environment for
                                                Freelancers!
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </div>
                </div>

                <div>
                    <Carousel afterChange={this.onChange}>
                        <div style={{backgroundColor: 'black'}}>
                            <img
                                className='d-block h-200'
                                src={'../../static/images/freelancer-working2.png'}
                                alt='First slide'
                            />
                            <div>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div>
                            <img
                                className='d-block'
                                src={'../../static/images/freelancer_old.png'}
                                alt='Third slide'
                            />
                            <div>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div>
                            <img
                                className='d-block h-200'
                                src={'../../static/images/freelancer-working2.png'}
                                alt='First slide'
                            />
                            <div>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div>
                            <img
                                className='d-block h-200'
                                src={'../../static/images/freelancer-working2.png'}
                                alt='First slide'
                            />
                            <div>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <Layout style={{margin: '10px'}}>

                    <Row type="flex" justify="space-around">
                        <Col span={6}>
                            <div style={{padding:'20px'}}>
                                <img
                                    height='80'
                                    width='80'
                                    alt='171x180'
                                    src={'../../static/images/img-01.png'}
                                />
                                Writing
                            </div>
                        </Col>
                        <Col span={6}>
                            <div  style={{padding:'20px'}}>
                                <img
                                    height='80'
                                    width='80'
                                    alt='171x180'
                                    src={'../../static/images/img-02.png'}
                                />
                                Design
                            </div>

                        </Col>
                        <Col span={6}>
                            <div style={{padding:'20px'}}>
                                <img
                                    height='80'
                                    width='80'
                                    alt='171x180'
                                    src={'../../static/images/img-03.png'}
                                />
                                Business Consultance
                            </div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="space-around">
                        <Col span={6}>
                            <div style={{padding:'20px'}}>
                            <img
                                height='80'
                                width='80'
                                alt='171x180'
                                src={'../../static/images/img-05.png'}
                            />
                            Developers
                            </div>
                        </Col>
                        <Col span={6}>
                            <div style={{padding:'20px'}}>
                            <img
                                height='80'
                                width='80'
                                alt='171x180'
                                src={'../../static/images/img-08.png'}
                            />
                            Marketing & SEO
                            </div>
                        </Col>

                        <Col span={6}>
                            <div style={{padding:'20px'}}>
                            <img
                                height='80'
                                width='80'
                                alt='171x180'
                                src={'../../static/images/img-04.png'}
                            />
                            PR
                            </div>
                        </Col>
                    </Row>

                    <div style={{background: '#ECECEC', padding: '30px'}}>
                        <div id='how-it-works'>
                            <h3 className='text-center how-it-work-title' style={{textAlign: 'center'}}>How it
                                works?</h3>
                        </div>
                        <Row>
                            <Col span={6}>
                                <Card title="Post your project" bordered={false}>
                                    Tell us about your project. We connect you with top
                                    talent around the world, or near you.
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Review freelancers" bordered={false}>
                                    Tell us about your project. We connect you with top
                                    talent around the world, or near you.
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Collaborate" bordered={false}>
                                    Tell us about your project. We connect you with top
                                    talent around the world, or near you.
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Collaborate" bordered={false}>
                                    Tell us about your project. We connect you with top
                                    talent around the world, or near you.
                                </Card>
                            </Col>
                        </Row>
                    </div>


                    <div className="home-section">
                        <Row type="flex" justify="space-around">
                            <Col span={3}>
                                <img

                                    className='chair-tablet-image img-fluid'
                                    src={'../../static/images/footer_chair.png'}
                                />
                            </Col>
                            <Col span={8}>
                                <div className='middle-description-text'>
                                    <div className='footer-description-title'>
                                        What’s great about our platform?
                                    </div>
                                    <p>
                                        We provide instant payments using VBR tokens, within 48
                                        hours for fiat payouts.
                                    </p>
                                    <p>
                                        Mediation will be carried out by the smart contract
                                        agreed upon by the parties and our ToS, on by the
                                        community.
                                    </p>
                                    <p> Meticulously picked customer experience team</p>
                                    <p>
                                        Customer can follow the progress of his required product
                                        in real time, based on project
                                    </p>
                                    <p>
                                        Ample recruitment process for freelancers in order to
                                        limit the amount of scammers on our platform Highly
                                        secure environment based on algorithms developed to
                                        ensure the safety of each and every one of our users.
                                    </p>
                                </div>
                            </Col>


                            <Col span={4}>
                                <div style={{marginTop: '50px', textAlign: 'center'}}>
                                    <Button className='vbr-button' type={'primary'}>
                                        Register now
                                    </Button>
                                    <br/>
                                    <span className='small' style={{fontSize: '11px'}}>
No upfront payments, no hidden
</span>
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

function mapStateToProps(state) {
    return {}
}

HomeContainer.propTypes = {}

export default connect(mapStateToProps, {})(HomeContainer)
