import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Avatar, Icon, Card, Layout, Menu, Row, Col, Checkbox, Breadcrumb } from 'antd'
import Link from 'next/link'
const { Header, Content, Footer, Sider } = Layout


class ViewJobContainer extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                    <Content style={{marginLeft:'1rem'}}>
                        View Job Container
                    </Content>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps (state) {

    return {}
}

ViewJobContainer.propTypes = {}

export default connect(mapStateToProps, {})(ViewJobContainer)
