import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate } from 'antd'
import '../../styles/dashboard.css'
class WalletContainer extends Component {
    static async getInitialProps ({ store, query }) {
    }

    render () {
        return (
            <div>
                Wallet
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user:state.user
    }
}

WalletContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(WalletContainer)
