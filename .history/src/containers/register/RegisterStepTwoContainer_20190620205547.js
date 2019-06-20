
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Row, Radio, Form, Select, AutoComplete, Input, Col, Button} from 'antd'
import FormItem from 'antd/lib/form/FormItem';
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
      autoCompleteResult = ['Politehnica University Of Bucharest', 'Harvard University', 'Sorbonne'].map(domain => `${value}${domain}`);
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
        <Form>
            <Form.Item label="Language">

              <Input />
            </Form.Item>
            <FormItem label="Language Level">
              
              <Select placeholder="Select Language Level">
                <Option value="basic">Basic</Option>
                <Option value="conversational">Conversational</Option>
                <Option value="fluent">Fluent</Option>
                <Option value="native/bilingual">Native/Bilingual</Option>
              </Select>  
            </FormItem>
            <hr />
            <Form.Item label="Education">
          
              <AutoComplete
                dataSource={eduOptions}
                onChange={this.handleEduChange}
                placeholder="Education"
              >
                <Input />
              </AutoComplete>
            </Form.Item>
        </Form>
        )}}
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    RegisterStepTwoContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(RegisterStepTwoContainer)
    