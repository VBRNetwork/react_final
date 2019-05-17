import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'
import Figure from 'react-bootstrap/Figure'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CenteredSection from 'components/CenteredSection'
import Section from 'components/Section'

const SloganText = styled.h2`
  font-weight: bold;
  color: #37405e;
`

const DivSmallPromoText = styled.div`
  width: 209px;
  color: #37405e;
  opacity: 0.7;
  font-size: 12px;
  margin-top: 68px;
  float: right;
  text-align: right;
`

const SubText = styled.p`
  color: #37405e;
  font-family: 'Helvetica';
  font-size: 14px;
  padding-top: 10px;
`

class WritingContainer extends Component {
  static async getInitialProps ({ store, query }) {

  }

  componentDidMount () {

  }

  render () {
    return (

    <div>
        <Row>
        <Figure>
  <Figure.Image
    width={100}
    height={100}
    alt="171x180"
    src="holder.js/171x180"
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
</Figure>
<Figure>
  <Figure.Image
    width={100}
    height={100}
    alt="171x180"
    src="holder.js/171x180"
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
</Figure>

        </Row>


    </div>


    )}}


    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    WritingContainer.propTypes = {
    }
    
    export { WritingContainer }
    export default connect(mapStateToProps, {
    })(WritingContainer)
    