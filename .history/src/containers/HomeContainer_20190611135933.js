import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Particles from 'react-particles-js'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../styles/home.css'
import {Carousel, Divider, Layout, Row, Col, Button, Card, Input} from 'antd';
const Search = Input.Search;
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
                            background: 'linear-gradient(rgb(46, 195, 171), rgb(35, 33, 33))',
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
                                <Col span={10}>
                                    <div className='intro-text'>
                                        <h2 className='slogan'>
                                            Disrupting the Freelancing Marketplace with the power of
                                            blockchain
                                        </h2>
                                        <p className="subtext-css">
                                            No more Fees, Scam Attempts, Poor Customer Support,
                                            Delayed Payments or Unfair Mediation!
                                        </p>

                                        <Search
                                           
                                            placeholder='Post your project and choose the best freelancer'
                                            className='searchpost form-control ant-input-sm'
                                            enterButton={<Button
                                                className='ant-btn-sm'
                                                type='primary'
                                                style={{
                                                    backgroundColor: '#2EC3AB',
                                                    borderColor: '#2EC3AB'
                                                }}>
                                            Search
                                            </Button>}
                                            onSearch={value => console.log(value)}
                                        />
                                    </div>
                                </Col>
                                <Col span={14}>

                                <img src={'../../static/images/asset_6.png'}
                                            style={{height: '190px' ,marginLeft: '18%', marginTop: '60px'}}/>
                                  
                                    <img src={'../../static/images/asset_9.png'}
                                            style={{marginLeft: '25%',  height: '190px'}}/>
                                            
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

                <Row>
                    <Col span={16} offset={4}>
                        <Carousel autoplay >
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
                                    src={'../../static/images/freelancer-b.png'}
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
                                    src={'../../static/images/freelancer_old.png'}
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
                  

                <Layout style={{margin: '10px'}}>
                    <Row type="flex" justify="space-around">
                        <Col span={4}>
                            <div href='#link' style={{cursor: 'pointer', padding:'20px'}}>
                                <img
                                    height='80'
                                    width='80'
                                    alt='171x180'
                                    src={'../../static/images/img-01.png'}
                                />
                                  <br/>
                                Writing
                            </div>
                        </Col>
                        <Col span={4}>
                            <div  href='#link' style={{cursor: 'pointer', padding:'20px'}}>
                                <img
                                    height='80'
                                    width='80'
                                    alt='171x180'
                                    src={'../../static/images/img-02.png'}
                                />
                                  <br/>
                                Design
                            </div>

                        </Col>
                        <Col span={4}>
                            <div href='#link' style={{cursor: 'pointer', padding:'20px'}}>
                                <img
                                    height='80'
                                    width='80'
                                    alt='171x180'
                                    src={'../../static/images/img-03.png'}
                                />
                                  <br/>
                                Business Consultance
                            </div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="space-around">
                        <Col span={4}>
                            <div href='#link' style={{cursor: 'pointer', padding:'20px'}}>
                            <img
                                height='80'
                                width='80'
                                alt='171x180'
                                src={'../../static/images/img-05.png'}
                            />
                            <br/>
                            Developers
                            </div>
                        </Col>
                        <Col span={4}>
                            <div href='#link' style={{ cursor: 'pointer', padding:'20px'}}>
                            <img
                                height='80'
                                width='80'
                                alt='171x180'
                                src={'../../static/images/img-08.png'}
                            />
                              <br/>
                            Marketing & SEO
                            </div>
                        </Col>

                        <Col span={4}>
                            <div href='#link' style={{cursor: 'pointer', padding:'20px'}}>
                            <img
                                height='80'
                                width='80'
                                alt='171x180'
                                src={'../../static/images/img-04.png'}
                            />
                              <br/>
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
                </Layout>
                </Col>
                </Row>
                 <Layout>
                     
                    <div className="home-section">
                        <Row type="flex" justify="space-around">
                            <Col span={3}>
                                <img

                                    className='chair-tablet-image img-fluid'
                                    src={'../../static/images/footer_chair.png'}
                                />
                            </Col>
                            <Col span={8}>
                                <Card bordered={false}>
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
                                </Card>
                            </Col>
                            <Col span={4}>
                                <div style={{marginTop: '50px', textAlign: 'center'}}>
                                    <Button style={{backgroundColor: '#2EC3AB',
                                        borderColor: '#2EC3AB'}} className='vbr-button' type={'primary'}>
                                        Download Whitepaper
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