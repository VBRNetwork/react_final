import React, { Component } from 'react'

import SearchJobsContainer from 'containers/jobs/SearchJobsContainer'

export default class Index extends Component {

  componentWillMount () {
    let category = this.props.router.query.category
    let subcategory = this.props.router.query.subcategory
    console.log(subcategory)
  }

  render () {
    return <SearchJobsContainer jobs={[]} siderMenuItems={[]} />
  }
}
