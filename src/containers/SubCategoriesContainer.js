import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {  Row, Card, List, Col , Layout} from 'antd'
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
      })
      let currentCategory = subcategories.filter(obj => {
        return obj.url === 'categories/' + this.props.category
      })
      let currentSubcategories =  currentCategory[0].subcategories
      let subcategories_url = []
      if(currentSubcategories){
        currentSubcategories.map(function(subcategory,index){
          menuItems.push(<li key={index}> <Link href={'/'+subcategory.url}><a>{subcategory.title}</a></Link></li>)

          subcategories_url = subcategory.url.split('/');
          let final_url = '/categories/?category='+subcategories_url[1]+'&subcategory='+subcategories_url[2]

          console.log(final_url)

          categories_card.push(
            <Col key={'subcat-'+ index} span={8} >
              <Card
                hoverable
                style={{ marginTop: '5%', marginLeft: '5%', width: '90%', height: 'auto' }}
                cover={<img alt={subcategory.title} src={''+subcategory.img}  />}>
                <Link as={'/'+subcategory.url} href={final_url}><a><Meta title={subcategory.title} /></a></Link>
              </Card>
            </Col>
          )
          
        })
      }

      currentCategoryName = currentCategory[0].name
    }

    
    return (
      <Content>
        <Helmet>
            <meta charSet="utf-8" />
            <title>VBR - {currentCategoryName}</title>
        </Helmet>
        <div>
          <Layout  >
            <Sider style={{ backgroundColor: '#FFF', padding: '1%' }}>
              <Row>
                <Col span={24}>
                  <div style={{ backgroundColor: '#FFF', marginLeft: '5%' }}><h3 style={{ margin: '16px 0' }}>{currentCategoryName}</h3></div>
                  <ul >
                    {menuItems}
                  </ul>
                </Col>
              </Row>
            </Sider>
            <Content  style={{marginBottom:'10px'}}>
              <Row gutter={40}>
                {categories_card}
              </Row>
            </Content>
          </Layout>
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
