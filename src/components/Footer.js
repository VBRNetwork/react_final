import React, { Component } from 'react'
import { Row, Col, List } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, fab)

import '../styles/footer.css'

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
            <div className="container" style={{margin:'10px'}}>
                <Row  type="flex" justify="space-around" gutter={16}>


                <Col span={6}   className="gutter-row" >

                    <h5 >Company</h5>
                    <List
                    dataSource={menu1}
                    renderItem={item => (
                        
                        <List.Item className="footer-list footer-item">
                            {item}
                        </List.Item>
                    )}
                    />
                </Col>

                
                <Col span={6}   className="gutter-row" >
                    <h5 >Browse by location</h5>
                    <List
                    size="small"
                    dataSource={menu2}
                    renderItem={item => 
                    
                    <List.Item className="footer-list footer-item">
                        {item}
                    </List.Item>}
                    />

                </Col>

                <Col span={6}   className="gutter-row" >

                    <h5 >Browse by skills</h5>
                    <List
                    size="large"
                    dataSource={menu3}
                    renderItem={item =>
                    
                    <List.Item className="footer-list footer-item">
                        {item}
                        
                    </List.Item>}
                    />
                </Col>
                <Col span={6}>
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
                
                </Col>
                </Row>
              
                <Row>
                <Col >
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
