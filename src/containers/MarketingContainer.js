import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Row} from 'antd'

class MarketingContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
          <Row>
            Marketing
          </Row>
      </div>
    )}}
    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    MarketingContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(MarketingContainer)
    