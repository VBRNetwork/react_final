import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import SearchJobsContainer from 'containers/jobs/SearchJobsContainer'
import SearchMembersContainer from 'containers/members/SearchMembersContainer'

const Index = (props) => {
    const router = useRouter()
    const { category, subcategory } = router.query
    if (props.user.type && props.user.type === 1) {
        return <SearchJobsContainer jobs={[]} siderMenuItems={props.settings}/>
    }
    return <SearchMembersContainer category={category} siderMenuItems={props.settings}/>
}

function mapStateToProps (state) {
    return {
        settings: state.settings,
        user: state.user
    }
}

Index.propTypes = {
    settings: PropTypes.instanceOf(Object).isRequired,
}
export default connect(mapStateToProps, {})(Index)
