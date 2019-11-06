import React, { PureComponent } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default class Layout extends PureComponent {
  render () {
    return (
      <div className='layout'>
        { this.props.children }
      </div>
    )
  }
}
