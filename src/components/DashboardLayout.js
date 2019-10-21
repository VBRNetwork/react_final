import { Button, Card, Col, Icon, Layout, Row, Statistic, Timeline } from 'antd'
import React, { Component } from 'react'
import MenuDashboardContainer from '../containers/dashboard/MenuDashboardContainer'
const { Content } = Layout

class DashboardLayout extends Component {
    static async getInitialProps ({ store, query }) {
    }

    render () {
        return (
            <Content>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                        <div style={{ marginTop: '5px',marginLeft:'10px' ,marginBottom:'5px'}}>
                            <div style={{border:'1px solid rgb(232, 227, 227)',margin:'10px',padding:'5px'}}>
                                <Row>
                                    <Col xl={{span:20}}>
                                        <div>
                                            <a href='#'><h2 style={{ marginLeft: '2%' }}>Account Dashboard</h2></a>
                                        </div>
                                    </Col>
                                    <Col xl={{span: 4}}>
                                        <strong style={{color:'#000',marginLeft: '10px'}}>{this.props.data.full_name}</strong>
                                    </Col>
                                </Row>
                            </div>
                            <Layout style={{ background: '#fff' }}>
                                <MenuDashboardContainer/>
                                <Content style={{ marginLeft: '1%', marginRight: '1%' }}>
                                    <div>
                                        {this.props.children}
                                    </div>
                                </Content>
                            </Layout>
                        </div>
                    </Col>
                </Row>
            </Content>
    )}
}

export default DashboardLayout
