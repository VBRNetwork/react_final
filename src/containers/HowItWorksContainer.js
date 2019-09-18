import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Card, Icon, Button, Empty, Divider, Breadcrumb} from 'antd'
import '../styles/hiw.css'
const { Meta } = Card;

class HowItWorksContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
            <div>
              <Breadcrumb style={{margin: '1%'}}>
                <Breadcrumb.Item>
                  <a href='/home'>Home</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href='/how-it-works'>How It Works</a>
                </Breadcrumb.Item>
              </Breadcrumb>
              <Row>
                  <Col>
                      <div style={{padding: '1%'}}><h2 className="about"><strong>VBR Network - How It Works</strong></h2><hr /></div>
                      <Card 
                          size="small" 
                          >

                      <Meta 
                          title={<div ><h3 className="about"><strong>Learn About VBR</strong></h3><hr /></div>} 
                          description=
                          {<div className="paragraphs" >
                              <Row>
                                  <Col >
                                      <Divider orientation='left'><Icon type='profile' style={{fontSize: '50px', color: 'rgb(46, 195, 171)'}} />
                                      <strong>Register on VBR</strong></Divider>
                                      <div className="paragraphs" style={{marginTop: '5%', marginLeft: '5%'}}>
                                        <strong>
                                          <p>
                                            You can always register in the most easiest way on VBR Marketplace.
                                          </p>
                                          <p>
                                            Either you are freelancer, customer or both, you will be able to sign up in seconds.
                                            Details which we ask for during registration process are subject of our <a>Privacy Policy</a> and you have full control on it. 
                                          </p>
                                        </strong>
                                      </div>
                                  </Col>
                                  </Row>
                                  <br />
                                  <br />
                                  <Row>
                                  <Col >
                                  <Divider orientation='right'><Icon type='file-add' style={{fontSize: '50px', color: 'rgb(46, 195, 171)'}} />
                                      <strong>Add Job/Gig</strong></Divider>
                                      <div className="paragraphs" style={{marginTop: '5%', marginLeft: '5%'}}>
                                        <strong>
                                          <p>
                                            After registration, you will be directed to your own VBR Dashboard,
                                            where you can check your stats, wallet, 
                                            and also post jobs/gigs by pressing a simple button.
                                          </p>
                                          <p>
                                            You can also search for jobs posted aready by customers or freelancers 
                                            by accessing the Market, directly from the VBR Dashboard. 
                                          </p>
                                        </strong>
                                      </div>
                                  </Col>
                              </Row>
                              <br />
                              <br />
                              <Row>
                                  <Col >
                                      <Divider orientation='left'><Icon type='link' style={{fontSize: '50px', color: 'rgb(46, 195, 171)'}} />
                                      <strong>Peer-to-peer Connection</strong></Divider>
                                      <div className="paragraphs" style={{marginTop: '5%', marginLeft: '5%'}}>
                                        <strong>
                                          <p>
                                            After above steps are completed, you can connect to the freelancer/customer directly, 
                                            without need of centralized authority for mediation and intermediation, 
                                            through our peer-to-peer ecosystem, based on Blockchain technology.
                                          </p>
                                          <p>
                                            Everything will be handled by a Smart Contract, which will be deployed using the consent of both parts.
                                          </p>
                                        </strong>
                                      </div>
                                  </Col>
                                  </Row>
                                  <br />
                                  <br />
                                  <Row>
                                  <Col >
                                  <Divider orientation='right'><Icon type='file-protect' style={{fontSize: '50px', color: 'rgb(46, 195, 171)'}} />
                                      <strong>Smart Contract Creation</strong></Divider>
                                      <div  className="paragraphs" style={{marginTop: '5%', marginLeft: '5%'}}>
                                        <strong>
                                          <p>
                                            As mentioned previously, mediation between customer and freelancer
                                            will be handled through a Smart Contract, 
                                            which will be deployed with consent of both users. 
                                          </p>
                                          <p>
                                            After users discuss via chat, and agree upon certain terms for the job,
                                            Smart Contract form needs to be completed, in order to deploy the virtual agreement.
                                            Smart Contract form will be accessed from the chat window, by simply pressing a button. 
                                          </p>
                                        </strong>
                                      </div>
                                  </Col>
                              </Row>
                              <br />
                              <br />
                              <Row>
                                  <Col >
                                  <Divider orientation='left'><Icon type='like' style={{fontSize: '50px', color: 'rgb(46, 195, 171)'}} />
                                      <strong>Job Completion</strong></Divider>
                                      <div className="paragraphs" style={{marginTop: '5%', marginBottom: '5%', marginLeft: '5%'}}>
                                        <strong>
                                          <p>
                                            After the job has been completed, 
                                            the Smart Contract will run a quality check, 
                                            based on simmilar jobs completed previously, 
                                            which are sotred in libraries, on the Blockchain.
                                          </p>
                                          <p>
                                            Potential disputes between users will be hanlded by the Smart Contract, 
                                            guided by user's consent prior submmiting contract deployment, 
                                            along with VBR Terms and Conditions, which are as well voted by the community.
                                          </p>
                                        </strong>
                                      </div>
                                  </Col>
                              </Row>
                          </div>}
                        />
                      </Card>
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
