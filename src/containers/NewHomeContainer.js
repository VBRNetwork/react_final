import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import { Row, Col, Button,Input} from 'antd'
import Link from 'next/link'
import HeaderMenu from '../components/Elements/HeaderMenu'
import { isBrowser, isMobile,BrowserView } from 'react-device-detect'
import ReactRevealText from 'react-reveal-text'
import { Helmet } from 'react-helmet'

class NewHomeContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            current: 'mail',
            isLogged: false,
            breadcrumb: {
                category: {
                    url: '',
                    name: '',
                    meta_description: ''
                },
                subcategory: {
                    url: '',
                    title: ''
                }
            },
            fullStorySettings: {
                debug: false,
                host: 'www.fullstory.com',
                orgKey: 'PDZM8'
            },
            particles_number : 40,
            showText:false,
            showTextSecond:false
        }

        this.handleChangeParticles = this.handleChangeParticles.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }

    handleChangeParticles(value) {
        this.setState({
            particles_number: value
        })
    }

    isLoggedIn(){
        let isLogged = false;
        if(this.props.user.token !== 0 && this.props.user.token != null){
            isLogged = true;
        }
        this.setState({
            isLogged: isLogged
        })
    }

    componentDidMount () {
        let number_particles = 30;
        if(isBrowser){
            number_particles = 60;
        }
        if(isMobile){
            number_particles = 20;
        }
        this.handleChangeParticles(number_particles);
        setTimeout(() => {
            this.setState({ showText: true });
        }, 200);
        setTimeout(() => {
            this.setState({ showTextSecond: true });
        }, 1000);
        this.isLoggedIn();
    }

    render () {

        let join_as_freelancer = {
            url:'/dashboard/become-freelancer',
            as:'/dashboard/?slug=become-freelancer'
        }

        if(!this.state.isLogged){
            join_as_freelancer = {
                url:'/register',
                as:'/register'
            }
        }

        return (
            <Fragment>
                <Helmet>
                    <title>Join now DEMO. Freelancers platform blockchain based - Veelancing</title>
                    <meta
                        name='description'
                        content='Blockchain Freelancers Jobs.Be part of our community to find a job or hire experts. We are launching soon, but until then, join our BETA version!'
                    />
                </Helmet>
                <div className='container background-header' style={{height:window.innerHeight,position:'relative',minHeight:'715px'}}>
                    <Particles
                        style={{ position: 'absolute' }}
                        params={{
                            particles: {
                                number: {
                                    value: this.state.particles_number
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
                        }}>
                    </Particles>
                    <HeaderMenu/>
                    <Row>
                        <Col xs={24} sm={24} md={{ span: 12, offset: 1 }} lg={{ span: 12, offset: 2 }}
                             xl={{ span: 10, offset: 3 }} xxl={{ span: 10, offset: 2}}>
                            <div className="intro-text">
                                {false && <div><span className="coming-soon">👉🏻 Coming Soon!</span></div>}
                                <h1 className="a-blockchain-marketp">
                                    <span className="big" style={{textTransform:'none'}}> <ReactRevealText show={this.state.showText}>A Marketplace for Freelancers on Blockchain</ReactRevealText></span>
                                </h1>
                                <div className="community-part" >
                                        <h2 className="stay-up-to-date">
                                          <ReactRevealText show={this.state.showTextSecond}>Be part of our community to find a job or hire experts.
                                              We are launching soon, but until then, join our BETA version!</ReactRevealText>
                                        </h2>
                                </div>
                                <div style={{ marginTop: '30px', marginBottom: '50px' }}>
                                    <Row gutter={5}>
                                        <Col xs={24} md={24} lg={12} xxl={8}>
                                            <Link as={join_as_freelancer['url']} href={join_as_freelancer['as']}>
                                                <Button className="btn-style" size="large">
                                                    <a>
                                                        <b>Join as Freelancer</b>
                                                    </a>
                                                </Button>
                                            </Link>
                                        </Col>
                                        <Col xs={24} md={24} lg={12} xxl={8}>
                                            <Link href='/jobs/add-job' >
                                                <Button className="btn-style" size="large">
                                                    <a>
                                                        <b>Post a job</b>
                                                    </a>
                                                </Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col xs={0} sm={24} md={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 2 }}
                             xl={{ span: 5, offset: 3 }} xxl={{ span: 5, offset: 3 }}>
                            <img style={{height:window.innerHeight-185,marginTop:'10px'}} src="../../static/images/design/homepage_market-min.webp" alt=""/>
                        </Col>
                    </Row>
                    <BrowserView>
                        <div style={{ position: 'absolute', width: '100%', bottom: '0px' }}>
                            <Row style={{ opacity: '0.5', backgroundColor: '#FFF', height: '80px' }} type="flex" justify="end">
                                <Col span={3} pull={1}>
                                    <img style={{ height: '20px', marginTop:'30px' }} src={'../../static/images/urban_logo_partners_foto.png'} />
                                </Col>
                                <Col span={3} pull={2}>
                                    <img style={{marginTop: '35px', marginLeft: '35px'}} src={'../../static/images/NMC_productions_home.png'} />
                                </Col>
                                <Col span={3} pull={1}>
                                    <img style={{marginTop: '5px'}} src={'../../static/images/Logo_CED_home.png'} />
                                </Col>
                            </Row>
                        </div>
                    </BrowserView>
                </div>

                <div style={{backgroundColor:"rgb(227, 227, 227)",paddingTop:'90px',paddingBottom:'50px' }}>
                    <Row>
                        <Col xs={{ span: 21, offset: 2 }} sm={12} md={{span:12,offset:0}} lg={{span:7, offset:3}} xl={{span:9, offset:2}} xxl={{ span: 9, offset:3}}>
                            <div className="intro-text-job">
                                <h2 className="find-the-job-you-lov">
                                    Find the job you love.
                                </h2>
                                <div className="" style={{ marginTop: '2px', marginBottom: '2px' }}>
                                    <span className="choose-from-a-vast-p ">
                                      Choose from a vast pool of companies in over 85 industries.
                                    </span>
                                </div>
                                <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                                    <Link href='/categories' as={'categories'}>
                                        <Button className="vbr-btn-style">
                                            <b style={{ color: '#FFF' }}>See all categories</b>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{ span: 19, offset: 3 }} sm={12} md={{ span: 11,offset:1 }} lg={10} xl={9} xxl={{ span: 10 }}>
                            <div>
                                <Row>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img  className="polaroid-image" src="../../static/images/design/writing_and_translation_image@1x.png" style={{width:'100%'}}/>
                                                <div className="categories-title ">
                                                    Writing & Translation
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img className="polaroid-image" src="../../static/images/design/customer_service_image@1x.webp" style={{width:'100%'}}/>
                                                <div className="categories-title">
                                                    Digital Marketing
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img className="polaroid-image" src="../../static/images/design/design_and_creative_image@1x.webp" style={{width:'100%'}}/>
                                                <div className="categories-title ">
                                                    Web & Graphic Design
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img  className="polaroid-image"   src="../../static/images/design/digital_marketing_image@1x.webp" style={{width:'100%'}}/>
                                                <div className="categories-title ">
                                                    Legal Advice
                                                </div>
                                            </div>
                                        </div>

                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img  className="polaroid-image" src="../../static/images/design/it_and_programming_image@1x.webp" style={{width:'100%'}}/>
                                                <div className="categories-title ">
                                                  IT & Programing
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                    <div className="category-box">
                                            <div className="polaroid">
                                                <img className="polaroid-image" src="../../static/images/design/business_consultancy_image@1x.webp" style={{width:'100%'}}/>
                                                    <div className="categories-title">
                                                        Business Consultancy
                                                    </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '50px', marginTop: '50px' }}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 24 }}>
                            <div>
                                <h2 className="why-veelancing">Why Veelancing?</h2>
                            </div>
                            <div>
                                <h3 className="we-are-a-decentraliz">
                                    We are a decentralized marketplace for freelancers all over the world.
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row>
                        <Col xs={{ span: 20, offset:2 }} sm={12} md={{ span: 12, offset:0}} lg={6} xl={6} xxl={{ span: 4, offset: 4 }}>
                            <div style={{ padding: '18px',textAlign:'center' }}>
                                <img src={'../../static/images/communicate_directly.svg'}/> <br/>
                                <span className={'communicate-directly'}>Communicate Directly</span>
                                <span className={'home-paragraph-1'}>
                                    <p>
                                        You can easily connect and communicate
                                        with a freelancer or recruiter directly with our chat feature.
                                    </p>
                                </span>
                            </div>
                        </Col>
                        <Col xs={{ span: 20, offset:2 }} sm={12} md={{ span: 12, offset:0}} lg={6} xl={6} xxl={{ span: 4, offset:0 }}>
                            <div style={{ padding: '19px',textAlign:'center'}}>
                                <img src={'../../static/images/smart_contracts.svg'}/><br/>
                                <span className={'communicate-directly'} style={ {marginTop:'6px'} }>Create Smart Contracts</span>
                                <div className={'home-paragraph-1'}>
                                    <p>
                                        As a freelancer or recruiter
                                        you can create a contract together
                                        and make the final agreement on your specific terms.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={{ span: 20, offset:2 }} sm={12} md={{ span: 12, offset:0 }} lg={6} xl={6} xxl={{ span: 4, offset:0 }}>
                            <div style={{ padding: '19px',textAlign:'center'  }}>
                                <img src={'../../static/images/get_paid_instantly.svg'}/><br/>
                                <span className={'communicate-directly'}>Get Paid Instantly</span>
                                <div className={'home-paragraph-1'}>
                                    <p>
                                        The payments are processed instantly
                                        and in a highly secure environment
                                        created with Blockchain technology.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={{ span: 20, offset:2 }} sm={16} md={{ span: 12, offset:0 }} lg={6} xl={6} xxl={{ span: 4, offset:0 }}>
                            <div style={{ padding: '20px',textAlign:'center'  }}>
                                <img src={'../../static/images/exchange_money.svg'}/> <br/>
                                <span className={'communicate-directly'}>Exchange You Money</span>
                                <span className={'home-paragraph-1'}>
                                    <p>
                                        All transactions are made with our Veelancing token.
                                        You can exchange tokens into any Crypto or currency with minimal fees or no fees at all.
                                    </p>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div style={{ margin: '50px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Link href='/how-it-works' as={'/how-it-works'}>
                            <Button className={'vbr-btn-style'}>
                                <b style={{ color: '#FFF' }}> How it Works</b>
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className={'home-investors-box'} style={{ position: 'relative' }}>
                    <div>
                        <Row>
                            <Col xs={{ span: 22 }} sm={16} md={12} lg={12} xl={{ span: 10 }}
                                 xxl={{ span: 10 }}>
                                <div className={'investors-title'}>
                                    Help us create the first
                                    <br/>
                                    Blockchain Freelancer Community
                                </div>
                                <p className={'investors-text'}>
                                    Made by freelancers for freelancers, Veelancing aims to help people
                                    find jobs and talent fast and easy.
                                    <br/>
                                    With Blockchain technology we give everyone the opportunity
                                    to have access to instant payment and cryptocurrencies.
                                </p>
                                <Link href='/register' as={'/register'}>
                                    <Button className={'vbr-btn-style mt35'}>
                                        <b style={{ color: '#FFF' }}>Become an Investor</b>
                                    </Button>
                                </Link>
                            </Col>
                            <Col xs={24} sm={16} md={12} lg={12} xl={11} xxl={{ span: 14 }}>
                                <img className={'img-responsive'}
                                     src="../../static/images/design/become_investor_coins-min.webp" alt="become-an-investor"/>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div style={{ marginTop: '80px', marginBottom: '80px' ,zIndex:1,position:'relative'}}>
                    <Row>
                        <Col xs={{ span: 22, offset: 2 }} sm={16} md={{ span: 12, push: 1 }} lg={{ span: 11, push: 2 }}
                             xl={{ span: 10, push: 2 }} xxl={{ span: 10, push: 2 }}>
                            <div className={'join-freelancer-box'}>
                                <span className={'join-freelancer-title'}>
                                    Be part of a community that
                                    <br/>
                                    owns the platform.
                                </span>
                                <p className={'join-freelancer-text'}>
                                    We believe in a true form of community.
                                    <br/>
                                    With Veelancing, everyone can contribute <br/> to the platform
                                    by requesting and voting <br/>
                                    changes and new features.
                                </p>
                                <Link href='/register' as={'/register'}>
                                    <Button className={'vbr-btn-style'}>
                                        <b style={{ color: '#FFF' }}> Join as Freelancer</b>
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                        <Col xs={24} sm={16} md={12} lg={10} xl={{ span: 10 }} xxl={{ span: 8, offset: 0 }}>
                            <div style={{padding:'20px'}}>
                                <img className={'img-responsive'}
                                     src={'../../static/images/for_freelancers_imagery@2x.webp'}/>
                            </div>
                        </Col>
                    </Row>
                </div>


                <Row>
                    <Col sm={16} md={12} lg={10} xl={{ span: 10, offset: 2 }} xxl={{ span: 8, offset: 4 }}>
                        <div>
                            <img className={'img-responsive'}
                                 src={'../../static/images/talent_seeker_imagery@1x.webp'}/>
                        </div>
                    </Col>
                    <Col xs={{ span: 22, offset:2 }}
                         sm={16}
                         md={{ span: 12, }}
                         lg={{ span: 10 }}
                         xl={{ span: 8, offset: 1 }}
                         xxl={{ span: 8 }}>

                        <div className={'join-freelancer-box'}>
                            <div className={'join-freelancer-title '}>
                                Find the best candidate
                                <br/>
                                for the job.
                            </div>
                            <p className={'join-freelancer-text'}>
                                We believe in a true form of community.<br/>
                                With Veelancing, everyone can contribute
                                <br/>
                                to the platform by requesting and voting <br/>
                                changes and new features.
                            </p>
                            <div>
                                <Link href='/jobs/add-job' as={'/jobs/add-job'}>
                                    <Button className={'vbr-btn-style mt35'}>
                                        <b style={{ color: '#FFF' }}> Post a job</b>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div style={{ marginTop: '100px', marginBottom: '100px', textAlign: 'center' }}>
                    <div className={'well-let-you-know-w'}>
                        We’ll let you know when we launch!
                    </div>
                    <div style={{ maxWidth: '300px', minWidth: '340px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center' }}>
                            <Input size={'large'} className={'launch-time-input'} style={{ marginTop: '20px' }}
                                   placeholder={'Email'}/>
                            <Button className={'vbr-btn-style'} style={{ marginTop: '20px' }}>
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
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

NewHomeContainer.propTypes = {}

export default connect(mapStateToProps, {})(NewHomeContainer)
