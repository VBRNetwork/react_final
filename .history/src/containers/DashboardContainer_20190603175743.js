import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Row} from 'antd'
import { Avatar } from 'antd';
import { Progress } from 'antd';

class  DashboardContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (

        
      <div>
          <div>
              <Avatar style={{ backgroundColor: '#87d068', float: 'right', marginRight: '30px' }} icon="user" />
          </div>
            <Row>
                Dashboard
            </Row>
                <div>
                    <Row>

                                    <Progress
                                    style={{width: '600px', marginLeft: '100px'}}
                            strokeColor={{
                                from: '#108ee9',
                                to: '#87d068',
                            }}
                            percent={99.9}
                            status="active"
                                            />

                    </Row>


                </div>

      </div>
    )}}
    
    function mapStateToProps (state) {
      return {
    
      }
    }
    
    DashboardContainer.propTypes = {
    }
    
    export default connect(mapStateToProps, {
    })(DashboardContainer)
    