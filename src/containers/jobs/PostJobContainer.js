import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row } from 'antd'

class PostJobContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <Row>
          PostJobContainer
        </Row>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {

  }
}

PostJobContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(PostJobContainer)
