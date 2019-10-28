import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate } from 'antd'
import '../../styles/dashboard.css'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
import Link from 'next/link'

class MenuDashboardContainer extends Component {
    static async getInitialProps ({ store, query }) {
    }

    render () {
        let full_name = this.props.user.name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        return (
                <Sider breakpoint='sm'
                       collapsedWidth='0'
                       onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
                       style={{ minHeight: '100vh', zIndex: 99 }}
                       width={200} style={{ background: '#fff', marginLeft: '1%' }}>
                    <Menu
                        mode='inline'
                        defaultSelectedKeys={[5]}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                        theme='dark'>

                        <SubMenu
                            key='sub1'
                            title={<span>
                        <Icon type='user'/>Profile
                            </span>}>
                            <Menu.Item style={{ color: '#2ec3ab' }} key='5'>
                                <Link href={'/dashboard'} as={'/dashboard'}><a>Dashboard</a></Link>
                            </Menu.Item>
                                <Menu.Item style={{ color: '#2ec3ab' }} key='1'>
                                    <Link href={'/dashboard?slug=view-profile'} as={'/dashboard/view-profile'}><a>View Profile</a></Link>
                                </Menu.Item>
                                <Menu.Item style={{ color: '#2ec3ab' }} key='4'>
                                    <Link href={'/dashboard?slug=settings'} as={'/dashboard/settings'}><a>Settings</a></Link>
                                </Menu.Item>
                                <Menu.Item style={{ color: '#2ec3ab' }} key='3'>
                                    <Link href={'/dashboard?slug=statistics'} as={'/dashboard/statistics'}><a>Statistics</a></Link>
                                </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key='sub2'
                            title={
                                <span>
                      <Icon type='tool'/>
                                    VBR Tools
                    </span>}>
                            <Menu.Item style={{ color: '#2ec3ab' }} key='5'>Marketplace</Menu.Item>
                            <Menu.Item style={{ color: '#2ec3ab' }} key='6'>Exchange Market</Menu.Item>
                            <Menu.Item style={{ color: '#2ec3ab' }} key='7'>Chat Preferences</Menu.Item>
                            <Menu.Item style={{ color: '#2ec3ab' }} key='8'>Smart Contracts</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key='sub3'
                            title={
                                <span>
                      <Icon type='wallet'/>
                                Wallet
                    </span>}>
                            <Menu.Item style={{ color: '#2ec3ab' }} key='9'>
                                <Link href={'/dashboard?slug=wallet'} as={'/dashboard/wallet'}><a>Balance</a></Link>
                            </Menu.Item>
                            <Menu.Item style={{ color: '#2ec3ab' }} key='10'>Quick Top UP</Menu.Item>
                            <Menu.Item style={{ color: '#2ec3ab' }} key='11'>Send/Request Money</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
        )
    }
}

function mapStateToProps (state) {
    return {
        user:state.user
    }
}

MenuDashboardContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(MenuDashboardContainer)
