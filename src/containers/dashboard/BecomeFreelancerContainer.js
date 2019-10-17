import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate } from 'antd'
import '../../styles/dashboard.css'
class BecomeFreelancerContainer extends Component {
    static async getInitialProps ({ store, query }) {
    }

    render () {
        return (
            <div>
                Become Freelancer
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user:state.user
    }
}

BecomeFreelancerContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(BecomeFreelancerContainer)
