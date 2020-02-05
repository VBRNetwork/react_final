import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Avatar, Icon, Card, Layout, Menu, Row, Col, Checkbox, Button, Select, Input} from 'antd'
import Link from 'next/link'
import FilterComponent from '../../components/PageElements/FilterComponent'
import InfoBox from '../../components/InfoBox'
import PropTypes from 'prop-types'
const { Content } = Layout
import {getMembersList} from '../../actions/members_actions.js'
import '../../styles/members.css'

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
  }

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
        }).catch((err) => {
        })
    }

    render () {
        let {members} = this.props
        return (
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={{ span: 17, offset: 3 }}>
                    <Content style={{marginLeft:'1rem'}}>
                        <div style={{marginTop: '3%', marginBottom: '3%'}}>
                            <Row>
                                <Col span={10}>
                                    <Input style={{borderRadius: '10px', boxShadow: '-5px 10px 30px 0 rgba(0, 96, 94, 0.25)'}} size={'large'} placeholder={'Search'} prefix={<div><Icon type={'search'}/></div>}/>
                                </Col>
                                <Col span={10}>
                                    <Input style={{borderRadius: '10px', boxShadow: '-5px 10px 30px 0 rgba(0, 96, 94, 0.25)'}} size={'large'} placeholder={'Location'} prefix={<div><Icon type={'pushpin'}/></div>}/>
                                </Col>
                                <Col span={4}>
                                    <Button className={'search-btn'} size={'large'} ><div className={'search-btn-text'}>Search</div></Button>
                                </Col>
                            </Row>
                        </div>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Row>
                                
                                <Col  xs={24} sm={24} md={{span:7}} lg={{span:5}} xl={{span:5}} xxl={{ span: 5}}>
                                    <div><strong>Filters</strong><div style={{color: '#008D7F', float: 'right'}} ><strong>Clear All</strong></div></div>
                                    <div style={{marginTop: '5%'}}>
                                        <Select
                                            mode="multiple"
                                            style={{ width: '100%'}}
                                            placeholder="Select skill"
                                            defaultValue={['Python']}
                                            onChange={handleChange}
                                            optionLabelProp="label"
                                        >
                                            <Option className={'option-filters'} value="python" label="Python">
                                            <span role="img" aria-label="Python">
                                                PY
                                            </span>
                                            Python (PY)
                                            </Option>
                                            <Option className={'option-filters'} value="javascript" label="JavaScript">
                                            <span role="img" aria-label="JavaScript">
                                                JS
                                            </span>
                                            JavaScript (JS)
                                            </Option>
                                            <Option className={'option-filters'} value="ui" label="UI Design">
                                            <span role="img" aria-label="UI Design">
                                                UI
                                            </span>
                                            UI Design (UI)
                                            </Option>
                                            <Option className={'option-filters'} value="ux" label="UX Design">
                                            <span role="img" aria-label="UX Design">
                                                UX
                                            </span>
                                            UX Design (UX)
                                            </Option>
                                        </Select>
                                    </div>
                                    <div className={'filter-title'}><span >
                                        Category
                                    </span></div>
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
                                                xl: 3,
                                                xxl: 3,
                                            }}
                                            dataSource={members.list}
                                            renderItem={item => {

                                                let imageAvatar ='../../static/images/search_dsg.png'
                                                if(item.profile.image){
                                                    imageAvatar = item.profile.image
                                                }

                                                let jobTitle = 'Freelancer'
                                                if(item.profile.jobTitle){
                                                    jobTitle = item.profile.jobTitle
                                                }

                                                return((
                                                    <div>
                                                        <Link as={'/users/'+item.username}  href={'/users/?username='+item.username}>
                                                        <List.Item 
                                                            key={item.username} >
                                                            <div className={'list-search-members'} style={{
                                                                boxShadow: '0px 0px 5px 0px #acacac',
                                                                padding:'5px',
                                                            }}>
                                                                <div style={{padding:'5px'}}>
                                                                    <img
                                                                        width={'100%'}
                                                                        height={'230px'}
                                                                        style={{objectFit:'cover'}}
                                                                        alt='logo'
                                                                        src={imageAvatar}
                                                                    />
                                                                    <div className={'list-header-members'}><div className={'list-header-text'} ><span>${item.profile.price}</span></div></div>
                                                                    <a>
                                                                        <div className={'user-name'}>{item.username}</div>
                                                                        <div className={'job-title'}>{jobTitle}</div><em
                                                                        className="ant-list-item-action-split"/>
                                                                    </a>
                                                                    {item.content}
                                                                </div>
                                                                <div style={{marginTop: '15%'}}>
                                                                    <Row>
                                                                        <Col span={16}>
                                                                            <div className={'skills-members'}>
                                                                            <div style={{textAlign: 'center'}}><span> UI & UX Designer </span></div>
                                                                            </div>
                                                                        </Col>
                                                                        <Col span={8}>
                                                                            <div className={'skills-members1'}>
                                                                            <div style={{textAlign: 'center'}}><span> NodeJS </span></div>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </div>
                                                            
                                                        </List.Item>
                                                        </Link>
                                                    </div>
                                                ))
                                            }}
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
