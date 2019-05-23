import React, { PureComponent } from 'react'
import Col from 'react-bootstrap/Col'


import Row from 'react-bootstrap/Row'
// import ListGroup from 'react-bootstrap/ListGroup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, fab)

class Footer extends PureComponent {
    render () {
      return (

        <footer className="footer-box" style={{ backgroundColor: '#37405E' }}>
          <div className='container'>
            <Col className='text-center'>
                      <a className='text-white' href=''>
                        <FontAwesomeIcon icon={['fas', 'envelope-open']} />
                      </a>
                      <a className='text-white' href=''>
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                      </a>
                      <a className='text-white' href=''>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                      </a>
            </Col>
          </div>
        </footer>
      )
    }
}

export default Footer
