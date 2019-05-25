import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Row} from 'antd'

class WritingContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
          <Row>
            Writing
          </Row>
      </div>
    )}}
    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    WritingContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(WritingContainer)
    