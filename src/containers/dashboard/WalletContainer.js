import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
    Menu,
    Icon,
    Button,
    Progress,
    Row,
    Card,
    Layout,
    List,
    Col,
    Statistic,
    Dropdown,
    Tabs,
    Empty,
    Tooltip
} from 'antd'
const { SubMenu } = Menu;
const { Meta } = Card;

import { DonutChart } from '../../components/Charts/DonutChart'

import '../../styles/dashboard.css'
const percentage = 40;
const balance = [
        'VBRT - 60%',
        'USD - 40%',
];
const { TabPane } = Tabs;


function handleClick(e) {
    console.log('click', e);
}

class WalletContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          balance: [0],
        };

    }

    static async getInitialProps ({ store, query }) {
    }

    render () {
        return (
            <div>
                <Tabs size={'small'} defaultActiveKey='1'>
                    <TabPane
                        tab={
                            <span className={'wallet-tabs'}>
                                <Icon type='wallet' />
                                  <span>My Wallet</span>
                            </span>}
                        key='1'
                    >
                        <div className={'wallet-statistic-1'}>
                            <Card
                                title={
                                    <div ><span>
                                        Total Asstets <Tooltip
                                        title="Total assets. Both crypto and fiat">
                                                    <Icon type="question-circle-o" />
                                            </Tooltip>
                                        </span>
                                        <br />
                                        <br />
                                        <Row>
                                        <Col span={16} push={4}>
                                            <Statistic
                                                className={'statistic-balance'}
                                                valueStyle={{fontSize: 50}}
                                                title={<div><Menu onClick={handleClick} style={{ width: 256 }}  mode='vertical'>
                                                   <SubMenu
                                                       key="sub1"
                                                       title={
                                                           <span>
                                                              <Icon style={{fontSize: 20}} type="bank" />
                                                              <span><strong>Account Balance - EUR</strong></span>
                                                           </span>
                                                       }
                                                   >
                                                       <Menu.ItemGroup title="Select Currency">
                                                           <Menu.Item key="1">VBRT</Menu.Item>
                                                           <Menu.Item key="2">EUR</Menu.Item>
                                                           <Menu.Item key="3">USD</Menu.Item>
                                                           <Menu.Item key="4">GBP</Menu.Item>
                                                           <Menu.Item key="5">BTC</Menu.Item>
                                                           <Menu.Item key="6">ETH</Menu.Item>
                                                       </Menu.ItemGroup></SubMenu></Menu></div>}
                                                value={112893}
                                                precision={2}

                                            />
                                        </Col>

                                            <Col span={8}>
                                                <Tooltip title="3 done / 3 in progress / 4 to do">

                                                </Tooltip>

                                               <DonutChart/>
                                            </Col>
                                        </Row>
                                    </div>}
                                bordered={false}
                            >
                            </Card>
                            <br />
                            <Card
                                bordered={false}
                                title={<div><strong><h3>Wallets</h3></strong><hr /></div>}
                            >
                                <Meta
                                    title={
                                        <div
                                            className={'wallet-title'}
                                        >
                                            <img
                                                style={{width: 120}}
                                                src={'../../static/images/vbr_logo.png'}
                                            />
                                            <div className={'wallet-text'} ><span ><strong>VBR Wallet</strong></span></div>
                                        </div>
                                    }
                                />
                            </Card>
                        </div>
                    </TabPane>
                    <TabPane
                        tab={
                            <span className={'wallet-tabs'}>
                                <Icon type='fund' />
                                  <span>Transaction History</span>
                            </span>}
                        key='2'
                    >
                        Tab 1
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user:state.user
    }
}

WalletContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(WalletContainer)
