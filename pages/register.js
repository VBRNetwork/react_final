import React from 'react'
import { connect } from 'react-redux'
import RegisterContainer from 'containers/authentication/RegisterContainer'
import KnowYourCustomerContainer from 'containers/KnowYourCustomerContainer'

const IndexRegister = (props) => {
    let icoDomains = ['localhost', 'ico.veelancing.io']
    if(window && icoDomains.includes(window.location.hostname)){
        return <KnowYourCustomerContainer/>
    }
    return <RegisterContainer/>
}
function mapStateToProps (state) { return {} }
export default connect(mapStateToProps, {})(IndexRegister)
