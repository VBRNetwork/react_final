import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, fab)

class Footer extends Component {
    render () {
      return (
        <footer className="footer-box" style={{ backgroundColor: '#37405E' }}>
          <div className='container'>
                <a className='text-white' href=''>
                    <FontAwesomeIcon icon={['fas', 'envelope-open']} />
                </a>
                <a className='text-white' href=''>
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
                <a className='text-white' href=''>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
          </div>
        </footer>
      )
    }
}

export default Footer
