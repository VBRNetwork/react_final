import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Card, Icon, Button, Empty} from 'antd'
import '../styles/hiw.css'
const { Meta } = Card;

class TestDanContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <Row>
          <Col>
          <Button type="default">1</Button>
          <Button type="default">2</Button>
          <Button type="default">3</Button>
            <Card
              size="small"
              extra={<Button type='primary' style={{background: '#1890ff'}}>Dan</Button>}
              bordered={true}
            >
              <Meta
                title={<div ><h3 className="about"><strong>Test</strong></h3><hr /></div>}
                description={<div className="paragraphs" ><strong><p>This is a test page</p></strong></div>}
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


TestDanContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(TestDanContainer)