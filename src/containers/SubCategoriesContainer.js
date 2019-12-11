import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Row, Card, List, Col, Layout, Breadcrumb, Icon, Menu } from 'antd'
const { Meta } = Card
const { Content, Sider } = Layout
import Link from 'next/link'
import {Helmet} from "react-helmet";

class SubCategoriesContainer extends Component {

  constructor(props){
    super(props)
  }
  componentDidMount () {
  }

  render () {
    let categories_card = []
    let menuItems = [];
    let subcategories = []
    let currentCategoryName = ''

    if(this.props.siderMenuItems && this.props.siderMenuItems.main_menu && this.props.siderMenuItems.main_menu.mainMenu){
      let main_menu  = this.props.siderMenuItems.main_menu.mainMenu
        Object.keys(main_menu).map((category,index) => {
            subcategories.push(main_menu[category])
            let categoryItem = main_menu[category];
            let subcategoryItems = main_menu[category].subcategories;

            menuItems.push(
                <div><h4>{categoryItem.name}</h4></div>
            )

            subcategoryItems.forEach(function(subcategoryItem,index) {
                let localSubcategories = subcategoryItem.url.split("/")
                localSubcategories = localSubcategories.filter(item => item !== 'categories')
                menuItems.push(
                    <div> <Link as={'/' + subcategoryItem.url}
                                     href={'/categories/?category=' + localSubcategories[0] + '&subcategory=' + localSubcategories[1]}>
                        <a><h5> <Icon style={{fontSize: 17}} type={main_menu[category].icon}/>  {subcategoryItem.title}</h5></a>
                    </Link>
                    </div>
                )
                categories_card.push(
                    <Col xs={{span:22, offset:1}} sm={4} md={6} lg={8} xl={{span:6}} key={categoryItem.name + index} >
                        <Card
                            hoverable
                            style={{ margin:'10px'}}
                            bodyStyle={{padding:'10px'}}
                            cover={<img alt={subcategoryItem.title} src={subcategoryItem.img}  />}>
                            <Link as={'/'+subcategoryItem.url}  href={'/categories/?category=' + localSubcategories[0] + '&subcategory=' + localSubcategories[1]}>
                                <a><h5>{subcategoryItem.title}</h5></a>
                            </Link>
                        </Card>
                    </Col>
                )
            })
        })

      }

    return (
      <Content>
        <Helmet>
            <meta charSet="utf-8" />
            <title>VBR - {currentCategoryName}</title>
        </Helmet>
        <div>
            <Row>

            <Col xs={{span:24, offset:0}} sm={4} md={6} lg={8} xl={{span:18,offset:3}}>
          <Layout  >
            <Sider style={{ backgroundColor: '#FFF', padding: '1%' }} width={300}>

                  <div className='sider-menu' style={{ backgroundColor: '#FFF', marginLeft: '5%' }}>
                    
                    <strong><h3 style={{ margin: '16px 0'}}>{currentCategoryName}</h3></strong>
                  </div>
                  <ul className='sub-menu'>
                    {menuItems}
                  </ul>

            </Sider>
            <Content  style={{marginBottom:'10px'}}>
              <Row gutter={40}>
                {categories_card}
              </Row>
            </Content>
          </Layout>
            </Col>
        </Row>
        </div>
      </Content>
    )
  }
}

function mapStateToProps (state) {
  return {

  }
}

SubCategoriesContainer.propTypes = {
}

export default connect(mapStateToProps, {
})(SubCategoriesContainer)
