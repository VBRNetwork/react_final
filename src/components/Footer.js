import React, { Component } from 'react'

import { Row, Col, List, Typography } from 'antd';

import ListGroup from 'react-bootstrap/ListGroup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, fab)


const menu1 = [
  'VBR Community',
  'About Us',
  'How it works',
  'Terms & Conditions',
  'VBR Community Defense',
  'Privacy Policy',
];

const menu2 = [
    'Europe',
    'North America',
    'Asia',
    'South America',
    'Australia',
    'All locations',
  ];


  const menu3 = [
    'Content Writing & Translation',
    'Marketing & SEO',
    'Graphic & Web Design',
    'Business Development',
    'Coding & Developers',
    'All skills',
  ];
  
  

class Footer extends Component {
    render () {
      return (

        <footer className="footer-box" style={{ backgroundColor: '#37405E' }}>

                <div>
                    <h3 style={{ marginBottom: 16 }}>Company</h3>
                    <List
                    bordered
                    dataSource={menu1}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                    />
                    <h3 style={{ margin: '16px 0' }}>Browse by location</h3>
                    <List
                    size="small"
                    bordered
                    dataSource={menu2}
                    renderItem={item => <List.Item>{item}</List.Item>}
                    />
                    <h3 style={{ margin: '16px 0' }}>Browse by skills</h3>
                    <List
                    size="large"
                    bordered
                    dataSource={menu3}
                    renderItem={item => <List.Item>{item}</List.Item>}
                    />

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
                </div>


          <div className='container'>
            <hr />
            <Row>
              <Col >
                <div className='text-center text-white copyright'>
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
