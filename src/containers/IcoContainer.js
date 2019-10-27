import React, { Component } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import '../styles/ico.css'
import { Carousel, Layout, Row, Col, Button, Card, Input, Avatar, Empty, Breadcrumb, Form } from 'antd'
import { ProgressBar } from "react-milestone";

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
                    <Layout>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={{ span: 8 }}>
                                <Card 
                                    title="VBR Network Concept"
                                    bordered={false}
                                    style={{ width: '100%' }}
                                >
                                    <img 
                                        style={{ float: 'right' }}
                                        alt="concept"
                                        src={'../../static/images/asset_5.png'}
                                    />
                                    <p>
                                        Did you just BARELY miss that one crypto startup that would have made your day
                                        (and your fortune)?
                                        Don't miss this one. We're here to change the game, and your standards.
                                        Help us change the state of the game. We're not taking the reins, you are.
                                        We're only here to give you the tools to do that. Invest today, profit
                                        tommorrow.
                                        Your future depends on you, and we aim to brighten it. Join the first truly free
                                        market.
                                        Not as an employee, as our partner.
                                    </p>
                                    <p>
                                        The freelancing market grows best with te community input, helped by Blockchain Technology, 
                                        along with all VBR's great features.
                                        It's time to start over and give you the tools you need to build your project to
                                        the best of your ability.
                                    </p>
                                    <p>
                                        Enter VBR: Made by freelancers, for freelancers.
                                        You know how you want to run your business far better than we do: help us help
                                        you.
                                    </p>
                                    <p>
                                        VBR will be working closely with partners
                                        that will allow talented freelancers
                                        from underdeveloped countries to integrate themselves better into the global
                                        market,
                                        ensuring equal opportunities for all.
                                    </p>

                                    <Row>
                                        <Col span={24}>
                                            <div style={{ textAlign: 'center' }}>
                                                <Empty

                                                    image={'../../static/images/vbrLogo.png'}
                                                    imageStyle={{
                                                        height: 60,
                                                    }}
                                                    description={
                                                        <span>
                                                            <strong>Whitepaper</strong>
                                                        </span>
                                                    }>
                                                    <Button type="primary"
                                                            style={{
                                                                background: '#2EC3AB',
                                                                borderColor: '#2EC3AB'
                                                            }}
                                                            htmlType='submit'>
                                                        <a href={'../../static/files/vbr_network_whitepaper.docx'}>Download
                                                            Whitepaper</a>
                                                    </Button>
                                                </Empty>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                                <br/>
                                <Row>
                                    <Col span={4}>
                                        <img
                                            alt="concept"
                                            src={'../../static/images/asset_7.png'}
                                            style={{ position: 'absolute' }}

                                        />
                                    </Col>
                                    <Col span={20}>
                                        <div className="contact-form">
                                            <Card className='p-5'>
                                                <strong><h3>Contact Us</h3></strong>
                                                <Form onSubmit={this.handleChange} className='login-form'>
                                                    <Form.Item>
                                                        <Input
                                                            size="small"
                                                            onChange={this.handleChangeName}
                                                            value={this.state.name}
                                                            placeholder='Name'
                                                        />
                                                    </Form.Item>
                                                    <Form.Item>
                                                        <Input
                                                            size="small"
                                                            onChange={this.handleChangeEmail}
                                                            value={this.state.email}
                                                            placeholder='Email'
                                                        />
                                                    </Form.Item>
                                                    <Form.Item>
                                                        <TextArea
                                                            rows={4}
                                                            size="small"
                                                            onChange={this.handleChangeDescription}
                                                            value={this.state.description}
                                                            placeholder='Description'
                                                        />
                                                    </Form.Item>
                                                    <Form.Item>
                                                        <Button
                                                            style={{
                                                                background: 'rgba(0, 177, 153, 0.74)',
                                                                borderColor: 'rgba(0, 177, 153, 0.74)'
                                                            }}
                                                            type='primary'
                                                            htmlType='submit'
                                                            className='contact-form-button'>
                                                            Submit
                                                        </Button>
                                                    </Form.Item>
                                                </Form>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col span={24}>
                                        <div style={{ textAlign: 'center' }}>
                                            <img
                                                alt="concept"
                                                src={'../../static/images/picture_2_1.png'}

                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={{ span: 16 }}>
                                <Content>
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
                                        <ProgressBar 
                                            vertical={true} 
                                            percentage={50} 
                                            milestoneCount={10}
                                        >
                                            {({ containerStyles, completedBarStyles, milestoneElements }) => {
                                            return (
                                            <div style={{ ...containerStyles, backgroundColor: 'rgb(46, 195, 171)' }}>
                                                
                                                <div style={completedBarStyles} />
                                                {milestoneElements.map(milestone => milestone)}
                                            </div>
                                            );
                                            }}
                                        </ProgressBar>
                                        </Col>
                                        <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={{ span: 8 }}>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={{ span: 8 }}>
                                            
                                        </Col>
                                        <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={{ span: 8 }}>
                                            
                                        </Col>

                                        <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={{ span: 8 }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <img
                                                    alt="concept"
                                                    src={'../../static/images/asset_9.png'}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={{ span: 8 }}>
                                            
                                        </Col>
                                        <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={{ span: 8 }}>
                                            
                                        </Col>

                                    </Row>
                                    <br/>
                                    <Row>

                                        <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={{ span: 8 }}>
                                            
                                        </Col>
                                        <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={{ span: 8 }}>
                                            
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={{ span: 8 }}>

                                            
                                        </Col>
                                        <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={{ span: 8 }}>
                                            
                                        </Col>
                                    </Row>
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
                                </Content>
                            </Col>
                        </Row>
                    </Layout>
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