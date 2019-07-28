import React, { Component } from 'react'
import SubCategoriesContainer from 'containers/SubCategoriesContainer'
export default class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
        jobs:[
            {name: 'Content Writing', img: '../static/images/writing_1.jpg', url: '#'},
            {name: 'Simple Content Translation', img: '../static/images/writing_2.jpg', url: '#'},
            {name: 'Complex Content Translation', img: '../static/images/writing_1.jpg', url: '#'},
            {name: 'Blog Posts', img: '../static/images/writing_1.jpg', url: '#'},
            {name: 'Search in all', img: '../static/images/writing_1.jpg', url: '#'}
        ]
    }
  }

  static getInitialProps (ctx) {
    return { url: ctx.url }
  }

  componentWillMount () {
    let category = this.props.router.query.category
    console.log(this.props.router)
  }

  getSubcategories(){
    this.setState({
        jobs:[]
    })
  }

  render () {
    return <SubCategoriesContainer jobs={this.state.jobs} siderMenuItems={[]} />
  }
}
