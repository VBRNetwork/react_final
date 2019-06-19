
import React from 'react';

import {
  Select,
  Row,
  Col,
  Button,
  AutoComplete,
  Card,
  Radio
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
import { connect } from 'react-redux'
import RegisterStepOneContainer from '../containers/register/RegisterStepOneContainer'
import RegisterStepTwoContainer from '../containers/register/RegisterStepTwoContainer'
import '../styles/register.css'

import { Steps, message } from 'antd';
const Step = Steps.Step;
const steps = [
    {
      title: 'First',
      content: <RegisterStepOneContainer/>,
    },
    {
      title: 'Second',
      content:  <RegisterStepTwoContainer/>,
    }
  ];


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }


    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }


    render() {
        const { current} = this.state;
        return (
            <Row>
            <Col span={12} offset={6}>
                <Card style={{margin:'25px'}}>
                    <div>
                        <h3 style={{textAlign:'center'}}>VBR Users Registration</h3>
                        <div style={{margin:'10px'}}>
                            <Steps current={current} style={{ backgroundColor: '#2EC3AB'}} >
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                            </Steps>
                        </div>
                        <div className="steps-content" >{steps[current].content}</div>
                        <div className="steps-action" >
                            {current < steps.length - 1 && (
                                <Button style={{ marginRight: 8 , float:'right', backgroundColor: '#2EC3AB',
                                borderColor: '#2EC3AB'}} type="primary" onClick={() => this.next()}>
                                Next
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button style={{ marginRight: 8 , float:'right'}} type="primary" onClick={() => message.success('Processing complete!')}>
                                Done
                                </Button>
                            )}
                            {current > 0 && (
                                <Button  onClick={() => this.prev()}>
                                Previous
                                </Button>
                            )}
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
    )
  }
}

function mapStateToProps (state) {
    return {
      user: state.user
    }
  }
  
  Register.propTypes = {
    // user: PropTypes.instanceOf(Map).isRequired,
  }
  
  export default connect(mapStateToProps, {
  })(Register)
  