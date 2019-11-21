import React, { PureComponent } from 'react'
import FooterNew from '../components/FooterNew'
import HeaderNew from '../components/HeaderNew'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'next/dist/client/router'

class Layout extends PureComponent {

    constructor (props){
        super(props)
    }

    render () {
        console.log(this.props.router_state)
        return (
            <div className='layout'>
                <HeaderNew/>
                {this.props.children}
                <FooterNew/>
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
