import React from 'react'
import { connect } from 'react-redux'
import NewHomeContainer from 'containers/NewHomeContainer'
import NewIcoContainer from 'containers/NewIcoContainer'

const IndexHome = (props) => {
    let icoDomains = ['localhost', 'ico.veelancing.io']
    if(window && icoDomains.includes(window.location.hostname)){
        return <NewIcoContainer/>
    }
    return <NewHomeContainer/>
}
function mapStateToProps (state) {}
export default connect(mapStateToProps, {})(IndexHome)
