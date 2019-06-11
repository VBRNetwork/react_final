import React, { Component } from "react";
import { withRouter } from 'next/router';
import {  Layout } from 'antd';
import DevelopersContainer from 'containers/DevelopersContainer'
import ConsultanceContainer from 'containers/ConsultanceContainer'
export default class Page extends Component {
    static getInitialProps(ctx) {
      return { url: ctx.url };
    }
  
    render() {
        let category = this.props.router.query.category;
        let subCategory = this.props.router.query.subcategory;
        console.log(subCategory);
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
        
    }
  }



