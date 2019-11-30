import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Avatar, Progress, Row, Card, Switch, Layout, List, Col, Statistic, Timeline, Dropdown, Rate } from 'antd'
import '../../styles/dashboard.css'
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']
import MenuDashboardContainer from './MenuDashboardContainer'
import DashboardLayout from '../../components/DashboardLayout'
import ViewProfileContainer from './ViewProfileContainer'
import PanelContainer from './PanelContainer'
import WalletContainer from './WalletContainer'
import BecomeFreelancerContainer from './BecomeFreelancerContainer'

class DashboardContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            location:this.props.router.pathname
        }
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if(prevProps.router.pathname !== this.props.router.pathname){
            this.setState({
                location: this.props.router.pathname
            });
        }
    }

  render () {
      let full_name = this.props.user.name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
          return letter.toUpperCase();
      });
      let dashboardComponent = <PanelContainer/>
      if(this.state.location === '/dashboard/view-profile'){
          dashboardComponent = <ViewProfileContainer/>
      }else if(this.state.location === '/dashboard/become-freelancer'){
          dashboardComponent = <BecomeFreelancerContainer/>
      }else if(this.state.location === '/dashboard/wallet'){
          dashboardComponent = <WalletContainer/>
      }

      return (
          <DashboardLayout data={{full_name:full_name}}>
              <div>
                  {dashboardComponent}
              </div>
          </DashboardLayout>
    )
  }
}

function mapStateToProps (state) {
  return {
    router:state.router.location
  }
}

DashboardContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(DashboardContainer)
