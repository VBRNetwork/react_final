import React, { Component } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import { Carousel, Layout, Row, Col, Button, Card, Input, Avatar, Empty, Breadcrumb, Form, Icon } from 'antd'



export default class particles2 extends Component {

  render () {
    return (
        <div className='container background-header' style={{height:window.innerHeight,position:'relative', background: 'black'}}>
        <Particles
            style={{ position: 'absolute' }}
            params={{
                particles: {
                    number: {
                        value: 270
                    },
                    size: {
                        value: 3
                    },
                    color: { value: '#FFF' }
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        }
                    }
                }
            }}>
        </Particles>
        </div>
    )
  }
}
