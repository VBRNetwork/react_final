import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/base.css'
import { Menu, Icon, Row, Col,Layout,Breadcrumb } from 'antd';
const { Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Header extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    

    render () {
        return (
            <div>
                <Content style={{marginLeft:'50px',marginRight:'50px'}}>
                    <Row>
                        <Col span={4}>  <img src={'../static/images/vbr_logo.png'} style={{ width: '75px' }} /></Col>
                        <Col span={14}><Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="mail">
                            <Icon type="mail" />
                                Home
                            </Menu.Item>
                            <Menu.Item key="app" disabled>
                            <Icon type="appstore" />
                                How it works
                            </Menu.Item>
                            <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                <Icon type="setting" />
                                    Community
                                </span>
                            }>
                            <MenuItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Chat</Menu.Item>
                                <Menu.Item key="setting:2">Forum</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </MenuItemGroup>
                            </SubMenu>
                            <Menu.Item key="alipay">
                                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                                    Login
                                </a>
                            </Menu.Item>
                            <Menu.Item key="alipay2">
                                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                                    Register
                                </a>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={6}>
                        <div className="post-job-btn">
                            <button className='post-job-button'  style={{
                                backgroundColor: '#2EC3AB',
                                borderColor: '#2EC3AB'
                                }} ><a href="/postjob">Post a job</a></button>
                        </div>
                    </Col>
                </Row>
                </Content>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="mail">
                        <Icon type="mail" />
                            Writing
                        </Menu.Item>
                        <Menu.Item key="app" disabled>
                        <Icon type="appstore" />
                            Marketing & SEO
                        </Menu.Item>
                        <Menu.Item key="alipay2">
                            <Icon type="appstore" />
                            Design
                        </Menu.Item>
                        <Menu.Item key="alipay3">
                            <Icon type="appstore" />
                            Consultance
                        </Menu.Item>
                        <Menu.Item key="alipay4">
                            <Icon type="appstore" />
                                PR
                        </Menu.Item>
                        <Menu.Item key="alipay5">
                            <Icon type="appstore" />
                             Developers
                        </Menu.Item>
                        <Menu.Item key="alipay6">
                            <Icon type="appstore" />
                                All Categories
                        </Menu.Item>
                    </Menu>
            </div>
        )
    }
}
export default Header
