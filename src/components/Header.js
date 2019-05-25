import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/base.css'
import { Menu, Icon, Row, Col,Layout,Breadcrumb } from 'antd';
const { Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import Link from 'next/link'
import { Button } from 'antd';

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
                        <Col lg={6}><img src={'../static/images/vbr_logo.png'} style={{ width: '80px',margin:'8px' }} /></Col>
                        <Col lg={18}>
                            
                            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{float:'right'}}>
                            <Menu.Item key="mail1">
                                <Link href="/">
                                    <a>  <Icon type="mail" /> Home</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="app1" >
                            <Icon type="appstore" />
                                How it works
                            </Menu.Item>
                          
                            <Menu.Item key="app1" >
                            <Icon type="appstore" />
                                Community
                            </Menu.Item>
                            <Menu.Item key="alipay">
                                <Link href="/login">
                                    <a>  <Icon type="mail" /> Login</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="alipay2">
                                <Link href="/register">
                                    <a>  <Icon type="mail" /> Register</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="alipay33">
                                <Link href="/register">
                                    <div className="post-job-btn">
                                        <Button type="primary"  style={{
                                        backgroundColor: '#2EC3AB',
                                        borderColor: '#2EC3AB',
                                        }} className='post-job-button'>Post a job</Button>
                                    </div>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
            
                </Row>
                </Content>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{boxShadow: '1px 4px 12px 1px #929292'}}>
                        <Menu.Item key="mail2">
                            <Link href="/writing">
                                <a>  <Icon type="mail" /> Writing</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="app2" >
                        <Icon type="appstore" />
                            Marketing & SEO
                        </Menu.Item>
                        <Menu.Item key="alipay42">
                            <Icon type="appstore" />
                            Design
                        </Menu.Item>
                        <Menu.Item key="alipay36">
                            <Icon type="appstore" />
                            Consultance
                        </Menu.Item>
                        <Menu.Item key="alipay47">
                            <Icon type="appstore" />
                                PR
                        </Menu.Item>
                        <Menu.Item key="alipay59">
                            <Icon type="appstore" />
                             Developers
                        </Menu.Item>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                <Icon type="setting" />
                                    All Categories
                                </span>
                            }>
                            <MenuItemGroup title="Web Developers">
                                <Menu.Item key="setting:1">Programming</Menu.Item>
                                <Menu.Item key="setting:2">Web design</Menu.Item>
                                <Menu.Item key="setting:4">Javascript</Menu.Item>

                            </MenuItemGroup>
                            <MenuItemGroup title="Backend Developers">
                                <Menu.Item key="setting:3">Python</Menu.Item>
                                <Menu.Item key="setting:4">PHP</Menu.Item>
                            </MenuItemGroup>
                            </SubMenu>
                    </Menu>
            </div>
        )
    }
}
export default Header
