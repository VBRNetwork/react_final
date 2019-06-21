import React, { PureComponent } from 'react'
import { Row, Col } from 'antd'
import { Card } from 'antd'

export default class Layout extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      title: 'TEST'
    }
  }

  render () {
    return (
      <div className='page'>
        <Row>
          <Col span={15} offset={3}>
            <Card title={this.state.title} style={{ margin: '20px' }}>
              {this.props.children}
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
