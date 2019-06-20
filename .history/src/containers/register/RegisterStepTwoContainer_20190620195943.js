
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Row, Radio, Form, Select, AutoComplete} from 'antd'
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

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render () {

    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

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

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    
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
    