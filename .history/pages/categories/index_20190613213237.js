import React, { Component } from "react";
import DevelopersContainer from 'containers/DevelopersContainer'
import ConsultanceContainer from 'containers/ConsultanceContainer'
import WritingContainer from 'containers/WritingContainer'
import MarketingContainer from 'containers/MarketingContainer'
import DesignContainer from 'containers/DesignContainer'

export default class Index extends Component {
    static getInitialProps(ctx) {
        const { id } = context.query;
        let category = this.props.router.query.title;
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const show = await res.json();
        console.log(`Fetched show: ${show.name}`);

      return { url: ctx.url };
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