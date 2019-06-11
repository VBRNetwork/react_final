import React, { Component } from 'react'
import {
  NumberCard,
  Quote,
  Sales,
  Weather,
  RecentSales,
  Comments,
  Completed,
  Browser,
  Cpu,
  User,
} from '../src/components'
import {
  Card
} from 'antd';
class DashboardContainer extends Component {

  constructor(props){
    super(props)
  }
   render() {
    const { avatar, username, dashboard, loading } = this.props
    const {
      weather,
      sales,
      quote,
      numbers,
      recentSales,
      comments,
      completed,
      browser,
      cpu,
      user,
    } = dashboard

    const numberCards = numbers.map((item, key) => (
      <Col key={key} lg={6} md={12}>
        <NumberCard {...item} />
      </Col>
    ))
     return (   
      <Card>Dashard</Card>
  )
}
}

Dashboard.propTypes = {
avatar: PropTypes.string,
username: PropTypes.string,
dashboard: PropTypes.object,
loading: PropTypes.object,
}
     

export default (DashboardContainer) 