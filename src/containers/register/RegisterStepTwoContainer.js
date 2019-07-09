
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Row, Form, Select, AutoComplete, Input, Col, DatePicker, Checkbox,} from 'antd'
import FormItem from 'antd/lib/form/FormItem';
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const { MonthPicker, RangePicker } = DatePicker;
const plainOptions = ['Web Programming', 'Databases', 'Web & Mobile Apps'];
const options = [

  { label: 'Desktop Apps', value: 'Desktop Apps' },
  { label: 'Ecommerce Platforms', value: 'Ecommerce Platforms' },
  { label: 'WordPress', value: 'WordPress' },
];

function onChange(checkedValues, pagination) {
  
  console.log('checked = ', checkedValues);
  console.log('params', pagination);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}


class RegisterStepTwoContainer extends Component {

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker': [
          rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
          rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ],
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      };
      console.log('Received values of form: ', values);
    });
  };

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
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <hr />
          <Row>
            <Col >
              <Form.Item style={{width: '50%'}} label="Language">
                <Input />
              </Form.Item>
            </Col>
            <Col >
              <FormItem style={{width: '50%'}} label="Language Level">
                <Select placeholder="Select Language Level">
                  <Option value="basic">Basic</Option>
                  <Option value="conversational">Conversational</Option>
                  <Option value="fluent">Fluent</Option>
                  <Option value="native/bilingual">Native/Bilingual</Option>
                </Select>  
              </FormItem>
            </Col>
            <hr />
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item style={{marginTop: '15%'}} label="Education">
                  <AutoComplete
                    dataSource={eduOptions}
                    onChange={this.handleEduChange}
                    placeholder="Education"
                  >
                    <Input />
                  </AutoComplete>
                </Form.Item>
              </Col>
              <Col span={12}>
                <FormItem style={{  width: '50%'}} label="Year">
                  <MonthPicker />
                </FormItem>
              </Col>
            </Row>
            <hr />
            <Row gutter={24}>
            <Col span={12}>
              <FormItem  style={{width: '100%'}} label="Occupation">
                <Select placeholder="Select Occupation">
                  <Option value="writing&translation">Writing & Translation</Option>
                  <Option value="marketing&seo">Marketing & SEO</Option>
                  <Option value="design">Design</Option>
                  <Option value="businessconsultancy">Business Consultancy</Option>
                  <Option value="programming&developers">Programming & Developers</Option>
                </Select>  
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="From">
                <MonthPicker />
              </FormItem>
              <FormItem label="To">
                <MonthPicker />
              </FormItem>
            </Col>
            </Row>
            <Col>
              <Checkbox.Group  options={plainOptions}  onChange={onChange} />
              <br />
              <br />
              <Checkbox.Group options={options}  onChange={onChange} />
              <br />
              <br />
            </Col>
            <hr />
            <Col>
              <div>
                <strong>Add Skills</strong>
              </div>
              <br />
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Select a skill"
                onChange={handleChange}
                optionLabelProp="label"
              >
                <Option value="python" label="Python">
                  <span role="img" aria-label="Python">
                    PY{' '}
                  </span>
                  Python
                </Option>
                <Option value="javascript" label="JavaScript">
                  <span role="img" aria-label="JavaScript">
                    JS{' '}
                  </span>
                  JavaScript
                </Option>
                <Option value="blockchain" label="Blockchain">
                  <span role="img" aria-label="Blockchain">
                    BC{' '}
                  </span>
                  Blockchain
                </Option>
              </Select>
            </Col>
          </Row>
          <br />
          <br />
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
    