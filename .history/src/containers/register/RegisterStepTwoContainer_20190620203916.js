
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Row, Radio, Form, Select, AutoComplete, Input} from 'antd'
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;



class RegisterStepTwoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
}
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  handleEduChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render () {

    const { autoCompleteResult, current } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const eduOptions = autoCompleteResult.map(edu => (
      <AutoCompleteOption key={edu}>{edu}</AutoCompleteOption>
    ));
    
    return (
      <Form.Item label="Education">
     
        <AutoComplete
          dataSource={eduOptions}
          onChange={this.handleEduChange}
          placeholder="Education"
        >
          <Input />
        </AutoComplete>
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
    