import React, { PureComponent } from 'react'
import { Menu, Layout, Icon, Checkbox } from 'antd'
import { connect } from 'react-redux'
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout
import { useRouter } from 'next/router'
import '../../styles/members.css'


class FilterComponent extends PureComponent {

    constructor (props) {
        super(props)
        this.state = {
            category : []
        }
        this.getSubcategories = this.getSubcategories.bind(this)
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if(prevProps.reducerRouter.pathname !== this.props.reducerRouter.pathname){
            this.getSubcategories();
        }
    }

    componentDidMount () {
        this.getSubcategories();
    }

    getSubcategories(){
        if(this.props.menu && this.props.menu.mainMenu){
            let main_menu = this.props.menu.mainMenu;
            let categories = [];
            let currentCategory = null;
            Object.keys(main_menu).map((category,index) => {
                categories.push(main_menu[category])
            })
            let currentCategories = []
            this.props.reducerRouter.pathname.split('/').forEach(function(value, index, array){
                if(value.length > 0 && value !== 'categories'){
                    currentCategories.push(value);
                }
            })
            currentCategory = categories.filter(obj => {
                return obj.url === 'categories/' + currentCategories[0]
            })
            this.setState({
                category:currentCategory
            })
        }
    }

    render () {

        let subcategoriesElements = []
        if(this.state.category[0]){
            this.state.category[0].subcategories.forEach(function(value, index, array){
                subcategoriesElements.push(
                    <Menu.Item key={index}><Checkbox style={{ float: 'right' }}/>{value.title}</Menu.Item>);
            })

        }

        return (
            <div>
                <Menu
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['filter1','filter2']}
                    style={{ height: '100%' }}
                >
                    <SubMenu
                        key='filter1'
                        title={<div className={'filters-title'}>
                            <span>
                                Writing & Translation
                            </span></div>
                        }>
                        <Menu.Item className={'filters-item-text'} key='1'><Checkbox className={'check-filter'}
                                                     onChange={this.onChange}/>Translation </Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='2'><div className={'check-filter'}><Checkbox 
                                                     onChange={this.onChange}/></div>Copywriter</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='3'><Checkbox className={'check-filter'}
                                                     onChange={this.onChange}/>Articles & News</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='4'><Checkbox className={'check-filter'}
                                                     onChange={this.onChange}/>Web Content</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='5'><Checkbox className={'check-filter'}
                                                     onChange={this.onChange}/>Books</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key='filter2'
                        title={<div className={'filters-title'}>
                            <span>
                                Digital Marketing
                            </span> </div>}> 

                            <Menu.Item className={'filters-item-text'} key='1'><Checkbox className={'check-filter'}
                                                     onChange={this.onChange}/>Social Media </Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='2'><Checkbox className={'check-filter'}
                                                     onChange={this.onChange}/>Google Ads</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='3'><Checkbox className={'check-filter'}
                                                     onChange={this.onChange}/>Organic SEO</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='4'><Checkbox className={'check-filter'}
                                                     onChange={this.onChange}/>Influencers</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='5'><Checkbox className={'check-filter'}
                                                     onChange={this.onChange}/>Press Releases</Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key='filter3'
                        title={
                            <div className={'filters-title'}>
                            <span>
                                Business Consultancy
                            </span>
                            </div>
                        }>
                        <Menu.Item className={'filters-item-text'} key='17'><Checkbox className={'check-filter'}
                          onChange={this.onChange}/> &lt; $30/hour</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='18'><Checkbox className={'check-filter'}
                                  onChange={this.onChange}/>$30 -
                            $50/hour</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='19'><Checkbox className={'check-filter'}
                              onChange={this.onChange}/>$50 -
                            $100/hour</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='20'><Checkbox className={'check-filter'}
                          onChange={this.onChange}/>&gt; $100/hour</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key='filter4'
                        title={<div className={'filters-title'}>
                            <span>
                                Rating
                            </span></div>}>
                        <Menu.Item className={'filters-item-text'} key='21'>
                            <Checkbox className={'check-filter'} onChange={this.onChange}/>3 Stars</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='22'>
                            <Checkbox className={'check-filter'} onChange={this.onChange}/>4 Stars</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='23'>
                            <Checkbox className={'check-filter'} onChange={this.onChange}/>5 Stars</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='24'>
                            <Checkbox className={'check-filter'} onChange={this.onChange}/>Top Rated</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key='filter5'
                        title={<div className={'filters-title'}>
                            <span>
                                Design & Creative
                            </span></div>}>
                        <Menu.Item className={'filters-item-text'} key='25'>
                            <Checkbox className={'check-filter'} onChange={this.onChange}/>3 Stars</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='26'>
                            <Checkbox className={'check-filter'} onChange={this.onChange}/>4 Stars</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='27'>
                            <Checkbox className={'check-filter'} onChange={this.onChange}/>5 Stars</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='28'>
                            <Checkbox className={'check-filter'} onChange={this.onChange}/>Top Rated</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key='filter6'
                        title={<div className={'filters-title'}>
                            <span>
                                IT & Programming
                            </span></div>}>
                        <Menu.Item className={'filters-item-text'} key='28'>
                            <Checkbox className={'check-filter'} onChange={this.onChange}/>3 Stars</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='29'>
                            <Checkbox className={'check-filter'} onChange={this.onChange}/>4 Stars</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='30'>
                            <Checkbox className={'check-filter'} onChange={this.onChange}/>5 Stars</Menu.Item>
                        <Menu.Item className={'filters-item-text'} key='31'>
                            <Checkbox className={'check-filter'} onChange={this.onChange}/>Top Rated</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        menu: state.settings.main_menu,
        reducerRouter: state.router.location
    }
}

FilterComponent.propTypes = {}

export default connect(mapStateToProps, {})(FilterComponent)
