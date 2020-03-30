import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Col, Row, Alert} from 'antd'

class ReferralsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        let link = 'https://ico.veelancing.io/register?join=' + this.props.referral_code.referralCode
        return (
            <div>
                <Card title='Referral Members'>
                    <Row>
                        <Col xl={16}>
                            Your referral link is: <br/>
                            <Alert message= {link}/>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user:state.user,
        referral_code:state.settings.main_menu.user
    }
}

ReferralsContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(ReferralsContainer)
