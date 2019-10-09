import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Row, Card, Layout, Col, Empty, Rate, Tooltip, Comment, Avatar,Tag} from 'antd'
import moment from 'moment';
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout
const { Meta } = Card
import { List } from 'antd';

const data = [
    {
        title: 'VBR Academy Tier 1 - Linux Class 1',
    },
    {
        title: 'CISCO Network - Routing',
    }
];

class UserProfileContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: '',
            status: '',
            likes: 0,
            dislikes: 0,
            action: 'null',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleChangeLikes = this.handleChangeLikes.bind(this);
        this.handleChangeDisliked = this.handleChangeDislikes.bind(this);
        this.handleChangeAction = this.handleChangeAction.bind(this);
    }

    static async getInitialProps ({ store, query }) {
    }

    componentDidMount () {
    }



    handleChange(event) {
        this.setState()
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value,
        });
    }

    handleChangeLocation(event) {
        this.setState({
            location: event.target.value,
        });
    }

    handleChangeStatus(event) {
        this.setState({
            status: event.target.value,
        });

    }

    handleChangeLikes(event) {
        this.setState({
            likes: event.target.value,
        });

    }

    handleChangeDislikes(event) {
        this.setState({
            dislikes: event.target.value,
        });

    }

    handleChangeAction(event) {
        this.setState({
            action: event.target.value,
        });

    }

    render () {
        const {likes, dislikes, action} = this.state;
        const actions = (
            <div>
                 <span key='comment-like'>
                <Tooltip title='Like'>
                  <Icon
                      type='like'
                      theme={action === 'liked' ? 'filled' : 'outlined'}
                      onClick={this.like}
                  />
                </Tooltip>
                <span style={{paddingLeft: 8, coursor: 'auto'}} >{likes}</span>
              </span>,
                        <span key='comment-dislike'>
                <Tooltip tiitle='Dislike'>
                  <Icon
                      type='dislike'
                      theme={action === 'disliked' ? 'filled' : 'outlined'}
                      onClick={this.dislike}
                  />
                </Tooltip>
                <span style={{paddingLeft: 8, coursor: 'auto'}} >{dislikes}</span>
              </span>,
                        <span key='comment-reply-to'>Reply to</span>
            </div>
        );

        return (
            <div style={{marginLeft:'1.3rem'}}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                        <div>
                            <Card
                                bordered={true}
                                extra={
                                  <div>
                                      <Button
                                          type={'primary'}
                                          style={{
                                              background: 'rgba(0, 177, 153, 0.74)',
                                              borderColor: 'rgba(0, 177, 153, 0.74)'}}
                                      >Copy link
                                      </Button>  <Button
                                              type={'primary'}
                                              style={{
                                                  background: 'rgba(0, 177, 153, 0.74)',
                                                  borderColor: 'rgba(0, 177, 153, 0.74)'}}
                                          >Edit Profile
                                          </Button>
                                  </div>}
                                title={
                                    <div>
                                        <strong>
                                            <h2>
                                                Stefan Vanea
                                            </h2>
                                        </strong>
                                    </div>}
                            >


                                <Row>
                                    <Col xs={24} sm={{span:4}} md={{span:4}} lg={{span:4}} xl={{span:4}} xxl={{ span: 4}}>
                                        <div>
                                            <img
                                                style={{width: '100%',padding:'5px'}}
                                                src='../../static/images/asset_profile.jpg'
                                            />
                                            <strong>
                                                <h3>
                                                    @StefanVanea
                                                </h3>
                                            </strong>
                                            <p>Bucharest, Romania</p>
                                            <p style={{fontSize:'12px'}}>Active since September 18, 2019</p>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={{ span: 13,offset:1}} md={{ span: 13,offset:1}} lg={{ span: 13,offset:1}} xl={{ span: 13,offset:1}} xxl={{ span: 13,offset:1}}>
                                        <h3 styl>What is Lorem Ipsum?</h3>
                                        <p style={{paddingTop:'20px',fontSize:'15px'}}>


                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.
                                            <br/>
                                            <br/>
                                            Electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            Why do we use it?

                                        </p>
                                    </Col>

                                    <Col xs={24} sm={{ span: 6}} md={{ span: 6}} lg={{ span: 6}} xl={{ span: 6}} xxl={{ span: 6}}>
                                        <div style={{padding:'20px'}}>

                                            <strong>
                                                <h2>
                                                    <Icon
                                                        type={'dollar'}
                                                    /> 200 - USD/hr
                                                </h2>
                                                <hr />

                                            </strong>
                                            <p>
                                                0 Reviews
                                            </p>
                                            <Rate />
                                        </div>
                                    </Col>
                                </Row>

                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17,offset:3}}>
                        <Card
                            style={{marginTop:'20px',marginBottom:'20px'}}
                            title={<h2>Skills</h2>}>
                            <div>
                                <Tag>Python</Tag>
                                <Tag>
                                    <a href="https://github.com/ant-design/ant-design/issues/1862">MongoDB</a>
                                </Tag>
                                <Tag closable >
                                    Linux
                                </Tag>
                                <Tag closable >
                                    Databases
                                </Tag>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17,offset:3}}>

                        <Col xs={24} sm={24} md={8} lg={{ span: 8}} xl={8} xxl={8}>
                            <div>
                                <Card
                                    title={
                                        <div>
                                            <strong>
                                                <h3>
                                                    Reviews
                                                </h3>
                                            </strong>
                                        </div>}>

                                    <Meta
                                        description={
                                            <div>
                                                <Comment
                                                    actions={actions}
                                                    author={<strong>Stefan Vanea</strong>}
                                                    avatar={
                                                        <Avatar
                                                            src='../../static/images/vbr_logo.png'
                                                            style={{width: 100}}
                                                            alt='Avatar Comment'
                                                        />
                                                    }
                                                    content={
                                                        <div>
                                                            We supply a series of design principles, practical patterns and high quality design
                                                            resources (Sketch and Axure), to help people create their product prototypes beautifully
                                                            and efficiently.
                                                        </div>
                                                    }
                                                    datetime={
                                                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                                            <span>{moment().fromNow()}</span>
                                                        </Tooltip>
                                                    }
                                                />
                                            </div>
                                        }
                                    />
                                </Card>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={{ span: 8}} xl={8} xxl={8}>
                            <div>
                                <Card
                                    title={<div><strong><h3>Certifications</h3></strong></div>}
                                    description={<strong>Currently no course/certification added.</strong>}
                                    extra={
                                        <Button type={'primary'}
                                                style={{
                                                    background: 'rgba(0, 177, 153, 0.74)',
                                                    borderColor: 'rgba(0, 177, 153, 0.74)'}}
                                        >Add Certification
                                        </Button>}
                                >

                                    <List
                                        itemLayout="horizontal"
                                        dataSource={data}
                                        renderItem={item => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                                    title={<a href="https://ant.design">{item.title}</a>}
                                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </Card>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={{ span: 8}} xl={8} xxl={8}>
                            <div>
                                <Card
                                    title={<div><strong><h3> Work Portfolio</h3></strong></div>}
                                    extra={<Button type={'primary'} style={{background: 'rgba(0, 177, 153, 0.74)',
                                        borderColor: 'rgba(0, 177, 153, 0.74)'}}> Add Items</Button>}>

                                    <div>
                                        <Empty
                                            image={
                                                <Icon
                                                    style={{
                                                        fontSize: 50,
                                                        color: 'rgba(0, 177, 153, 0.74)'}}
                                                    type={'file-image'}
                                                />}

                                        />
                                    </div>
                                </Card>
                            </div>
                        </Col>

                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user:state.user
    }
}

UserProfileContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(UserProfileContainer)