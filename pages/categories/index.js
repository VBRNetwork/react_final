import React, { Component } from 'react'
import SubCategoriesContainer from 'containers/SubCategoriesContainer'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'


const Index = (props) => {
  const router = useRouter()
  const { category } = router.query
  return <SubCategoriesContainer category={category} siderMenuItems={props.settings} />
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
