import React, { PureComponent } from 'react'
import FooterNew from '../components/FooterNew'
import HeaderNew from '../components/HeaderNew'

export default class Layout extends PureComponent {
    render () {
        return (
            <div className='layout'>
                <HeaderNew/>
                {this.props.children}
                <FooterNew/>
            </div>
        )
    }
}
