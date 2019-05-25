import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Row} from 'antd'

class SearchJobsContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
          <Row>
          Search Jobs
          </Row>
      </div>
    )}}
    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    SearchJobsContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(SearchJobsContainer)
    