
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Row, Radio, Form} from 'antd'

const { getFieldDecorator } = this.props.form;


class RegisterStepTwoContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render () {
    
    return (
        <Form.Item label="Upload Photo" >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>,
          )}
        </Form.Item>
    )}}
    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    RegisterStepTwoContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(RegisterStepTwoContainer)
    