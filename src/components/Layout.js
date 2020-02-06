import React, { Component } from 'react'
import FooterNew from '../components/FooterNew'
import HeaderNew from '../components/HeaderNew'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'next/dist/client/router'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-147139648-1');

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

        if (prevProps.redux_router.location.pathname !== this.props.redux_router.location.pathname) {
            ReactGA.pageview(window.location.pathname + window.location.search)
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
            <div>

                <div className='layout'>
                    {this.state.showHeader && <HeaderNew/>}{this.props.children}<FooterNew/>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        router_state: state.router,
        redux_router: state.router
    }
}

Layout.propTypes = {
    router_state: PropTypes.instanceOf(Object).isRequired,
    redux_router: PropTypes.instanceOf(Object).isRequired,
}
export default connect(mapStateToProps, {})(withRouter(Layout))
