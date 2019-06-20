import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row } from 'antd'

class PrPageContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <Row>
            PR
        </Row>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {

  }
}

PrPageContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(PrPageContainer)
