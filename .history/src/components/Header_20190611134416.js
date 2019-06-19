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
        isLogged: false
    };

    componentDidMount(){
        let token = this.props.user.token
        if(token != 0){
            this.setState({
                isLogged:true
            })
        }
    }


render () {

    let loginButton = (
        <Menu.Item key="alipay">
            <Link href="/login">
                <a> <Icon style={{fontSize: 17}} type="login" /> Login</a>
            </Link>
        </Menu.Item>
    )

    return (
        <div>
            <Content style={{marginLeft:'50px',marginRight:'50px',marginBottom:'10px'}}>
                <Row>
                    <Col lg={6}> <Link href="/"><a><img src={'../static/images/vbr_logo.png'} style={{ width: '80px',margin:'8px' }} /></a></Link></Col>
                    <Col lg={16}>
                       
                       
                        <Menu className="nav1"  selectedKeys={[this.state.current]} mode="horizontal" style={{float:'right'}}>
                            <Menu.Item  key="mail1">
                                <Link href="/">
                                    <a>  <Icon style={{fontSize: 17}} type="home" /> Home</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="app1" >
                                <Link href="/how-it-works">
                                    <a>  <Icon style={{fontSize: 17}} type="bulb" /> How it works</a>
                                </Link>
                            </Menu.Item>
                        
                            <Menu.Item key="app122" >
                                <Link href="/community">
                                    <a>  <Icon style={{fontSize: 17}} type="team" />Community</a>
                                </Link>
                            </Menu.Item>
                        
                            {this.state.isLogged == false && 
                            <Menu.Item key="alipay243434">
                                <Link href="/register">
                                    <a><Icon style={{fontSize: 17}} type="dashboard" /> Dashboard</a>
                                </Link>
                            </Menu.Item>}

                            {this.state.isLogged == false && loginButton}
                            
                            {this.state.isLogged == true && 
                                <Menu.Item key="alipay2222">
                                    <Link href="/dashboard">
                                        <a>Dash</a>
                                    </Link>
                                </Menu.Item>
                            }
                        </Menu>


                    </Col>

                    <Col lg={2}>
                        <Link href="/register">
                            <a><div className="post-job-btn">
                                <Button type="primary"  style={{
                                backgroundColor: '#2EC3AB',
                                borderColor: '#2EC3AB',
                                }} className='post-job-button'>Register</Button>
                            </div></a>
                        </Link>
                    </Col>
            </Row>
            
            </Content>
            <Menu  selectedKeys={[this.state.current]} mode="horizontal" style={{boxShadow: '1px 4px 12px 1px #929292'}}>
                    
                    {/* list */}
                    
                    <Menu.Item key="mail2">
                        <Link href="/writing">
                            <a>  <Icon style={{fontSize: 17}} type="file-text" /> Writing</a>
                        </Link>
                    </Menu.Item>



                    <Menu.Item key="app2" >
                        <Link href="/marketing-seo">
                            <a>  <Icon style={{fontSize: 17}} type="like" /> Marketing & SEO</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="alipay42">
                        <Link href="/design">
                            <a>  <Icon  style={{fontSize: 17}} type="laptop" /> Design</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="alipay36">
                        <Link href="/consultance">
                            <a>  <Icon style={{fontSize: 17}} type="pie-chart" /> Business Consultancy</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="alipay59">
                        <Link href="/developers">
                            <a>  <Icon style={{fontSize: 17}} type="code" /> Developers</a>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                            <Icon style={{fontSize: 17}} type="setting" />
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
