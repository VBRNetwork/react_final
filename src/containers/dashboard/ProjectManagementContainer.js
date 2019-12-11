import React, { Component } from 'react';
import {
    MessageBox,
    ChatItem,
    ChatList,
    SystemMessage,
    MessageList,
    Input,
    Button,
    Avatar,
    Navbar,
    SideBar,
    Dropdown,
    Popup,
} from 'react-chat-elements';

import {Row,Col} from 'antd';

export default class ProjectManagementContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: true,
            messageList: [],
        };
    }

    componentWillMount() {
        // setInterval(this.addMessage.bind(this), 3000);
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    token() {
        return (parseInt(Math.random() * 10 % 6));
    }

    photo(size) {

    }

    random(type) {
        switch (type) {
            case 'message':
                var type = this.token();
                var status = 'waiting';
                switch (type) {
                    case 0:
                        type = 'photo';
                        status = 'sent';
                        break;
                    case 1:
                        type = 'file';
                        status = 'sent';
                        break;
                    case 2:
                        type = 'system';
                        status = 'received';
                        break;
                    case 3:
                        type = 'location';
                        break;
                    case 4:
                        type = 'spotify';
                        break;
                    default:
                        type = 'text';
                        status = 'read';
                        break;
                }

                return {
                    position: (this.token() >= 1 ? 'right' : 'left'),
                    forwarded: true,
                    type: type,
                    theme: 'white',
                    view: 'list',
                    title: 'Lorem Ipsum',
                    titleColor: this.getRandomColor(),
                    text: type === 'spotify' ? 'spotify:track:7wGoVu4Dady5GV0Sv4UIsx' : 'ajhdao diuahd iuaohdiua d',
                    data: {
                        uri: `https://i.imgur.com/caef4Ca.jpg`,
                        status: {
                            click: true,
                            loading: .5,
                        },
                        size: "100MB",
                        width: 300,
                        height: 300,
                        latitude: '37.773972',
                        longitude: '-122.431297',
                        staticURL: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-circle+FF0000(LONGITUDE,LATITUDE)/LONGITUDE,LATITUDE,ZOOM/270x200@2x?access_token=KEY',
                    },
                    onLoad: () => {
                        console.log('Photo loaded');
                    },
                    status: status,
                    date: +new Date(),
                    avatar: `https://i.imgur.com/caef4Ca.jpg`,
                };
            case 'chat':
                return {
                    id: String(Math.random()),
                    avatar: `https://i.imgur.com/caef4Ca.jpg`,
                    avatarFlexible: true,
                    statusColor: 'lightgreen',
                    statusColorType: parseInt(Math.random() * 100 % 2) === 1 ? 'encircle' : undefined,
                    alt:'message...',
                    title: 'MemberName',
                    date: new Date(),
                    subtitle: 'subtitle',
                    unread: parseInt(Math.random() * 10 % 3),
                    dropdownMenu: (
                        <Dropdown
                            animationPosition="norteast"
                            title='Dropdown Title'
                            buttonProps={{
                                type: "transparent",
                                color: "#cecece",
                                icon: {
                                    size: 24,
                                }
                            }}
                            items={[
                                {
                                    icon: {
                                        float: 'left',
                                        color: 'red',
                                        size: 22,
                                    },
                                    text: 'Menu Item'
                                },
                                {
                                    icon: {
                                        float: 'left',
                                        color: 'purple',
                                        size: 22,
                                    },
                                    text: 'Menu Item'
                                },
                                {
                                    icon: {
                                        float: 'left',
                                        color: 'yellow',
                                        size: 22,
                                    },
                                    text: 'Menu Item'
                                },
                            ]} />
                    ),
                };
        }
    }

    addMessage() {
        var list = this.state.messageList;
        list.push(this.random('message'));
        this.setState({
            messageList: list,
        });
    }

    render() {
        var arr = [];
        for (var i = 0; i < 5; i++)
            arr.push(i);

        var chatSource = arr.map(x => this.random('chat'));

        return (
            <div className={'container-chat'}>
                <div className='chat-list'>
                    <SideBar
                        top={
                            <div>
                                <ChatList
                                    dataSource={chatSource} />
                                <Popup
                                    // show={this.state.show}
                                    header='Lorem ipsum dolor sit amet.'
                                    headerButtons={[{
                                        type: 'transparent',
                                        color: 'black',
                                        onClick: () => {
                                            this.setState({ show: false })
                                        },
                                        icon: {
                                            size: 18
                                        }
                                    }]}
                                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!'
                                    footerButtons={[{
                                        color: 'white',
                                        backgroundColor: '#ff5e3e',
                                        text: "Vazgeç",
                                    }, {
                                        color: 'white',
                                        backgroundColor: 'lightgreen',
                                        text: "Tamam",
                                    }]} />
                            </div>
                        }
                        bottom={
                            <span>
                                <Button
                                    type='transparent'
                                    color='black'
                                    icon={{
                                        size: 18
                                    }} />
                                <Button
                                    type='transparent'
                                    color='black'
                                    icon={{
                                        size: 18
                                    }} />
                                <Button text="Count"></Button>
                            </span>
                        } />
                </div>
                <div
                    className='right-panel'>
                    <MessageList
                        className='message-list'
                        lockable={true}
                        downButtonBadge={10}
                        dataSource={this.state.messageList} />
                    <Input
                        placeholder="Write your message..."
                        defaultValue=""
                        ref='input'
                        multiline={true}
                        // buttonsFloat='left'
                        onKeyPress={(e) => {
                            if (e.shiftKey && e.charCode === 13) {
                                return true;
                            }
                            if (e.charCode === 13) {
                                this.refs.input.clear();
                                this.addMessage();
                                e.preventDefault();
                                return false;
                            }
                        }}
                        rightButtons={
                            <Button
                                text='Send Message'
                                onClick={this.addMessage.bind(this)} />
                        } />
                </div>
            </div>
        );
    }
}