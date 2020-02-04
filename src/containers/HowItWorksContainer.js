import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, Icon, Divider, Switch, Radio, Button} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import '../styles/hiw.css'
const { Meta } = Card;




class HowItWorksContainer extends Component {

    constructor(props) {
        super(props);
        this.sate= {
            job: '',
            hire: '',
        }
    }
  render () {
    return (
            <div>
              <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                    <div style={{marginLeft:'1rem'}}>
                        <div style={{marginLeft:'5px', marginTop:'20px'}}>
                            <h2 className="about">
                                <strong>How Can Veelancing help ?</strong></h2>
                        </div>
                        <Row>
                            <Col span={12}>
                                <div className="paragraphs" style={{marginTop: '10%', color: 'rgba(0, 37, 70, 0.74)'}}>
                                <Radio.Group>
                                <Radio.Button className='hiw-toggle-btn' value="job"><div className={'btn-text-hiw'}><span   >I want a job</span></div></Radio.Button>
                                <Radio.Button className='hiw-toggle-btn1' value="hire"><div className={'btn-text-hiw1'}><span>I want to hire</span></div></Radio.Button>
                                </ Radio.Group>
                                </div>
                            </Col>
                            <Col span={12} >
                                <div >
                                    <img style={{width: '440px'}} src={'../../static/images/for_freelancers_imagery@2x.webp'} />
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className={'hiw-text'} >
                                    <p>Freelancing has never been easier. 
                                        Here, you can find the job you love from over 
                                        85 different categories.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Button
                                type='normal'
                                className= {'browse-btn-hiw'} 
                            >
                                <div className={'browse-btn-text'} ><span>Browse Jobs</span></div>
                            </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className={'hiw-text-title'} ><span>How It Works</span></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                <Card
                                    bordered={true}
                                    className={'hiw-cards'}
                                    title={<div className={'card-title'} >Create your profile</div>}
                                    style={{height: '300px'}}
                                >
                                    <Meta 
                                         description=
                                            {<div className={'card-description'} >
                                                <p>
                                                    Register for free and build your Veelancing profile by adding your skills, 
                                                    experience, education, hourly or daily rate, and a profile picture.
                                                </p>
                                                <p>
                                                    All your data is stored safely, and you are in full control of it, at any given time.
                                                </p>
                                            </div>}
                                         avatar={<div><FontAwesomeIcon icon={['fas', 'fa-dice-one']} /></div>}
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    bordered={true}
                                    className={'hiw-cards'}
                                    title={<div className={'card-title'} >Find the job you love</div>}
                                    style={{height: '300px'}}
                                >
                                    <Meta
                                        description=
                                            {<div className={'card-description'} >
                                                <p>
                                                    Search and apply for jobs that fit your needs or accept offers directly from customers, 
                                                    and receive notifications when new opportunities occur.
                                                </p>
                                                <p>
                                                    Veelancing has over 85 different job categories !
                                                </p>
                                            </div>}
                                        avatar={<div><FontAwesomeIcon icon={['fas', 'fa-dice-one']} /></div>} 
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    bordered={true}
                                    className={'hiw-cards'}
                                    title={<div className={'card-title'} >Settle your own terms</div>}
                                    style={{height: '300px'}}
                                >
                                    <Meta
                                        description=
                                            {<div className={'card-description'} >
                                                <p> After being awarded with the job, use our Smart Contract feature  
                                                    to agree and set the terms of collaboration with your customer
                                                </p>
                                                <p>
                                                    This will allow a peer-topeer interaction, eliminating third party intervention.
                                                </p>
                                            </div>}
                                        avatar={<div><FontAwesomeIcon icon={['fas', 'fa-dice-one']} /></div>} 
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    bordered={true}
                                    className={'hiw-cards'}
                                    style={{height: '300px'}}
                                    title={<div className={'card-title'} >Get payed instantly</div>}
                                    
                                >
                                    <Meta
                                        description=
                                            {<div  className={'card-description'}>
                                            <p> The payment will be made in Tokens within 48 hours after completing the job. 
                                                Exchange your tokens in any currency and cryptocurrency available, and transfer your income anytime.
                                                <br />
                                                <a style={{color: '#008D7F'}} href={'#'}> More about Tokens & Exchange</a>
                                            </p>
                                            </div>}
                                        avatar={<div><i className="fas fa-dice-one"></i></div>}
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </div>
                  </Col>
              </Row>
              <div style={{backgroundColor:"rgb(227, 227, 227)",paddingTop:'90px',paddingBottom:'50px' }}>
                    <Row>
                        <Col xs={{ span: 21, offset: 2 }} sm={12} md={{span:12,offset:0}} lg={{span:7, offset:3}} xl={{span:9, offset:2}} xxl={{ span: 9, offset:3}}>
                            <div >
                                <h2 className="safe-secure-envrionment">
                                    A Safe & Secure Enviroment
                                </h2>
                                <div className="" style={{ marginTop: '2px', marginBottom: '2px' }}>
                                    <span className="hiw-descr">
                                    If you are looking for a new way to promote your business that won’t cost you more money, maybe printing is one of the options you won’t resist. 
                                    Printing is a widely use process in making printed materials that are used for advertising. 
                                    Brochure, catalogs, flyers, banners, posters, and booklets are some of several examples.
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{ span: 19, offset: 3 }} sm={12} md={{ span: 11,offset:1 }} lg={10} xl={9} xxl={{ span: 10 }}>
                            <div>
                                <Row>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img src="../../static/images/communicate_directly.svg" style={{width:'100%'}}/>
                                                <div className="hiw-categories-title ">
                                                    Direct Customer Communication
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img src="../../static/images/get_paid_instantly.svg" style={{width:'100%'}}/>
                                                <div className="hiw-categories-title">
                                                    Instantly Payment With Tokens   
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img src="../../static/images/smart_contracts.svg" style={{width:'100%'}}/>
                                                <div className="hiw-categories-title ">
                                                    Flexible Smart Contracts
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img  src="../../static/images/exchange_money.svg" style={{width:'100%'}}/>
                                                <div className="hiw-categories-title ">
                                                    Crypto Exchange Market  
                                                </div>
                                            </div>
                                        </div>

                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                        <div className="category-box">
                                            <div className="polaroid">
                                                <img  src="../../static/images/smart_contracts.svg" style={{width:'100%'}}/>
                                                <div className="hiw-categories-title ">
                                                    High Level Security
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={16} md={8} lg={8} xl={8} xxl={6}>
                                    <div className="category-box">
                                            <div className="polaroid">
                                                <img src="../../static/images/exchange_money.svg" style={{width:'100%'}}/>
                                                    <div className="hiw-categories-title">
                                                        Transparent Community
                                                    </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={'be-part'} >
                    <div className={'be-part-title'} ><span>Be part of the Veelancing community!</span></div>
                    <Button type={'primary'} className={'be-part-btn'} >
                        <div className={'be-part-btn-text'}><span>Join as a Freelancer</span></div>
                    </Button>
                </div>
          </div>
    )
  }
}

function mapStateToProps (state) {
  return {
  }
}

HowItWorksContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(HowItWorksContainer)
