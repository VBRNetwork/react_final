import React, { Component } from 'react'
import withAuth from  '../src/libs/withAuth'
import {
  Card
} from 'antd';
class Dashboard extends Component {

  constructor(props){
    super(props)
  }
   render() {
     return (   
         <Card title="Dashboard"> Your status account.</Card>
     )
   }
}

export default (Dashboard) 
