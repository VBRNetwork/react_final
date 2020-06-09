import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card} from 'antd'
import '../styles/about_us.css'
const { Meta } = Card;

class AboutUsContainer extends Component {
    componentDidMount () {
    }

    render () {
        return (
            <div>
                <Row>
                    <Col>
                        <div>
                            <img src={'../../static/images/design/about_us.jpg'} style={{width:'100%'}}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={'about-us-rectangle'} >
                            <Row>
                                <Col span={12}>
                                    <div>
                                        <span className={'about-us-text'}>
                                            Veelancing was born from the need to help freelancers 
                                            all over the world find jobs and collaborate easier.
                                        </span>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <span className={'about-us-text2'}>
                                            <p>
                                                Veelancing started with an idea and 3 passionate people that decided to change the way the communities are built. 
                                                Together with our partners and collaborators, we are building a platform where freelancers can find great jobs, 
                                                and companies can hire experts. 
                                            </p>
                                            <p>
                                                We strive to build a transparent community where everyone can contribute and collaborate. 
                                                With the help of Blockchain technology the payments are instant and secure, giving everyone access and flexibility 
                                                to use cryptocurrency.
                                            </p>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} push={1}>
                        <div style={{marginTop: '2%'}}>
                            <h1  className="the-team">The team</h1>
                            <p className="the-team-text">
                                We are a team of engineers and tech enthusiasts that aim to make the world 
                                a better place with the help of technology.
                            </p>
                        </div>
                    </Col>
                </Row>

                <div style={{marginLeft: '7%'}} >
                <Row type="flex" justify="center">
                        <Col span={24} >
                            <Row >
                                <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                        src="../../static/images/sample-avatar.jpg" />
                                    <div className="the-team-name">Stefan Vanea</div>
                                    <div className="the-team-title">Chief Executive Officer</div>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                        src="../../static/images/sample-avatar.jpg" />
                                    <div className="the-team-name">Fedot Serghei</div>
                                    <div className="the-team-title">Head of IT & Dev WW</div>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                        src="../../static/images/sample-avatar.jpg" />
                                    <div className="the-team-name">Daniel Ionut</div>
                                    <div className="the-team-title">Web Developer</div>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                         src="../../static/images/sample-avatar.jpg"  />
                                    <div className="the-team-name">Sorin Anghelescu</div>
                                    <div className="the-team-title">Chief Financial Officer</div>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                         src="../../static/images/sample-avatar.jpg"  />
                                    <div className="the-team-name">Alexandru Barborica</div>
                                    <div className="the-team-title">Chief Technology Officer</div>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                         src="../../static/images/sample-avatar.jpg"  />
                                    <div className="the-team-name">Cristian Lipciuc</div>
                                    <div className="the-team-title">Content Creator & Copywriter</div>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                         src="../../static/images/sample-avatar.jpg"  />
                                    <div className="the-team-name">Ileana Marcut</div>
                                    <div className="the-team-title">UX & UI Designer</div>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                         src="../../static/images/sample-avatar.jpg"  />
                                    <div className="the-team-name">Marius Glufcios</div>
                                    <div className="the-team-title">Investor & President</div>
                                </Col>
                            </Row>
                        </Col>
                </Row>
                </div>

                <div style={{marginTop:'50px', marginBottom:'50px'}}>
                    <Row>
                    <Col span={8} push={1}>
                            <div className="our-partners-box">
                                <h1 className="our-partners-title">Our Partners</h1>
                            </div>
                        </Col>
                    </Row>
                    <div style={{marginLeft: '8%'}}>
                    <Row>
                        <Col span={24} >
                            <Row >
                                <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images1"
                                         src="../../static/images/logo-ced.png" />
                                    <div className="the-team-name">CoinExchangeData</div>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                         src="../../static/images/NMC_productions.png" />
                                    <div className="the-team-name">NMC Productions</div>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={8}>
                                    <img className="the-team-images"
                                         src="../../static/images/urban_logo_home.png" />
                                    <div className="the-team-name">Urban Garden</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {

    }
}


AboutUsContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(AboutUsContainer)