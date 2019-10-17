import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate } from 'antd'
import '../../styles/dashboard.css'
class EditProfileContainer extends Component {
    static async getInitialProps ({ store, query }) {
    }

    render () {
        return (
            <div>
                Edit Profile
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user:state.user
    }
}

EditProfileContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(EditProfileContainer)
