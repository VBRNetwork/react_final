import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Row, Card, Layout, Col, Empty, Rate, Tooltip, Comment, Avatar} from 'antd'
import moment from 'moment';
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout
const { Meta } = Card

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
        const actions = [
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

        ];
        return (
            <div>
                <div>
                    <img
                        src={'../../static/images/dash.jpg'}
                        style={{
                            position: 'absolute',
                            margin: 0,
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                </div>
                <Row>
                    <Col>
                        <div>
                            <Card
                                style={{width: '75%', marginLeft: '15%', marginTop: '5%'}}
                                size='small'
                                hoverable
                                bordered={false}
                                extra={
                                    <Button
                                        type={'primary'}
                                        style={{
                                            background: 'rgba(0, 177, 153, 0.74)',
                                            borderColor: 'rgba(0, 177, 153, 0.74)'}}
                                    >Edit Profile
                                    </Button> }
                                cover={
                                    <img
                                        style={{
                                            width: 240,
                                            margin: '2%'}}
                                        src='../../static/images/asset_profile.jpg'
                                    />}
                                title={
                                    <div>
                                        <strong>
                                            <h2>
                                                Stefan Vanea
                                            </h2>
                                        </strong>
                                    </div>}
                            >
                                <Meta
                                    title={
                                        <div>
                                            <Row>
                                                <Col span={18}>
                                                    <div>
                                                        <strong>
                                                            <h4>
                                                                @StefanVanea
                                                            </h4>
                                                        </strong>
                                                        <br />
                                                        <p>Bucharest, Romania</p>
                                                        <br />
                                                        <p>Active since September 18, 2019</p>
                                                        <br />
                                                    </div>
                                                </Col>
                                                <Col span={6}>
                                                    <div>
                                                        <Icon
                                                            style={{fontSize: 25}}
                                                            type={'dollar'}
                                                        />
                                                        <strong>
                                                            <h4>
                                                                - USD/hr
                                                            </h4>
                                                            <hr />
                                                            <p>
                                                                0 Reviews
                                                            </p>
                                                        </strong>
                                                        <Rate />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>}
                                    avatar={<Icon style={{fontSize: 25, color: 'rgba(0, 177, 153, 0.74)'}} type={'thunderbolt'}/>}
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <div>
                            <Card
                                style={{width: '75%', marginLeft: '15%'}}
                                title={<div><strong><h3> Freelancer Portfolio</h3></strong></div>}
                                extra={<Button type={'primary'} style={{background: 'rgba(0, 177, 153, 0.74)', borderColor: 'rgba(0, 177, 153, 0.74)'}}> Add Items</Button>}
                            >
                                <div>
                                    <Empty
                                        image={
                                            <Icon
                                                style={{
                                                    fontSize: 50,
                                                    color: 'rgba(0, 177, 153, 0.74)'}}
                                                type={'file-image'}
                                            />}
                                        description={
                                            <div>
                                                <p>
                                                    Wanna show off your talent ?
                                                </p>
                                                <p>
                                                    Start by uploading your portfolio !
                                                </p>
                                            </div>
                                        }
                                    />
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col span={18}>
                        <div>
                            <Card
                                title={
                                    <div>
                                        <strong>
                                            <h3>
                                                Reviews
                                            </h3>
                                        </strong>
                                    </div>}
                            >
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
                                                    <p>
                                                        We supply a series of design principles, practical patterns and high quality design
                                                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                                                        and efficiently.
                                                    </p>
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
                    <Col span={6}>
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
                            </Card>
                        </div>
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