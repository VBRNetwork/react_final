import React, { PureComponent } from 'react'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

export default class Layout extends PureComponent {
  render () {
    return (
      <div className='layout'>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
