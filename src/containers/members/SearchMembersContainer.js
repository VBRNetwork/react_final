import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Avatar, Icon, Card, Layout, Menu, Row, Col, Checkbox, Breadcrumb ,Button} from 'antd'
import Link from 'next/link'
import FilterComponent from '../../components/PageElements/FilterComponent'
import InfoBox from '../../components/InfoBox'
import PropTypes from 'prop-types'
const { Content } = Layout
import {getMembersList} from '../../actions/members_actions.js'

const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }}/>
        {text}
  </span>
)

class SearchMembersContainer extends Component {
    constructor (props) {
        super(props)
        this.getUsers = this.getUsers.bind(this)
    }
    componentDidMount () {
        this.getUsers();
    }

    getUsers(){
        this.props.getMembersList({test:1}).then( (response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    }

    render () {
        return (
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                    <Content style={{marginLeft:'1rem'}}>
                        <InfoBox messages={{'h3':' Welcome to VBR Network Marketplace' ,
                            'h4' : 'We are developing a travel and vacations website, and need a web designed with experience to help'}}/>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Row>
                                <Col  xs={24} sm={24} md={{span:7}} lg={{span:5}} xl={{span:5}} xxl={{ span: 5}}>
                                    <div><strong>Filters</strong></div>
                                    <FilterComponent />
                                </Col>
                                <Col  xs={24} sm={24} md={{span:17}} lg={{span:19}} xl={{span:19}} xxl={{ span: 19}}>
                                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                        <List
                                            itemLayout='vertical'
                                            size='large'
                                            grid={{
                                                gutter: 16,
                                                xs: 1,
                                                sm: 2,
                                                md: 2,
                                                lg: 3,
                                                xl: 4,
                                                xxl: 4,
                                            }}
                                            dataSource={this.props.members.list}
                                            renderItem={item => (
                                                <div>
                                                    <List.Item key={item.username} >
                                                        <div style={{
                                                            boxShadow: '0px 0px 5px 0px #acacac',
                                                            padding:'5px'
                                                        }}>
                                                        <div style={{padding:'5px'}}>
                                                            <img
                                                                width={'100%'}
                                                                alt='logo'
                                                                src='../../static/images/search_dsg.png'
                                                            />
                                                            <a>
                                                                <h3>{item.username}</h3>
                                                                <h4>Senior Software Engineer, $37 </h4><em
                                                                className="ant-list-item-action-split"/>
                                                            </a>
                                                            {item.content}
                                                        </div>

                                                            <div style={{textAlign:'center'}}>

                                                                    <Button type={'primary'} style={{
                                                                        backgroundColor: '#2EC3AB',
                                                                        borderColor: '#2EC3AB'
                                                                    }}>
                                                                        <Link as={'/users/'+item.username}  href={'/users/?username='+item.username}>
                                                                            <a href="">View Profile </a>
                                                                        </Link>
                                                                    </Button>

                                                                </div>

                                                        </div>
                                                    </List.Item>
                                                </div>
                                            )}
                                        />

                                    </Content>
                                </Col>
                            </Row>

                        </Layout>
                    </Content>
                </Col>

            </Row>
        )
    }
}

function mapStateToProps (state) {
    return {
        members:state.members
    }
}

SearchMembersContainer.propTypes = {
    getMembersList: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {getMembersList})(SearchMembersContainer)
