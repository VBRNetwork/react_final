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
      <footer className='footer-box' style={{ backgroundColor: '#37405E' }}>
        <div className='container' style={{ marginLeft: '50px', marginRight: '50px' }}>
          <Row type='flex' justify='center' style={{ marginBottom: '20px' }}>
            <Col span={4} className='gutter-row'>
              <h3 className='footer-titles'>Company</h3>
              <List
                dataSource={menu1}
                renderItem={item => (
                  <List.Item className='footer-list footer-item'>

                    <a> {item}</a>

                  </List.Item>
                )}
              />
            </Col>

            <Col span={4} className='gutter-row'>
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

            <Col span={4} className='gutter-row'>
              <h3 className='footer-titles'>Browse by skills</h3>
              <List
                size='large'
                dataSource={menu3}
                renderItem={item =>

                  <List.Item className='footer-list footer-item'>
                    <Link href='/jobs/search'>
                      <a>{item}</a>
                    </Link>
                  </List.Item>}
              />
            </Col>

            <Col span={4}>
              <img
                src={'../../static/images/vbrLogo.png'}
                className='footer-logo'
                style={{ width: '120px', margin: '0 auto' }}
              />

              <Row style={{ marginTop: '30px' }}>
                <Col span={8} className='text-center text-white'>
                  <a className='text-white' href=''>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  </a>
                </Col>
                <Col span={8} className='text-center'>
                  <a className='text-white' href=''>
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </a>
                </Col>
                <Col span={8} className='text-center'>
                  <a className='text-white' href=''>
                    <FontAwesomeIcon icon={['fas', 'envelope-open']} />
                  </a>
                </Col>
              </Row>
            </Col>

          </Row>
          <hr />
          <Row>
            <Col>
              <div className='text-right text-white copyright'>
                                VBR Inc. 2019 All Rights Reserved.
              </div>
            </Col>
          </Row>
        </div>

      </footer>
    )
  }
}

export default Footer
