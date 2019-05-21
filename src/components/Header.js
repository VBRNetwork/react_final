import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/base.css'

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  state = {
    current: 'mail'
  };

  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  };

  render () {
    return (
      <div>
        <Navbar expand='lg'>
          <div className='container '>
            <img src={'../static/images/vbr_logo.png'} style={{ width: '75px' }} />
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse
              id='basic-navbar-nav'
              className='justify-content-end'>

              <Nav>
                <Nav.Link href='/' className='small'>
                  <FontAwesomeIcon icon='home' size='sm' fixedWidth /> Home
                </Nav.Link>
                <Nav.Link href='#how-it-works' className='small'>
                  How it works
                </Nav.Link>
                <Nav.Link href='/#link' className='small'>
                  Community
                </Nav.Link>
                <Nav.Link href='/login' className='small'>
                  Login
                </Nav.Link>
                <Nav.Link href='/register' className='small'>
                  Register
                </Nav.Link>
                <div className="post-job-btn">
                  <Button
                    href='/postjob'
                    variant='success'
                    size='sm'
                    className='post-job-button'
                    style={{
                      backgroundColor: '#2EC3AB',
                      borderColor: '#2EC3AB'
                    }}>
                      Post a job
                  </Button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>

        <Navbar
          expand='lg'
          style={{
            borderBottom: '1px',
            paddingTop: '0px',
            boxShadow: ' 0px 1px 15px -3px #adadad',
            paddingBottom: '0px'
          }}
        >
          <div className='container'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav>
                <Nav.Link href='/writing' className='small mr-4'>
                  Writing
                </Nav.Link>
                <Nav.Link href='/marketing' className='small mr-4'>
                  Marketing & SEO
                </Nav.Link>
                <Nav.Link href='/design' className='small mr-4'>
                  Design
                </Nav.Link>
                <Nav.Link href='/businessconsultance' className='small mr-4'>
                  Consultance
                </Nav.Link>
                <Nav.Link href='/pr' className='small mr-4'>
                  PR
                </Nav.Link>
                <Nav.Link href='/developers' className='small mr-4'>
                  Developers
                </Nav.Link>
                <Nav.Link href='/allcategories' className='small mr-4'>
                  All Categories
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default Header
