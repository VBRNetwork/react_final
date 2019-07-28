import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {  Row, Card, List, Col , Layout} from 'antd'
const { Meta } = Card
const { Content, Sider } = Layout

class SubCategoriesContainer extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount () {
  }

  render () {
    let categories_card = []
    let jobs = this.props.jobs
    jobs.map(function(category,index){
        categories_card.push(
          <Col key={index} span={8} >
            <Card
              hoverable
              style={{ marginTop: '5%', marginLeft: '5%', width: '90%', height: 'auto' }}
              cover={<img alt='example' src={category.img}  />}>
              <Meta title={category.name} />
            </Card>
          </Col>
        )
    })

    return (
      <Content>
        <div>
          <Layout  >
            <Sider style={{ backgroundColor: '#FFF', padding: '1%' }}>
              <Row>
                <Col span={24}>
                  <div style={{ backgroundColor: '#FFF', marginLeft: '5%' }}><h3 style={{ margin: '16px 0' }}>Writing & Translation</h3></div>
                  <div >
                    <List
                      style={{ backgroundColor: '#FFF' }}
                      size='small'
                      dataSource={jobs}
                      renderItem={item => <List.Item><a style={{ color: '#37405E' }} href={item.url}>{item.name}</a></List.Item>}
                    />
                  </div>
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
