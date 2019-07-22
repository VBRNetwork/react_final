import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Card, Icon, Button, Empty} from 'antd'
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
        <Row>
          <Col span={10}>
            <div style={{marginTop: '5%', marginLeft: '5%'}}><h3 className="about"><strong>Register on VBR</strong></h3></div>
            <hr />
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
            <br />
          </Col>
          <Col span={4}  >
             <div className='hiw-icon'><Icon  type="profile" style={{fontSize: '100px', textAlign: 'center', marginTop: '5%'}} /></div>
          </Col>
          <Col span={10}>
          </Col>
        </Row>

        <Row>
          <Col span={10} >
          </Col>
          <Col span={2}  >
            <div className='hiw-icon'><Icon  type="file-add" style={{fontSize: '100px', textAlign: 'center', marginTop: '5%'}} /></div>
          </Col>
          <Col span={10}>
              <div style={{marginTop: '5%'}}><h3 className="about"><strong>Add Job/Gig</strong></h3></div>
              <hr />
              <div className="paragraphs" style={{marginTop: '5%'}}>
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
        <Row>
          <Col span={10}>
            <div style={{marginTop: '5%', marginLeft: '5%'}}><h3 className="about"><strong>Peer-to-peer Connection</strong></h3></div>
            <hr />
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
            <br />
          </Col>
          <Col span={4}  >
            <div className='hiw-icon'><Icon  type="link" style={{fontSize: '100px', textAlign: 'center', marginTop: '5%'}} /> </ div>
          </Col>
          <Col span={10}>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
          </Col>
          <Col span={2}  >
            <div className='hiw-icon'><Icon  type="file-protect" style={{fontSize: '100px', textAlign: 'center', marginTop: '5%'}} /></div>
          </Col>
          <Col span={10}>
            <div style={{marginTop: '5%'}}><h3 className="about"><strong>Smart Contract Creation</strong></h3></div>
            <hr />
            <div  className="paragraphs" style={{marginTop: '5%'}}>
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
        <Row>
          <Col span={10}>
            <div style={{marginTop: '5%', marginLeft: '5%'}}><h3 className="about"><strong>Job Completion</strong></h3></div>
            <hr />
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
          <Col span={2}  >
            <div className='hiw-icon'><Icon  type="like" style={{fontSize: '100px', textAlign: 'center', marginTop: '5%', marginBottom: '5%'}} /> </div>
          </Col>
          <Col span={10}>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card 
              size="small"
              bordered={false}
              cover={<img src='../../static/images/picture_5.png' />}
            >
              <Meta 
              title={<div ><h3 className="about"><strong>About Us</strong></h3><hr /></div>} 
              description={<div className="paragraphs" ><strong><p>VBRinc is a platform that aims to bring the freelance market back to its’ roots.
              Over time, this business model became a shadow of itself due to unfair moderation,
              micromanaging by the owners of the platforms the transactions were made.</p>
              <p>
              That’s why we decided to make VBRinc. Here the terms are voted on by you, since you know
              what’s best for your endeavours. We are only here to transparently moderate if anything goes
              wrong. We doubt anything will go wrong though, since we are implementing smart contracts.
              The technology of Ethereum fame is coming to town! All payments will be processed only when
              both the customer and the freelancer agree the project is finished. The project that, by the way,
              can be tracked in real time, automatically.</p>
              <p>
              Nobody likes to lose money. That’s why we are instituting nonexistent or minuscule
              commissions, depending on the payment processor used. This part is on us. What about
              unexpected malicious attacks though?</p>
              <p>
              Well, those won’t be a problem either, due to our use of cold wallets. This means that the
              money is stored offline instead of virtually, making it invulnerable to phishing.
              To sum it up, we are here to make your life easier, whether you need something done fast or
              want to work from the comfort of your home with the hassles of corporate life. Where else can
              you make the platform work for YOU?
              Ready to come on board? We’ve been waiting for you.</p></strong></div>}
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
