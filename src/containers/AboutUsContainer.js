import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card} from 'antd'
const { Meta } = Card;

class AboutUsContainer extends Component {
    componentDidMount () {
    }

    render () {
        return (
            <div>
                <Row>
                    <Col>
                        <Card
                            size="small"
                            bordered={true}
                        >
                            <Meta
                                title={<div ><h2 className="about"><strong>About Us</strong></h2><hr /></div>}
                                description={<h3 className="paragraphs" ><strong><p>About us and how we born!</p></strong></h3>}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {

    }
}


AboutUsContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(AboutUsContainer)