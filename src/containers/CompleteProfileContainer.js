
import React from 'react';

import {
  Row,
  Col,
  Button,
  Card,
} from 'antd';

import { connect } from 'react-redux'
import RegisterStepOneContainer from '../containers/register/RegisterStepOneContainer'
import RegisterStepTwoContainer from '../containers/register/RegisterStepTwoContainer'
import RegisterStepThreeContainer from '../containers/register/RegisterStepThreeContainer'
import '../styles/register.css'
import { Steps, message } from 'antd';
import Router from "next/dist/client/router";
const Step = Steps.Step;
const steps = [
    {
      title: 'First',
      content: <RegisterStepOneContainer style={{ backgroundColor: '#2EC3AB', borderColor: '#2EC3AB'}}/>,
    },
    {
      title: 'Second',
      content:  <RegisterStepTwoContainer style={{ backgroundColor: '#2EC3AB', borderColor: '#2EC3AB'}}/>,
    },

    {
        title: 'Third',
        content:  <RegisterStepThreeContainer style={{ backgroundColor: '#2EC3AB', borderColor: '#2EC3AB'}}/>,
      }
  ];


class CompleteProfileContainer extends React.Component {

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

    redirectToTarget = () => {
        Router.push('/dashboard')
    };

    componentDidMount() {
        if (this.props.user.token !== 0) {
            this.redirectToTarget()
        }
    }

    render() {
        const { current} = this.state;
        return (
            <Row>
            <Col xs={{span:24, offset:0}} sm={4} md={6} lg={8} xl={{span:12,offset:6}}>
                <Card style={{margin:'25px'}}>
                    <div>
                        <h3 style={{textAlign:'center'}}>VBR Users Registration</h3>
                        <div style={{margin:'10px'}}>
                            <Steps current={current}  >
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                            </Steps>
                        </div>
                        <div className="steps-content" >{steps[current].content}</div>
                        <div className="steps-action"  >
                            {current < steps.length - 1 && (
                                <Button style={{ marginRight: 8 , float:'right', backgroundColor: '#2EC3AB',
                                    borderColor: '#2EC3AB'}} type="primary" onClick={() => this.next()}>
                                    Next
                                </Button>
                            )}

                            {current === steps.length - 1 && (
                                <Button style={{ marginRight: 8 , float:'right', backgroundColor: '#2EC3AB',
                                    borderColor: '#2EC3AB'}} type="primary" onClick={() => message.success('Processing complete!')}>
                                    Done
                                </Button>
                            )}
                            {current > 0 && (
                                <Button style={{borderColor: '#2EC3AB', color: '#2EC3AB'}} onClick={() => this.prev()}>
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
  
  CompleteProfileContainer.propTypes = {
    // user: PropTypes.instanceOf(Map).isRequired,
  }
  
  export default connect(mapStateToProps, {
  })(CompleteProfileContainer)
