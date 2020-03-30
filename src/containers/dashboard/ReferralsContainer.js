import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Col, Row, Alert} from 'antd'
import Link from 'next/link'


class ReferralsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            referral_code: 10,
            payment_method:1,
        };
    }

    render () {
        let link = 'https://veelancing.io/register?join=' + this.props.referral_code.referralCode
        return (
            <div>
                <Card title='Referral Members'>
                    <Row>
                        <Col xl={16}>
                            Your referral link is <br/>
                            <Link target={'_blank'} href={link}>{link}</Link>
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
