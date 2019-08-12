import React, { Component } from 'react'

import SearchJobsContainer from 'containers/jobs/SearchJobsContainer'

export default class Index extends Component {
  static getInitialProps (ctx) {
    return { url: ctx.url }
  }

  componentWillMount () {
    let category = this.props.router.query.category
    console.log(this.props.router)
  }

  render () {
    return <SearchJobsContainer jobs={[]} siderMenuItems={[]} />
  }
}
