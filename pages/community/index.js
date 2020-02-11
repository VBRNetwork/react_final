import React, { Component } from 'react'
import PagesContainer from 'containers/PagesContainer'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import vbrincapi from '../../src/libs/vbrinc-api'


class CommunityIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentWillMount () {
        let category = this.props.router.query.category
        let article_url = this.props.router.query.article
        this.getArticleDetails(article_url);
    }

    getArticleDetails(article_url){
        if(article_url){
            vbrincapi.getPageDetails(article_url).then((res) => {
                this.setState({
                    article:res
                })
            }).catch( (error) => {
                console.log(error)
            });
        }
    }

    render () {
        console.log(this.state.article)
        return <PagesContainer pageContent={this.state.article }  />
    }
}


function mapStateToProps (state) {
    return {

    }
}

CommunityIndex.propTypes = {
}

export default connect(mapStateToProps, {})(CommunityIndex)