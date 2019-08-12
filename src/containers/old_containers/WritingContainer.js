import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {  Row, Card, List, Col , Layout} from 'antd'
const { Meta } = Card
const { Content, Sider } = Layout


const data = [
  {name: 'Content Writing', img: '../static/images/writing_1.jpg', url: '#'},
  {name: 'Simple Content Translation', img: '../static/images/writing_2.jpg', url: '#'},
  {name: 'Complex Content Translation', img: '../static/images/writing_1.jpg', url: '#'},
  {name: 'Blog Posts', img: '../static/images/writing_1.jpg', url: '#'},
  {name: 'Search in all', img: '../static/images/writing_1.jpg', url: '#'}
]


class WritingContainer extends Component {
  static async getInitialProps ({ store, query }) {
  }

  componentDidMount () {
  }

  render () {

    let categories_card = []
    data.map(function(category,index){
        categories_card.push(
          <Col span={8} >
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
                      dataSource={data}
                      renderItem={item => <List.Item><a style={{ color: '#37405E' }} href={item.url}>{item.name}</a></List.Item>}
                    />
                  </div>
                </Col>
              </Row>
            </Sider>
            <Content  style={{marginBottom:'10px', width: '100%'}}>
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

WritingContainer.propTypes = {}

export default connect(mapStateToProps, {
})(WritingContainer)
