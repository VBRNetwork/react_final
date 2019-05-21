import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'
import Figure from 'react-bootstrap/Figure'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/home.css'


class HomeContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <Fragment>

        <div style={{ position: 'relative' }}>
          <div
            style={{
              background: 'linear-gradient(#2ec3ab, #b1b1b1)',
              position: 'absolute',
              width: '100%',
              height: '98%'
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
          </div>

          <div className='container'>
            <Jumbotron style={{ backgroundColor: '#FFF' }}>
              <Row>
                <Col xs='6'>
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
                      <Form.Control
                        size='sm'
                        type='text'
                        bsPrefix='searchpost form-control'
                        placeholder='Post your project and choose the best freelancer'
                      />
                      <span className='input-group-btn'>
                        <Button
                          size='sm'
                          style={{
                            backgroundColor: '#2EC3AB',
                            borderColor: '#2EC3AB'
                          }}
                        >
                          Search
                        </Button>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs='6'>
                  <Image src={'../../static/images/homepage_man.png'} style={{ marginLeft: '40%' }} />
                  <div className="small-promo-text">
                    <div style={{ position: 'relative' }}>
                      <div
                        style={{ display: 'inline' }}
                        className='small-icon-button'
                      >
                        <FontAwesomeIcon
                          icon='play-circle'
                          size='2x'
                          className='play-icon-color'
                        />
                      </div>
                      <div style={{ display: 'inline' }}>
                        Meet The First Decentralized Environment for
                        Freelancers!
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Jumbotron>
            <hr />
          </div>
        </div>

        <div className='container' >
          <Carousel >
            <Carousel.Item style={{ backgroundColor: 'black' }}>
              <img
                className='d-block h-200'
                src={'../../static/images/freelancer-working2.png'}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ backgroundColor: 'black' }}>
              <img

                className='d-block'
                src={'../../static/images/freelancer-b.png'}
                alt='Second slide'
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ backgroundColor: 'black' }}>
              <img
                className='d-block'
                src={'../../static/images/freelancer_old.png'}
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>

        <div style={{ position: 'relative', top: '50px' }} className='wt-categoryexpl container'>
          <div>
            <Row>
              <Col xs={6} className='wt-categorycontent' lg={4}>
                <Figure>
                  <Figure.Image
                    height='80'
                    width='80'
                    alt='171x180'
                    src={'../../static/images/img-01.png'}
                  />
                  <Figure.Caption>
                    Writing
                  </Figure.Caption>
                </Figure>
              </Col>
              <Col xs={6} className='wt-categorycontent' lg={4}>
                <Figure>
                  <Figure.Image
                    height='80'
                    width='80'
                    alt='171x180'
                    src={'../../static/images/img-02.png'}
                  />
                  <Figure.Caption>
                          Design
                  </Figure.Caption>
                </Figure>
              </Col>
              <Col xs={6} className='wt-categorycontent' lg={4}>
                <Figure>
                  <Figure.Image
                    height='80'
                    width='80'
                    alt='171x180'
                    src={'../../static/images/img-03.png'}
                  />
                  <Figure.Caption>
                    Business Consultance
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
            <Row className='mt-5 '>
              <Col xs={6} className='wt-categorycontent' lg={4}>
                <Figure>
                  <Figure.Image
                    height='80'
                    width='80'
                    alt='171x180'
                    src={'../../static/images/img-04.png'}
                  />
                  <Figure.Caption>
                    PR
                  </Figure.Caption>
                </Figure>
              </Col>
              <Col xs={6} className='wt-categorycontent' lg={4}>
                <Figure>
                  <Figure.Image
                    height='80'
                    width='80'
                    alt='171x180'
                    src={'../../static/images/img-05.png'}
                  />
                  <Figure.Caption>
                    Developers
                  </Figure.Caption>
                </Figure>
              </Col>
              <Col xs={6} className='wt-categorycontent' lg={4}>
                <Figure>
                  <Figure.Image
                    height='80'
                    width='80'
                    alt='171x180'
                    src={'../../static/images/img-08.png'}
                  />
                  <Figure.Caption>
                    Marketing & SEO
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
          </div>
        </div>

        <div style={{ position: 'relative', marginTop: '6rem' }} >

          <div id='how-it-works'>
            <h3 className='text-center how-it-work-title'>How it works?</h3>
          </div>
          <div className='container'>
            <div >
              <Row>
                <Col xs={6} lg={3}>
                  <Card className='how-it-works-box'>
                    <Card.Body>
                      <Card.Title className='box-middle-title'>
                        Post your project
                      </Card.Title>
                      <Card.Text className='box-middle-text'>
                        Tell us about your project. We connect you with top
                        talent around the world, or near you.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} lg={3}>
                  <Card className='how-it-works-box'>
                    <Card.Body>
                      <Card.Title className='box-middle-title'>
                        Review freelancers
                      </Card.Title>
                      <Card.Text className='box-middle-text'>
                        Tell us about your project. We connect you with top
                        talent around the world, or near you.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} lg={3}>
                  <Card className='how-it-works-box'>
                    <Card.Body>
                      <Card.Title className='box-middle-title'>
                        Collaborate
                      </Card.Title>
                      <Card.Text className='box-middle-text'>
                        Tell us about your project. We connect you with top
                        talent around the world, or near you.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} lg={3}>
                  <Card className='how-it-works-box'>
                    <Card.Body>
                      <Card.Title className='box-middle-title'>
                        Secure payment
                      </Card.Title>
                      <Card.Text className='box-middle-text'>
                        Tell us about your project. We connect you with top
                        talent around the world, or near you.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>

            <hr />
            <div className='container mt-5'>
              <div className="home-section">
                <Row>
                  <Col lg={3} xs={12}>
                    <Image

                      className='chair-tablet-image img-fluid'
                      src={'../../static/images/footer_chair.png'}
                    />
                  </Col>
                  <Col lg={7} xs={12}>
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
                        {' '}
                        Ample recruitment process for freelancers in order to
                        limit the amount of scammers on our platform Highly
                        secure environment based on algorithms developed to
                        ensure the safety of each and every one of our users.
                      </p>
                    </div>
                  </Col>
                  <Col lg={2} xs={12}>
                    <div style={{ marginTop: '50px', textAlign: 'center' }}>
                      <Button className='vbr-button' size='sm'>
                        Register now
                      </Button>
                      <br />
                      <span className='small' style={{ fontSize: '11px' }}>
                        {' '}
                        No upfront payments, no hidden
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>

      </Fragment>
    )
  }

  _goToAbout = () => {
    this.props.router.push('/about')
  }
}

function mapStateToProps (state) {
  return {

  }
}

HomeContainer.propTypes = {
}

export { HomeContainer }
export default connect(mapStateToProps, {
})(HomeContainer)
