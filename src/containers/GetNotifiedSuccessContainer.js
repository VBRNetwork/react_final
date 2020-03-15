import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'
import '../styles/get-notified.css'

class GetNotifiedSuccessContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            counter1: 0,
            counter2: 0
        }

        this.buttonClicked = this.buttonClicked.bind(this);
        this.buttonClicked1 = this.buttonClicked1.bind(this);
        this.buttonClicked2 = this.buttonClicked2.bind(this);
        
    }

    buttonClicked(event){

        buttonClicked(this.state.counter).then((e) => {
        this.setState({counter: this.state.counter+1});
        });
    }

    buttonClicked1(event){

        buttonClicked(this.state.counter1).then((e) => {
        this.setState({counter1: this.state.counter1+1});
        });
    }

    buttonClicked2(event){

        buttonClicked(this.state.counter2).then((e) => {
        this.setState({counter2: this.state.counter2+1});
        });
    }
 

  componentDidMount () {
  }

  render () {

    console.log('vanea', this.state.counter)
    console.log('vanea', this.state.counter1)
    console.log('vanea', this.state.counter2)

    return (
      <div className={'subscription-success-box'}>
            <Row>
                <Col>
                    <div style={{textAlign: 'center', marginBottom: '5%'}}><h1 style={{color: '#FFF'}}>Thank you for your subscription !</h1></div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{textAlign: 'center', marginBottom: '7%'}}><h2 style={{color: '#FFF'}}>What you wanna do next ?</h2></div>
                </Col>
            </Row>
        <div style={{marginLeft: '11%'}}>
            <Row>
                <Col span={8}>
                    <Button onClick={this.buttonClicked} className={'get-notified-page-btn'}>About Veelancing</Button>
                </Col>
                <Col span={8}>
                    <Button onClick={this.buttonClicked1} className={'get-notified-page-btn'}>How it Works ?</Button>
                </Col>
                <Col span={8}>
                    <Button onClick={this.buttonClicked2} className={'get-notified-page-btn'}>Veelancing ICO</Button>
                </Col>
            </Row>
        </div>
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {

  }
}


export default connect(mapStateToProps, {
})(GetNotifiedSuccessContainer)