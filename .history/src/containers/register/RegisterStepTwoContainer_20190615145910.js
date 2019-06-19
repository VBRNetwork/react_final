
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Row, Radio, Form} from 'antd'

class RegisterStepTwoContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div >
        <Form.Item label="User Type">
      <Radio.Group defaultValue="a" size="small">
        <Radio.Button value="a">Customer</Radio.Button>
        <Radio.Button value="b">Freelancer</Radio.Button>
        </Radio.Group>
        </Form.Item>
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
    