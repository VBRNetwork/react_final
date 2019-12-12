import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, Icon, Divider} from 'antd'
import '../styles/hiw.css'
const { Meta } = Card;

class HowItWorksContainer extends Component {
  render () {
    return (
            <div>
              <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                    <div style={{marginLeft:'1rem'}}>
                        <div style={{marginLeft:'5px',marginTop:'20px'}}>
                            <h2 className="about">
                                <strong>VBR Network - How It Works</strong></h2><hr />
                        </div>
                        <Row>
                            <Col span={18}>

                                <div className="paragraphs" style={{margin: '2%', color: 'rgba(0, 37, 70, 0.74)'}}>
                                    <strong>
                                        <h4>
                                            <p>
                                                VBR Network is a decentralized marketplace
                                                for freelancers all over the world,
                                                based on Blockchain Technology.
                                            </p>
                                            <p>
                                                We bring a new fresh perspective,
                                                where the platform is owned by the community,
                                                chages voted by the community,
                                            </p>
                                            <p>
                                                Smart Contracts for transaction and mediation purposes,
                                                and many other new featuers.
                                            </p>
                                            <p>
                                                Besides transparency, and a high level of security,
                                                on VBR Marketplace the payments are going to be processed within seconds.
                                            </p>
                                            <p>
                                                By preventing payment delays, and bringing this fresh concept,
                                                we aim to offer to our community the experience they deserve on a freelancing website.
                                            </p>
                                        </h4>
                                    </strong>
                                </div>
                            </Col>
                            <Col span={6} >
                                <div >
                                    <img style={{marginTop: '20%'}} src={'../../static/images/homepage_man.png'} />
                                </div>
                            </Col>
                        </Row>
                        <Card  size="small" bordered={false} >
                            <Meta
                                title={<div ><h3 className="about"><strong>Learn About VBR</strong></h3><hr /></div>}
                                description=
                                    {<div className="paragraphs" >
                                        <Row>
                                            <Col >
                                                <Divider orientation='left'><Icon type='profile' style={{fontSize: '50px', color: 'rgb(46, 195, 171)'}} />
                                                    <strong>Register on VBR</strong></Divider>
                                                <Row>
                                                    <Col span={12}>
                                                        <div className="paragraphs" style={{marginTop: '5%', marginLeft: '5%'}}>
                                                            <strong>
                                                                <p>
                                                                    You can always register in the most easiest way on VBR Marketplace.
                                                                </p>
                                                                <p>
                                                                    Either you are freelancer, customer or both, you will be able to sign up in seconds.
                                                                </p>
                                                                <p>
                                                                    Details which we ask for during registration process are subject of our
                                                                </p>
                                                                <p>
                                                                    <a style={{color: 'rgb(46, 195, 171)'}} href='/'> Privacy Policy </a>
                                                                    and you have full control on it.
                                                                </p>
                                                                <p>
                                                                    We are registering all user with minimum details,
                                                                </p>
                                                                <p>
                                                                    so they can surf through VBR platform and feel the experience.
                                                                </p>
                                                                <p>
                                                                    If you decide to stay, all details will be asked for depending on your role,
                                                                    customer or freelancer.
                                                                </p>
                                                            </strong>
                                                        </div>
                                                    </Col>
                                                    <Col span={12} push={4}>
                                                        <div>
                                                            <img src='../../static/images/asset_reg2.jpg' />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <Row>
                                            <Col >
                                                <Divider orientation='right'><Icon type='file-add' style={{fontSize: '50px', color: 'rgb(46, 195, 171)'}} />
                                                    <strong>Add Job/Gig</strong></Divider>
                                                <Row>

                                                    <Col span={12} >
                                                        <div>
                                                            <img src='../../static/images/asset_job.jpg' style={{width: 640}}/>
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className="paragraphs" style={{marginTop: '5%', marginLeft: '5%', float: 'right'}}>
                                                            <strong>
                                                                <p>
                                                                    After registration, you will be directed to your own VBR Dashboard,
                                                                </p>
                                                                <p>
                                                                    where you can check your stats, wallet,
                                                                </p>
                                                                <p>
                                                                    and also post jobs/gigs by pressing a simple button.
                                                                </p>
                                                                <p>
                                                                    You can also search for jobs posted already by customers or freelancers
                                                                    by accessing the Market,
                                                                </p>
                                                                <p>
                                                                    directly from the VBR Dashboard.
                                                                </p>
                                                            </strong>
                                                        </div>
                                                    </Col>

                                                </Row>
                                            </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <Row>
                                            <Col >
                                                <Divider orientation='left'><Icon type='link' style={{fontSize: '50px', color: 'rgb(46, 195, 171)'}} />
                                                    <strong>Peer-to-peer Connection</strong></Divider>
                                                <Row>
                                                    <Col span={12}>
                                                        <div className="paragraphs" style={{marginTop: '5%', marginLeft: '5%'}}>
                                                            <strong>
                                                                <p>
                                                                    After above steps are completed, you can connect to the freelancer/customer directly,
                                                                </p>
                                                                <p>
                                                                    without need of centralized authority for mediation and intermediation,
                                                                </p>
                                                                <p>
                                                                    through our peer-to-peer ecosystem, based on Blockchain technology.
                                                                </p>
                                                                <p>
                                                                    Everything will be handled by a Smart Contract, which will be deployed using the consent of both parts.
                                                                </p>
                                                            </strong>
                                                        </div>
                                                    </Col>
                                                    <Col span={12} push={4}>
                                                        <div>
                                                            <img src='../../static/images/asset_p2p2.jpg' style={{width: 640}}/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <Row>
                                            <Col >
                                                <Divider orientation='right'><Icon type='file-protect' style={{fontSize: '50px', color: 'rgb(46, 195, 171)'}} />
                                                    <strong>Smart Contract Creation</strong></Divider>
                                                <Row>
                                                    <Col span={12}>
                                                        <div>
                                                            <img src='../../static/images/asset_contracts2.png' style={{width: 640}}/>
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div  className="paragraphs" style={{marginTop: '5%', marginLeft: '5%', float: 'right'}}>
                                                            <strong>
                                                                <p>
                                                                    Mediation between customer and freelancer
                                                                    will be handled through a Smart Contract,
                                                                </p>
                                                                <p>
                                                                    which will be deployed with consent of both users.
                                                                </p>
                                                                <p>
                                                                    After users discuss via chat, and agree upon certain terms for the job,
                                                                </p>
                                                                <p>
                                                                    Smart Contract form needs to be completed, in order to deploy the virtual agreement.
                                                                </p>
                                                                <p>
                                                                    Smart Contract form will be accessed from the chat window, by simply pressing a button.
                                                                </p>
                                                            </strong>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <Row>
                                            <Col >
                                                <Divider orientation='left'><Icon type='like' style={{fontSize: '50px', color: 'rgb(46, 195, 171)'}} />
                                                    <strong>Job Completion</strong></Divider>
                                                <Row>
                                                    <Col span={12}>
                                                        <div className="paragraphs" style={{marginTop: '5%', marginBottom: '5%', marginLeft: '5%'}}>
                                                            <strong>
                                                                <p>
                                                                    After the job has been completed,
                                                                    the Smart Contract will run a quality check,
                                                                </p>
                                                                <p>
                                                                    based on similar jobs completed previously,
                                                                    which are stored in libraries, on the Blockchain.
                                                                </p>
                                                                <p>
                                                                    Potential disputes between users will be hanlded by the Smart Contract,
                                                                </p>
                                                                <p>
                                                                    guided by user's consent prior submitting contract deployment,
                                                                </p>
                                                                <p>
                                                                    along with VBR Terms and Conditions, which are as well voted by the community.
                                                                </p>
                                                            </strong>
                                                        </div>
                                                    </Col>
                                                    <Col span={12} push={4}>
                                                        <div>
                                                            <img src='../../static/images/asset_completed.jpg' style={{width: 640}}/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>}
                            />
                        </Card>
                    </div>
                  </Col>
              </Row>
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
