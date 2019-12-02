import React, { Component } from 'react'
import FooterNew from '../components/FooterNew'
import HeaderNew from '../components/HeaderNew'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'next/dist/client/router'

class Layout extends Component {

    constructor (props) {
        super(props)
        this.state = {
            showHeader:false
        }

        this.showHeader = this.showHeader.bind(this)
    }

    componentDidMount () {
        this.showHeader()
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if (this.props.router.pathname !== prevProps.router.pathname) {
           this.showHeader()
        }
    }

    showHeader(){
        if(this.props.router.pathname === '/' || this.props.router.pathname === '/ico'){
            this.setState({
                showHeader:false
            });
        }else{
            this.setState({
                showHeader:true
            });
        }
    }

    render () {
        return (
            <div className='layout'>
                {this.state.showHeader && <HeaderNew/>}{this.props.children}<FooterNew/>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        router_state: state.router
    }
}

Layout.propTypes = {
    router_state: PropTypes.instanceOf(Object).isRequired,
}
export default connect(mapStateToProps, {})(withRouter(Layout))
