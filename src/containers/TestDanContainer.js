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
            <Card
              size="small"
              extra={<Button type='primary' style={{background: 'rgba(0, 37, 70, 0.74)'}}>Dan</Button>}
              bordered={false}
              cover={<img src='../../static/images/picture_5.png' />}
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