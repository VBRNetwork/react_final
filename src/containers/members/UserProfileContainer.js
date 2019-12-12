import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon, Button, Row, Card, Col, Empty, Rate, Tooltip, Comment, Avatar, Tag, Modal, Input, Upload } from 'antd'
import moment from 'moment';
const { Meta } = Card
import { List } from 'antd';
import dynamic from 'next/dynamic'

const Picker = dynamic(import('emoji-picker-react'), {
    ssr: false,
})
const { TextArea } = Input;
import {getMemberProfile} from '../../actions/members_actions';

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
            loading: false,
            visible: false,
            message:'',
            emoji_true:false,
            profile:{
                lastName:'',
                firstName:'',
                username:'',
                skills:[0],
                price:1,
                bio:'',
                image:'../../../static/images/sample-avatar.jpg',
                type:0,
                country:'',
            },
            message_sent:false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleChangeLikes = this.handleChangeLikes.bind(this);
        this.composeMessage = this.composeMessage.bind(this);
        this.handleChangeAction = this.handleChangeAction.bind(this);
        this.showEmoji = this.showEmoji.bind(this);
        this.getProfileUsername = this.getProfileUsername.bind(this);
    }

    componentDidMount(){
        this.getProfileUsername(this.props.router.query.username);
    }

    getProfileUsername(username){
        let profile = this.props.members.find(o => o.username === username);
        if(profile){
            this.props.getMemberProfile(profile.id).then((response) =>{
                let image = this.state.profile.image;
                if(response.profile.image.length > 0){
                    image = response.profile.image
                }
                this.setState({
                    profile:{
                        ...this.state.profile,
                        username:response.username,
                        firstName:response.firstName,
                        lastName:response.lastName,
                        bio:response.profile.bio,
                        type:response.profile.type,
                        price:response.profile.price,
                        image:image,
                        skills:response.profile.skills,
                        country:response.profile.country,
                    }
                })
            });
        }


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

    showModal = () => {
        this.setState({
            visible: true,
            message_sent:false
        });

    };

    handleOk = () => {
        this.setState({ loading: true, message_sent:true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false, message: '' });
        }, 2200);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    onEmojiClick = (event, emojiObject) => {
        this.setState({
            message:this.state.message + ' ' + emojiObject.emoji
        })
    }

    composeMessage(message){
        this.setState({
            message: message.target.value
        })
    }

    showEmoji(){
        this.setState({
            emoji_true: !this.state.emoji_true
        })
    }

    render () {
        const {likes, dislikes, action} = this.state;
        let fullName = (this.state.profile.firstName + ' ' + this.state.profile.lastName).toLocaleUpperCase()
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
                <Tooltip title='Dislike'>
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
            <div style={{marginLeft:'1.3rem',marginTop:'5px'}}>
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
                                              marginLeft:'2px',
                                              background: 'rgba(0, 177, 153, 0.74)',
                                              borderColor: 'rgba(0, 177, 153, 0.74)'}}
                                      > Copy link
                                      </Button>

                                      <Button
                                              type={'primary'}
                                              style={{
                                                  marginLeft:'2px',
                                                  background: 'rgba(0, 177, 153, 0.74)',
                                                  borderColor: 'rgba(0, 177, 153, 0.74)'}}
                                          >Edit Profile
                                      </Button>

                                      <Button
                                          type={'primary'}
                                          onClick={this.showModal}
                                          style={{
                                              marginLeft:'2px',
                                              background: 'rgba(0, 177, 153, 0.74)',
                                              borderColor: 'rgba(0, 177, 153, 0.74)'}}
                                      >Send Message
                                      </Button>
                                  </div>}
                                title={
                                    <div>
                                        <strong>
                                            <h2>
                                                {fullName}
                                            </h2>
                                        </strong>
                                    </div>}>

                                <Row>
                                    <Col xs={24} sm={{span:4}} md={{span:4}} lg={{span:4}} xl={{span:4}} xxl={{ span: 4}}>
                                        <div>
                                            <img
                                                style={{width: '100%',padding:'5px'}}
                                                src={this.state.profile.image}
                                            />
                                            <strong>
                                                <h3>
                                                    @{this.state.profile.username}
                                                </h3>
                                            </strong>
                                            <p>Country: {this.state.profile.country}</p>
                                            <p style={{fontSize:'12px'}}>Active since December { this.state.profile.price}, 2019</p>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={{ span: 13,offset:1}} md={{ span: 13,offset:1}} lg={{ span: 13,offset:1}} xl={{ span: 13,offset:1}} xxl={{ span: 13,offset:1}}>
                                        <h3>Profile description</h3>
                                        <div dangerouslySetInnerHTML={{__html: this.state.profile.bio}} style={{paddingTop:'20px',fontSize:'15px'}}>
                                        </div>
                                    </Col>

                                    <Col xs={24} sm={{ span: 6}} md={{ span: 6}} lg={{ span: 6}} xl={{ span: 6}} xxl={{ span: 6}}>
                                        <div style={{padding:'20px'}}>

                                            <strong>
                                                <h2>
                                                    <Icon
                                                        type={'dollar'}
                                                    /> {this.state.profile.price} $/hr
                                                </h2>
                                                <hr />
                                            </strong>
                                            <p>
                                                4 Reviews
                                            </p>
                                            <Rate value={4}/>
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
                                                    author={<strong>{fullName}</strong>}
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
                                                    description=""
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
                                        <List
                                            itemLayout="horizontal"
                                            dataSource={data}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={ <Icon
                                                            style={{
                                                                fontSize: 50,
                                                                color: 'rgba(251,10,0,0.74)'}}
                                                            type={'file-image'}
                                                        />}
                                                        title={<a href="https://ant.design">{item.title}</a>}
                                                        description=""
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </div>
                                </Card>
                            </div>
                        </Col>

                    </Col>
                </Row>

                <Modal
                    visible={this.state.visible}
                    title="Send message"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Close
                        </Button>,
                        <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                            Send Message
                        </Button>,
                    ]}
                >

                    {this.state.message_sent === false &&
                        <div>
                            <TextArea placeholder={'Type a message...'} rows={4} value={this.state.message} onChange={this.composeMessage}/>
                            <div>
                                <div style={{paddingTop:'5px',display:'inline'}}>
                                    <span onClick={this.showEmoji} >
                                        <img style={{width:'25px'}} src="https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f60a.png" alt=""/>
                                    </span>
                                   <span>
                                        <Upload  beforeUpload={() => false}  name={'file'} style={{marginLeft:'5px'}}>
                                            <Button style={{marginTop:'10px'}}>
                                              <Icon style={{fontSize:'16px'}} type="upload" />
                                            </Button>
                                          </Upload>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div style={{paddingTop:'5px'}}>
                                    <div onClick={this.showEmoji} >

                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {this.state.message_sent === true && <h4><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /> Message sent successfully.</h4>}
                    {this.state.emoji_true && <Picker onEmojiClick={this.onEmojiClick}/>}
                </Modal>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user:state.user,
        members:state.members.list
    }
}

UserProfileContainer.propTypes = {
    getMemberProfile: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {
    getMemberProfile
})(UserProfileContainer)