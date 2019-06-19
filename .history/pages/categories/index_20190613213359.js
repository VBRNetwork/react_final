import React, { Component } from "react";
import DevelopersContainer from 'containers/DevelopersContainer'
import ConsultanceContainer from 'containers/ConsultanceContainer'
import WritingContainer from 'containers/WritingContainer'
import MarketingContainer from 'containers/MarketingContainer'
import DesignContainer from 'containers/DesignContainer'

export default class Index extends Component {
    static getInitialProps(ctx) {
        return { url: ctx.url };
    }

    componentWillMount(){
        let category = this.props.router.query.title;
        console.log(category)
    }

    render() {
        let category = this.props.router.query.title;
        if(category == 'developers'){
            return <DevelopersContainer/>
        }
        if(category == 'business-consultancy'){
            return <ConsultanceContainer/>
        }
        if(category == 'writing'){
            return <WritingContainer/>
        }
        if(category == 'marketing-and-seo'){
            return <MarketingContainer/>
        }
        if(category == 'design'){
            return <DesignContainer/>
        }
        return '<div></div>'
    }
  }