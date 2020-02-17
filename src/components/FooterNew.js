import React, { Component, Fragment } from 'react'
import { Row, Col, List, Menu, Icon } from 'antd'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'
import '../styles/footer.css'
import ScrollButton from './Elements/ScrollButton'
library.add(fas, fab)
import CookieConsent, { Cookies } from "react-cookie-consent";

class NewFooter extends Component {
    render () {
        return (
            <footer className='footer-box' style={{ backgroundColor: 'rgba(26, 29, 40, 0.86)'}}>
                <Row>
                    <div className='container'>
                        <Row>
                            <Col xs={24} sm={12} md={12} lg={12} xl={{span:12, offset:4}}>
                                <Menu mode='horizontal' style={{
                                    marginTop: '5px',
                                    background: 'transparent',
                                    borderBottom: 'initial'
                                }}>

                                    <Menu.Item key='app122'>
                                        <Link href='/ico'>
                                            <a className="menu-item item-f"> Privacy Policy</a>
                                        </Link>
                                    </Menu.Item>

                                    <Menu.Item key='app1'>
                                        <Link href='/how-it-works'>
                                            <a className="menu-item item-f"> How it Works</a>
                                        </Link>
                                    </Menu.Item>


                                    <Menu.Item key='about'>
                                        <Link href='/about'>
                                            <a className="menu-item item-f">  About Us</a>
                                        </Link>
                                    </Menu.Item>

                                    <Menu.Item key='contact'>
                                        <Link href='/about'>
                                            <a className="menu-item item-f">  Contact</a>
                                        </Link>
                                    </Menu.Item>
                                </Menu>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                                <div className='text-right text-white copyright' style={{marginTop:'25px'}}>
                                    VBR Inc. 2019 All Rights Reserved.
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
                <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
                <div className="chat-support"/>
                <CookieConsent
                    location="bottom"
                    buttonText={<div><strong>I agree !</strong></div>}
                    cookieName="vee_cookie_consent"
                    style={{ background: "#2B373B" }}
                    buttonStyle={{ color: "#0b9599", fontSize: "14px", backgroundColor: '#FFF' }}
                    expires={150}
                >
                    <span style={{ fontSize: "13px" }}>
                        By continuing to navgate on this website, you agree with our 
                        <a href="#" style={{color: '#0b9599'}}> Cookie Policy & Privacy Policy </a>, our <a href="#" style={{color: '#0b9599'}}> Terms & Conditions </a>, 
                        and you consent that you have at least 18 yars old, or if based on USA, 21.
                    </span>
                </CookieConsent>
            </footer>
        )
    }
}

export default NewFooter
