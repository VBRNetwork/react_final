
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Row, Radio} from 'antd'

class RegisterStepTwoContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div style={{ marginTop: 16 }}>
      <Radio.Group defaultValue="a" size="small">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        </Radio.Group>
      </div>
    )}}
    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    RegisterStepTwoContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(RegisterStepTwoContainer)
    