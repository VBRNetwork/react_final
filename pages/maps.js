
import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'react-vertical-timeline-component/style.min.css';
import { Carousel, Layout, Row, Col, Button, Card, Input, Avatar, Empty, Breadcrumb, Form, Icon } from 'antd'

import HEREMap from 'here-maps-react'
import HereMaps from '../src/components/HereMaps';
export default class maps extends Component {
    constructor(props){
        super(props)
    }

  render () {
    return (
        <HereMaps
        appId="M1SQpHbkm0lumJ3LQE2Y"
        appCode="DMbIi-aJNsP1fHrD-SnbLvMy1-4ixm4fKxNElswk-Kk"
        center={{ lat: -12.0464, lng: -77.0428 }}
        zoom={12}/>
    )
  }
}
