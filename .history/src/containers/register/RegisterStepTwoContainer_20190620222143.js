
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Row, Radio, Form, Select, AutoComplete, Input, Col, Button, DatePicker, TimePicker, Checkbox, Table} from 'antd'
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

const options2 = [
  { label: 'Desktop Apps', value: 'Desktop Apps' },
  { label: 'Ecommerce Platforms', value: 'Ecommerce Platforms' },
  { label: 'WordPress', value: 'WordPress' },

]

const skills = [
  {
    title: 'Skill',
    dataIndex: 'skill',
    filters: [
      {
        text: 'JavaScript',
        value: 'JavaScript',
      },
      {
        text: 'Python',
        value: 'Python',
      },
      {
        text: 'Web Programming',
        value: 'Web Programming',
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Level',
    dataIndex: 'level',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Add New',
    dataIndex: 'addnew',
    filters: [
      {
        text: '-',
        value: '-',
      },
      {
        text: '-',
        value: '-',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];

const skillData = [
  {
    key: '1',
    skill: 'Python',
    level: 32,
    
  },
  {
    key: '2',
    skill: 'JavScript',
    level: 42,
  },
  {
    key: '3',
    skill: 'Web Programming',
    level: 32,
  },
];



function onChange(checkedValues, pagination, filters, sorter) {
  
  console.log('checked = ', checkedValues);
  console.log('params', pagination, filters, sorter);
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
            <FormItem label="Year">
              <MonthPicker />
            </FormItem>
            <hr />
            <FormItem label="Occupation">
              <Select placeholder="Select Occupation">
                <Option value="writing&translation">writing & Translation</Option>
                <Option value="marketing&seo">Marketing & SEO</Option>
                <Option value="design">Design</Option>
                <Option value="businessconsultancy">Business Consultancy</Option>
                <Option value="programming&developers">Programming & Developers</Option>
              </Select>  
            </FormItem>
            <FormItem label="From">
              <MonthPicker />
            </FormItem>
            <FormItem label="To">
              <MonthPicker />
            </FormItem>
            <Checkbox.Group  options={plainOptions} defaultValue={['Web Programming']} onChange={onChange} />
            <br />
            <br />
            <Checkbox.Group options={options} defaultValue={['Ecommerce Platforms']} onChange={onChange} />
            <br />
            <br />
            <hr />
            <Table columns={skills} dataSource={skillData} onChange={onChange} />
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
    