import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/base.css'

class Header extends Component {
    render () {
        return (
            <div>
                <FontAwesomeIcon icon='home' size='sm' fixedWidth /> Home
            </div>
        )
    }
}
export default Header
