import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Row} from 'antd'
import PageSubLayout from 'components/PageSubLayout'
class DesignContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
          <PageSubLayout>
             Design
          </PageSubLayout>
      </div>
    )}}
    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    DesignContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(DesignContainer)
    