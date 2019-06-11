import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Row, Col,Layout,Breadcrumb } from 'antd';
const { Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import Link from 'next/link'
import { Button } from 'antd';
import '../styles/base.css'
import { connect } from 'react-redux'


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
        let token = this.props.user.token

        let loginButton = (
            <Menu.Item key="alipay">
                <Link href="/login">
                    <a> <Icon type="mail" /> Login</a>
                </Link>
            </Menu.Item>
        )

        return (
            <div>
                <Content style={{marginLeft:'50px',marginRight:'50px',marginBottom:'10px'}}>
                    
                    <Row>
                        <Col lg={6}> <Link href="/"><a><img src={'../static/images/vbr_logo.png'} style={{ width: '80px',margin:'8px' }} /></a></Link></Col>
                        <Col lg={16}>
                            <Menu className="nav1" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{float:'right'}}>
                                <Menu.Item  key="mail1">
                                    <Link href="/">
                                        <a>  <Icon type="mail" /> Home</a>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="app1" >
                                    <Link href="/how-it-works">
                                        <a>  <Icon type="mail" /> How it works</a>
                                    </Link>
                                </Menu.Item>
                            
                                <Menu.Item key="app122" >
                                    <Link href="/community">
                                        <a>  <Icon type="mail" />Community</a>
                                    </Link>
                                </Menu.Item>
                                
                                {loginButton}
                            
                                {token != 0 && 
                                <Menu.Item key="alipay243434">
                                <Link href="/register">
                                    <a><Icon type="mail" /> Register</a>
                                </Link>
                                </Menu.Item>}
                                
                                {token == 0 && 
                                    <Menu.Item key="alipay2222">
                                        <Link href="/dashboard">
                                            <a>Dash</a>
                                        </Link>
                                    </Menu.Item>
                                }
                            </Menu>
                        </Col>

                        <Col lg={2}>
                            <Link href="/jobs/post">
                                <a><div className="post-job-btn">
                                    <Button type="primary"  style={{
                                    backgroundColor: '#2EC3AB',
                                    borderColor: '#2EC3AB',
                                    }} className='post-job-button'>Post a job</Button>
                                </div></a>
                            </Link>
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
                            <Link href="/marketing-seo">
                                <a>  <Icon type="mail" /> Marketing & SEO</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="alipay42">
                            <Link href="/design">
                                <a>  <Icon type="mail" /> Design</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="alipay36">
                            <Link href="/consultance">
                                <a>  <Icon type="mail" /> Consultance</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="alipay47">
                            <Link href="/pr">
                                <a>  <Icon type="mail" /> PR</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="alipay59">
                            <Link href="/developers">
                                <a>  <Icon type="mail" /> Developers</a>
                            </Link>
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
function mapStateToProps (state) {
    return {
      user: state.user
    }
  }
  
  Header.propTypes = {
    user: PropTypes.instanceOf(Object).isRequired,
  }
  
  export default connect(mapStateToProps, {
    
  })(Header)
  