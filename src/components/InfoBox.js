import { Card, Col, Icon, Row } from 'antd'
import React from 'react'

function InfoBox(messages) {
    return (
        <>
            <Card style={{ background: 'rgba(0, 156, 107, 0.24)',marginTop:'5px' }}>
                <Row>
                    <Col span={3}>
                        <div><Icon style={{ fontSize: '40px' }} type='shop'/></div>
                    </Col>
                    <Col span={21}>
                        <div style={{ color: 'rgb(14, 1, 82)' }}>
                            <strong>
                                <h3>
                                    {messages.messages['h3']}
                                </h3>
                                <h4>
                                    {messages.messages['h4']}
                                </h4>
                            </strong>
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default InfoBox

