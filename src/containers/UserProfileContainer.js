import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Icon, Button, Row, Card, Col, Empty, Rate, List} from 'antd'
const { SubMenu } = Menu
const { Meta } = Card
const verifList = [
  {
    title: 'Facebook',
    icon: 'facebook'
  },

  {
    title: 'Email',
    icon: 'facebook'
  },

  {
    title: 'Payment Method'
  },

  {
    title: 'Phone Number'
  },

];

class UserProfileContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {
    return (
        <div>
          <div>
            <img
                src={'../../static/images/dash.jpg'}
                style={{
                position: 'absolute',
                margin: 0,
                width: '100%',
                height: 'auto' }}
            />
          </div>
            <Row>
              <Col>
                <div >
              <Card
                   style={{
                       width: '75%',
                       marginLeft: '15%',
                       marginTop: '5%'}}
                   size='small'
                   hoverable
                   bordered={false}
                   extra={
                       <Button
                           type={'primary'}
                           style={{
                               background: 'rgba(0, 177, 153, 0.74)',
                               borderColor: 'rgba(0, 177, 153, 0.74)'}}
                       >Edit Profile
                       </Button> }
                   cover={
                       <img
                           style={{width: 240, margin: '2%'}}
                           src='../../static/images/asset_profile.jpg'
                       />}
                   title={
                       <div>
                           <strong>
                               <h2>
                                   Stefan Vanea
                               </h2>
                           </strong>
                       </div>
                   }
              >
                <Meta
                  title={
                      <div>
                          <Row>
                              <Col span={18}>
                                  <div>
                                      <strong>
                                          <h4>
                                              @StefanVanea
                                          </h4>
                                      </strong>
                                     <br />
                                     <p>Bucharest, Romania</p>
                                     <br />
                                     <p>Active since September 18, 2019</p>
                                     <br />
                                  </div>
                              </Col>
                              <Col span={6}>
                                  <div>
                                      <Icon style={{fontSize: 25}}
                                            type={'dollar'}/>
                                            <strong>
                                                <h4>
                                                    - USD/hr
                                                </h4>
                                                <hr />
                                                <p>
                                                    0 Reviews
                                                </p>
                                            </strong>
                                      <Rate />
                                  </div>
                              </Col>
                          </Row>
                      </div>
                  }
                  avatar={<Icon style={{fontSize: 25, color: 'rgba(0, 177, 153, 0.74)'}} type={'thunderbolt'}/>}
                />
              </Card>
                  </div>
              </Col>
            </Row>
          <hr />
          <Row>
            <Col>
              <div>
                <Card
                  style={{width: '75%', marginLeft: '15%'}}
                  title={<div><strong><h3> Freelancer Portfolio</h3></strong></div>}
                  extra={<Button type={'primary'}
                                 style={{background: 'rgba(0, 177, 153, 0.74)',
                                 borderColor: 'rgba(0, 177, 153, 0.74)'}}> Add Items</Button>}
                >
                  <div>
                    <Empty
                      image={<Icon style={{fontSize: 50, color: 'rgba(0, 177, 153, 0.74)'}} type={'file-image'}/>}
                      description=
                      {<strong>
                        <p>
                          Wanna show off your talent ?
                        </p>
                        <p>
                          Start by uploading your portfolio !
                        </p>
                     </strong>}
                    />
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col span={18}>
              <div>
                <Card
                  title={<div><strong><h3>Reviews</h3></strong></div>}
                >
                  <div>
                    <Empty
                      description={<strong>No reviews</strong>}
                      image={<Icon style={{fontSize: 50, float: 'left', color: 'rgba(0, 177, 153, 0.74)'}}
                      type={'like'}/>}
                    />
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={6}>
              <div>
                <Card
                  title={<div><strong><h3>Certifications</h3></strong></div>}
                  description={<strong>Currently no course/certification added.</strong>}
                  bordered={false}
                  extra={
                  <Button
                      type={'primary'}
                      style={{
                       background: 'rgba(0, 177, 153, 0.74)',
                       borderColor: 'rgba(0, 177, 153, 0.74)'
                      }}>Add Certification
                  </Button>}
                >
                </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div>
                <Empty />
              </div>
            </Col>
            <Col span={12}>
              <Card title={<div><strong><h3>Account Verifications</h3></strong></div>}>
                  <List itemLayout={'horizontal'}
                        dataSource={verifList}
                        renderItem={item => (
                        <List.Item
                            extra={
                                <Button
                                    type={'primary'}
                                    style={{
                                      background: 'rgba(0, 177, 153, 0.74)',
                                      borderColor: 'rgba(0, 177, 153, 0.74)'}}
                                >Verify
                                </Button>}
                        ><Icon style={{fontSize: 30}} type={item.icon}/>
                            <List.Item.Meta title={<strong>{item.title}</strong>} />

                        </List.Item>)}>
                  </List>
              </Card>
            </Col>
          </Row>
        </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user:state.user
  }
}

UserProfileContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(UserProfileContainer)
