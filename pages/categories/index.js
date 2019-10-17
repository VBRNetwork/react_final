import React, { Component } from 'react'
import SubCategoriesContainer from 'containers/SubCategoriesContainer'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import SearchJobsContainer from 'containers/jobs/SearchJobsContainer'
import SearchMembersContainer from 'containers/members/SearchMembersContainer'

const Index = (props) => {
    const router = useRouter()
    const { category, subcategory } = router.query
    console.log(category, subcategory)

    let userType = 'client'
    if (userType === 'client') {
        return <SearchMembersContainer category={category} siderMenuItems={props.settings}/>

    }
    if (category && !subcategory) {
        return <SearchJobsContainer jobs={[]} siderMenuItems={[]}/>
    }

}

function mapStateToProps (state) {
    return {
        settings: state.settings
    }
}

Index.propTypes = {
    settings: PropTypes.instanceOf(Object).isRequired,
}
export default connect(mapStateToProps, {})(Index)
