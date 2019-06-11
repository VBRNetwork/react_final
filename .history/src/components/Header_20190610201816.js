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
  