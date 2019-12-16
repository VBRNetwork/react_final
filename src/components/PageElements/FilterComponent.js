import React, { PureComponent } from 'react'
import { Menu, Layout, Icon, Checkbox } from 'antd'
import { connect } from 'react-redux'
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout
import { useRouter } from 'next/router'


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
                    style={{ height: '100%' }}>

                    <SubMenu
                        key='filter1'
                        title={
                            <span>
                              <Icon style={{ fontSize: '20px' }} type='appstore'/>
                                Categories
                            </span>
                        }>

                        <Menu.Item key='1'><Checkbox style={{ float: 'right' }}
                                                     onChange={this.onChange}/>Writing </Menu.Item>
                        <Menu.Item key='2'><Checkbox style={{ float: 'right' }}
                                                     onChange={this.onChange}/>Marketing</Menu.Item>
                        <Menu.Item key='3'><Checkbox style={{ float: 'right' }}
                                                     onChange={this.onChange}/>Design</Menu.Item>
                        <Menu.Item key='4'><Checkbox style={{ float: 'right' }}
                                                     onChange={this.onChange}/>Consultancy</Menu.Item>
                        <Menu.Item key='5'><Checkbox style={{ float: 'right' }}
                                                     onChange={this.onChange}/>Developers</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key='filter2'
                        title={
                            <span>
                              <Icon style={{ fontSize: '20px' }} type='cluster'/>
                                Subcategories
                            </span>}>

                        {subcategoriesElements}
                    </SubMenu>

                    <SubMenu
                        key='filter3'
                        title={
                            <span>
                                <Icon style={{ fontSize: '20px' }} type='euro'/>
                                Pricing
                            </span>
                        }>
                        <Menu.Item key='17'><Checkbox style={{ float: 'right' }}
                          onChange={this.onChange}/> &lt; $30/hour</Menu.Item>
                        <Menu.Item key='18'><Checkbox style={{ float: 'right' }}
                                  onChange={this.onChange}/>$30 -
                            $50/hour</Menu.Item>
                        <Menu.Item key='19'><Checkbox style={{ float: 'right' }}
                              onChange={this.onChange}/>$50 -
                            $100/hour</Menu.Item>
                        <Menu.Item key='20'><Checkbox style={{ float: 'right' }}
                          onChange={this.onChange}/>&gt; $100/hour</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key='filter4'
                        title={
                            <span>
                              <Icon style={{ fontSize: '20px' }} type='star'/>
                                Rating
                            </span>}>
                        <Menu.Item key='21'>
                            <Checkbox style={{ float: 'right' }} onChange={this.onChange}/>3 Stars</Menu.Item>
                        <Menu.Item key='22'>
                            <Checkbox style={{ float: 'right' }} onChange={this.onChange}/>4 Stars</Menu.Item>
                        <Menu.Item key='23'>
                            <Checkbox style={{ float: 'right' }} onChange={this.onChange}/>5 Stars</Menu.Item>
                        <Menu.Item key='24'>
                            <Checkbox style={{ float: 'right' }} onChange={this.onChange}/>Top Rated</Menu.Item>
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
