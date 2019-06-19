import React, { Component } from "react";
import DevelopersContainer from 'containers/DevelopersContainer'
import ConsultanceContainer from 'containers/ConsultanceContainer'

export default class Index extends Component {
    static getInitialProps(ctx) {
      return { url: ctx.url };
    }
    render() {
        let category = this.props.router.query.title;
        if(category == 'developers'){
            return <DevelopersContainer/>
        }
        if(category == 'consultance'){
            return <ConsultanceContainer/>
        }
        if(category == 'writing'){
            return <WritingContainer/>
        }
        if(category == 'merketing'){
            return <MarketingContainer/>
        }
        if(category == 'design'){
            return <DesignContainer/>
        }
        return '<div></div>'
    }
  }