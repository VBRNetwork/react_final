import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Row} from 'antd'

class  HowItWorksContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
          <Row>
             How it works Container
          </Row>
      </div>
    )}}
    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    HowItWorksContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(HowItWorksContainer)
    