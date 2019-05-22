import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Wrapper from './Wrapper'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, fab)

class Footer extends React.Component {
    
    handleClick = e => {
     
    };

    render () {
      return (

        <footer className="footer-box" style={{ backgroundColor: '#37405E' }}>
          <div className='container'>
            <Row>
              <Col lg={3} xs={6}>
                <ListGroup variant='flush'>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <h5>Company</h5>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/vbr-community'>VBR Community</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/about-us'>About Us</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/how-works'>How it works</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/terms-and-condition'>Terms & Conditions</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/vbr-community-defense'>VBR Community Defense</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/terms-and-condition'>Privacy Policy</a>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg={3} xs={6}>
                <ListGroup variant='flush'>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <h5>Browse by location</h5>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/vbr-community'>Europe</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/about-us'>North America</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/how-works'>Asia</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/terms-and-condition'>South America</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/terms-and-condition'>Australia</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/vbr-community'>All locations</a>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg={3} xs={6}>
                <ListGroup variant='flush'>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <h5>Browse by skills</h5>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/vbr-community'>Content Writing & Translation</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/about-us'>Marketing & SEO</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/how-works'>Graphic & Web Design</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/terms-and-condition'>Business Development</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/terms-and-condition'>Coding & Developers</a>
                  </ListGroup.Item>
                  <ListGroup.Item bsPrefix='footer-list'>
                    <a href='/vbr-community'>All skills</a>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg={3} xs={6}>
                <ListGroup variant='flush'>
                  <img
                    src={'../../static/images/vbr_logo.png'}
                    style={{ width: '120px', margin: '0 auto' }}
                  />
                  <Row style={{ marginTop: '30px' }}>
                    <Col className='text-center text-white'>
                      <a className='text-white' href=''>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                      </a>
                    </Col>
                    <Col className='text-center'>
                      <a className='text-white' href=''>
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                      </a>
                    </Col>
                    <Col className='text-center'>
                      <a className='text-white' href=''>
                        <FontAwesomeIcon icon={['fas', 'envelope-open']} />
                      </a>
                    </Col>
                  </Row>
                </ListGroup>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={12}>
                <div className='text-center text-white copyright'>
                  {' '}
                        VBR Inc. 2019 All Rights Reserved.{' '}
                </div>
              </Col>
            </Row>
          </div>
        </footer>
      )
    }
}

export default Footer
