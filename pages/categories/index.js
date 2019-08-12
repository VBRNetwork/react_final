import React, { Component } from 'react'
import SubCategoriesContainer from 'containers/SubCategoriesContainer'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Index extends Component {
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

    this.getSubcategories = this.getSubcategories.bind(this);
  }

  static getInitialProps (ctx) {
    return { url: ctx.url }
  }

  componentWillMount () {
    this.getSubcategories();
  }

  getSubcategories(){
    this.setState({
        jobs:[]
    })
  }

  render () {
    let category = this.props.router.query.category
    return <SubCategoriesContainer jobs={this.state.jobs} category={category} siderMenuItems={this.props.settings} />
  }
}


function mapStateToProps(state) {
  return {
      settings: state.settings
  }
}


Index.propTypes = {
  settings: PropTypes.instanceOf(Object).isRequired,
}
export {Index}

export default connect(mapStateToProps, {})(Index)
