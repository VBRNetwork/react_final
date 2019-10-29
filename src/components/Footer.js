import React, { Component } from 'react'
import { Row, Col, List } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'

import '../styles/footer.css'

library.add(fas, fab)

const menu1 = [
  'VBR Community',
  'About Us',
  'How it works',
  'Terms & Conditions',
  'VBR Community Defense',
  'Privacy Policy'
]

const menu2 = [
  'Europe',
  'North America',
  'Asia',
  'South America',
  'Australia',
  'All locations'
]

const menu3 = [
  'Content Writing & Translation',
  'Marketing & SEO',
  'Graphic & Web Design',
  'Business Development',
  'Coding & Developers',
  'All skills'
]

class Footer extends Component {
  render () {
    return (
      <footer className='footer-box' style={{ backgroundColor: 'rgba(26, 29, 40, 0.86)'}}>

          <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>

                  <div className='container' style={{ marginLeft: '50px', marginRight: '50px'}}>
                      <Row type='flex' justify='center' style={{ marginBottom: '20px',paddingTop: '20px'}}>

                          <Col  xs={24} sm={4} md={6} lg={8} xl={6} xxl={6} className='gutter-row'>
                              <h3 className='footer-titles'>Company</h3>
                              <List
                                  dataSource={menu1}
                                  renderItem={item => (
                                      <List.Item className='footer-list footer-item'>
                                          <a>{item}</a>
                                      </List.Item>
                                  )}
                              />
                          </Col>

                          <Col xs={24} sm={4} md={6} lg={8} xl={6} xxl={6} className='gutter-row'>
                              <h3 className='footer-titles'>Browse by location</h3>
                              <List
                                  size='small'
                                  dataSource={menu2}
                                  renderItem={item =>
                                      <List.Item className='footer-list footer-item'>
                                          {item}
                                      </List.Item>}
                              />
                          </Col>

                          <Col xs={24} sm={4} md={6} lg={8} xl={6} xxl={6} className='gutter-row'>
                              <h3 className='footer-titles'>Browse by skills</h3>
                              <List
                                  size='large'
                                  dataSource={menu3}
                                  renderItem={item =>

                                      <List.Item className='footer-list footer-item'>
                                          <Link href='/categories/business/business-plan-for-start-ups'>
                                              <a>{item}</a>
                                          </Link>
                                      </List.Item>}
                              />
                          </Col>

                          <Col xs={24} sm={4} md={6} lg={8} xl={6} xxl={6} className="text-center">
                              <img
                                  src={'../../static/images/vbr_logo.png'}

                                  className=''
                                  style={{ width: '120px', margin: '0 auto' }}
                              />

                              <Row style={{ marginTop: '30px' }}>
                                  <Col span={5} offset={4} className='text-center text-white'>
                                      <a className='text-white' href=''>
                                          <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                      </a>
                                  </Col>
                                  <Col span={5} className='text-center'>
                                      <a className='text-white' href=''>
                                          <FontAwesomeIcon icon={['fab', 'twitter']} />
                                      </a>
                                  </Col>
                                  <Col span={5} className='text-center'>
                                      <a className='text-white' href=''>
                                          <FontAwesomeIcon icon={['fas', 'envelope-open']} />
                                      </a>
                                  </Col>
                              </Row>
                          </Col>

                      </Row>
                      <hr />
                      <Row>
                          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <div className='text-right text-white copyright'>
                                  VBR Inc. 2019 All Rights Reserved.
                              </div>
                          </Col>
                      </Row>
                  </div>

              </Col>
          </Row>

      </footer>
    )
  }
}

export default Footer
