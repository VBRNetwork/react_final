import React, { Component } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import '../styles/ico.css'
import { Carousel, Layout, Row, Col, Button, Card, Input, Avatar, Empty, Breadcrumb, Form, Icon ,Alert} from 'antd'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const { Content } = Layout
const { Meta } = Card
const { TextArea } = Input

class IcoContainer extends Component {

    constructor (props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            description: '',

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeDescription = this.handleChangeDescription.bind(this)

    }

    static async getInitialProps ({ store, query }) {
    }

    componentDidMount () {
    }

    handleChange (event) {
        this.setState()
    }

    handleChangeName (event) {
        this.setState({
            name: event.target.value,
        })
    }

    handleChangeEmail (event) {
        this.setState({
            email: event.target.value,
        })
    }

    handleChangeDescription (event) {
        this.setState({
            description: event.target.value,
        })

    }

    render () {


        return (
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                    <Alert
                        style={{marginTop:'20px',marginBottom:'20px'}}
                        message="Informational Notes"
                        description="This page is currently under construction."
                        type="info"
                        showIcon
                    />
                </Col>
            </Row>
        )

        return (
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 24 }}>
                                    <div style={{
                                        position: 'relative',
                                        background: 'linear-gradient(rgb(46, 195, 171), rgb(35, 33, 33))'
                                    }}>
                                        <div style={{ position: 'absolute', width: '100%' }}>
                                            <Particles
                                                params={{
                                                    particles: {
                                                        number: {
                                                            value: 55

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
                                        <Row>
                                            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 24 }}>
                                                <div style={{ width: '300px', height: '160px', margin: '0 auto' }}>
                                                    <div>
                                                        <h3 style={{ color: '#FFF', textAlign: 'center', marginTop: '10%' }}>
                                                            <strong>
                                                                <p> 
                                                                    VBR Network's Initial Coin Offering
                                                                </p>
                                                                <p>
                                                                    Our Crowd Sale will be launched shortly.<br /> 
                                                                    Stay tuned for more details !
                                                                </p>
                                                            </strong>
                                                        </h3>
                                                    </div>

                                                </div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <br/>
                                    </div>
                                    <br/>
                                    <Row>
                                        <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={{ span: 8 }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <img
                                                    alt="concept"
                                                    src={'../../static/images/asset_8.png'}

                                                />
                                            </div>
                                        </Col>

                                        <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={{ span: 8 }}>
                                            <VerticalTimeline>
                                                <VerticalTimelineElement
                                                    className="vertical-timeline-element--work"
                                                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                                    date="2011 - present"
                                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                    icon={<Icon type={'fund'} />}
                                                >
                                                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                                                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                                                    <p>
                                                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                                    </p>
                                                </VerticalTimelineElement>
                                                <VerticalTimelineElement
                                                    className="vertical-timeline-element--work"
                                                    date="2010 - 2011"
                                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                    icon={<Icon type={'fund'} />}
                                                >
                                                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                                                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                                                    <p>
                                                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                                                    </p>
                                                </VerticalTimelineElement>
                                                <VerticalTimelineElement
                                                    className="vertical-timeline-element--work"
                                                    date="2008 - 2010"
                                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                    icon={<Icon type={'fund'} />}
                                                >
                                                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                                                    <p>
                                                    User Experience, Visual Design
                                                    </p>
                                                </VerticalTimelineElement>
                                                <VerticalTimelineElement
                                                    className="vertical-timeline-element--work"
                                                    date="2006 - 2008"
                                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                                    icon={<Icon type={'fund'} />}
                                                >
                                                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                                                    <p>
                                                    User Experience, Visual Design
                                                    </p>
                                                </VerticalTimelineElement>
                                                <VerticalTimelineElement
                                                    className="vertical-timeline-element--education"
                                                    date="April 2013"
                                                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                                    icon={<Icon type={'fund'}/>}
                                                >
                                                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                                                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                                                    <p>
                                                    Strategy, Social Media
                                                    </p>
                                                </VerticalTimelineElement>
                                                <VerticalTimelineElement
                                                    className="vertical-timeline-element--education"
                                                    date="November 2012"
                                                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                                    icon={<Icon type={'fund'}/>}
                                                >
                                                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                                                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                                                    <p>
                                                    Creative Direction, User Experience, Visual Design
                                                    </p>
                                                </VerticalTimelineElement>
                                                <VerticalTimelineElement
                                                    className="vertical-timeline-element--education"
                                                    date="2002 - 2006"
                                                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                                    icon={<Icon type={'fund'}/>}
                                                >
                                                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                                                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                                                    <p>
                                                    Creative Direction, Visual Design
                                                    </p>
                                                </VerticalTimelineElement>
                                                <VerticalTimelineElement
                                                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                                    icon={<Icon type={'fund'} />}
                                                />
                                            </VerticalTimeline>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <br/>
                                    <div style={{ textAlign: 'center' }}><h2><strong>Meet VBR Network Team</strong></h2>
                                    </div>

                                    <Row>
                                        <Col xs={24} sm={{ offset: 8, span: 12 }} md={8} lg={8} xl={8}
                                             xxl={{ span: 10, offset: 7 }}>

                                            <Carousel autoplay={true}>

                                                <Card
                                                    bordered={false}
                                                    style={{position:'relative'}}
                                                    cover={<img style={{ position: 'absolute' }}
                                                                src={'../../static/images/picture_6.png'}/>}

                                                >
                                                    <Meta
                                                        className="trans-meta"
                                                        avatar={<Avatar size={64}
                                                                        icon="user"
                                                                        style={{
                                                                            marginTop: '5px',
                                                                            marginLeft: '10px',
                                                                            background: '#FFF',
                                                                            color: '#FFF',
                                                                            float: 'right'
                                                                        }}/>}
                                                        title={<div className="trans-card-title"><strong>Stefan
                                                            Vanea</strong></div>}
                                                        description={<div className="trans-card"><strong>Chief Executive
                                                            Officer</strong></div>}
                                                    />
                                                </Card>
                                                <Card
                                                    hoverable
                                                    style={{position:'relative'}}
                                                    cover={<img style={{ position: 'absolute' }}
                                                                src={'../../static/images/picture_6.png'}/>}
                                                >
                                                    <Meta
                                                        avatar={<Avatar size={64}
                                                                        icon="user"
                                                                        style={{
                                                                            marginTop: '5px',
                                                                            marginLeft: '10px',
                                                                            background: '#FFF',
                                                                            color: '#FFF',
                                                                            float: 'right'
                                                                        }}/>}
                                                        title={<div className="trans-card-title"><strong>Serghei
                                                            Fedot</strong></div>}
                                                        description={<div className="trans-card"><strong>Chief
                                                            Technology Officer</strong></div>}

                                                        className="trans-meta"/>
                                                </Card>

                                                <Card
                                                    hoverable
                                                    style={{position:'relative'}}
                                                    cover={<img style={{ position: 'absolute' }}
                                                                src={'../../static/images/picture_6.png'}/>}
                                                >
                                                    <Meta
                                                        avatar={<Avatar size={64}
                                                                        icon="user"
                                                                        style={{
                                                                            marginTop: '5px',
                                                                            marginLeft: '10px',
                                                                            background: '#FFF',
                                                                            color: '#FFF',
                                                                            float: 'right'
                                                                        }}/>}
                                                        title={<div className="trans-card-title"><strong>Alex
                                                            Barborica</strong></div>}
                                                        description={<div className="trans-card"><strong>Chief Operating

                                                            Officer</strong></div>}
                                                        className="trans-meta"/>
                                                </Card>

                                                <Card
                                                    style={{position:'relative'}}
                                                    hoverable
                                                    style={{position:'relative'}}
                                                    cover={<img style={{ position: 'absolute' }}
                                                                src={'../../static/images/picture_6.png'}/>}
                                                >
                                                    <Meta
                                                        avatar={<Avatar size={64}
                                                                        icon="user"
                                                                        style={{
                                                                            marginTop: '5px',
                                                                            marginLeft: '10px',
                                                                            background: '#FFF',
                                                                            color: '#FFF',
                                                                            float: 'right'
                                                                        }}/>}
                                                        title={<div className="trans-card-title"><strong>Bogdan
                                                            Vasilescu</strong></div>}
                                                        description={<div className="trans-card"><strong>Chief Marketing
                                                            Officer</strong></div>}

                                                        className="trans-meta"/>
                                                </Card>

                                                <Card
                                                    style={{position:'relative'}}
                                                    hoverable
                                                    cover={
                                                    <img 
                                                        style={{ position: 'absolute' }}
                                                        src={'../../static/images/picture_6.png'}
                                                    />}
                                                >
                                                    <Meta
                                                        avatar={<Avatar size={64}
                                                                        icon="user"
                                                                        style={{
                                                                            marginTop: '5px',
                                                                            marginLeft: '10px',
                                                                            background: '#FFF',
                                                                            color: '#FFF',
                                                                            float: 'right'
                                                                        }}/>}
                                                        title={<div className="trans-card-title"><strong>Dan
                                                            Constantinescu</strong></div>}
                                                        description={<div className="trans-card"><strong>DevOps</strong>
                                                        </div>}
                                                        className="trans-meta"/>
                                                </Card>

                                                <Card
                                                    hoverable
                                                    style={{position:'relative'}}
                                                    cover={<img style={{ position: 'absolute' }}
                                                                src={'../../static/images/picture_6.png'}/>}
                                                >
                                                    <Meta
                                                        avatar={<Avatar size={64}
                                                                        icon="user"
                                                                        style={{
                                                                            marginTop: '5px',
                                                                            marginLeft: '10px',
                                                                            background: '#FFF',
                                                                            color: '#FFF'
                                                                        }}/>}
                                                        title={<div className="trans-card-title"><strong>Cristian
                                                            Lipciuc</strong></div>}
                                                        description={<div className="trans-card"><strong>Head Of
                                                            Innovation</strong></div>}
                                                        className="trans-meta"/>
                                                </Card>

                                            </Carousel>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <div style={{ backgroundColor: 'white' }}>
                                                <div style={{ margin: '20px' }}>
                                                    <div>
                                                        <h3><strong>Partners</strong></h3>
                                                    </div>
                                                    <hr/>
                                                    <Card bordered={false} size='small'>
                                                        <img src={'../../static/images/logo-ced.png'}/>
                                                        <img 
                                                            src={'../../static/images/urban_garden_logo.png'}
                                                            style={{ width: '35%' }}
                                                        />
                                                    </Card>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div style={{ backgroundColor: 'white' }}>
                                                <div style={{ margin: '20px' }}>
                                                    <div>
                                                        <h3><strong>Technology</strong></h3>
                                                    </div>
                                                    <hr/>
                                                    <Card bordered={false}>
                                                        <img style={{ width: '35%' }}
                                                             src={'../../static/images/python-logo.png'}/>
                                                        <img style={{ width: '30%' }}
                                                             src={'../../static/images/logo_envoy2.png'}/>
                                                        <img style={{ width: '20%', marginLeft: '5%' }}
                                                             src={'../../static/images/django-logo.png'}/>
                                                        <img style={{ width: '35%' }}
                                                             src={'../../static/images/react-logo.png'}/>
                                                        <img style={{ width: '30%' }}
                                                             src={'../../static/images/eth-logo.png'}/>
                                                        <img style={{ width: '30%' }}
                                                             src={'../../static/images/mongodb-logo.png'}/>
                                                    </Card>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                            </Col>
                        </Row>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps (state) {
    return {}
}

IcoContainer.propTypes = {}

export default connect(mapStateToProps, {})(IcoContainer)