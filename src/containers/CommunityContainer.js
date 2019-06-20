import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row } from 'antd'

class CommunityContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <Row>
             Community
        </Row>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {

  }
}

CommunityContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(CommunityContainer)
