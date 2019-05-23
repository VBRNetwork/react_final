import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/base.css'

import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class Header extends PureComponent {
    render () {
        return (
            <div>
                <FontAwesomeIcon icon='home' size='sm' fixedWidth /> Home
            </div>
        )
    }
}
export default Header
