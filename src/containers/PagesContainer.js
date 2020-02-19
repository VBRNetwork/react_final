import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Avatar, Icon, Card, Layout, Menu, Row, Col, Checkbox } from 'antd'
const { SubMenu } = Menu
const { Content } = Layout


const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }}/>
        {text}
  </span>
)

class PagesContainer extends Component {

    constructor (props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount () {
    }

    onChange (e) {
        console.log(`checked = ${e.target.checked}`)
    }

    render() {
        return (
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                    <Content style={{marginLeft:'1rem'}}>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Row>
                                {this.props.pageContent &&
                                    <Col  xs={24} sm={24} md={{span:7}} lg={{span:5}} xl={{span:5}} xxl={{ span: 5}}>
                                        { this.props.pageContent.title && <div>{this.props.pageContent.title}</div>}
                                        <br/>
                                        {this.props.pageContent.content && <div>{this.props.pageContent.content}</div>}
                                    </Col>
                                }
                            </Row>

                        </Layout>
                    </Content>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps (state) {
    return {}
}

PagesContainer.propTypes = {}

export default connect(mapStateToProps, {})(PagesContainer)
