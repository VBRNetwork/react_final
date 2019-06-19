import React, { Component } from "react";
import { withRouter } from 'next/router';
import {  Layout } from 'antd';


// import DevelopersContainer from 'containers/DevelopersContainer'
// import ConsultanceContainer from 'containers/ConsultanceContainer'
// export default class Page extends Component {
//     static getInitialProps(ctx) {
//       return { url: ctx.url };
//     }
  
//     render() {
//         let category = this.props.router.query.category;
//         let subCategory = this.props.router.query.subcategory;
//         console.log(this.props.router);
//         if(category == 'developers'){
//             return <DevelopersContainer/>
//         }
//         if(category == 'consultance'){
//             return <ConsultanceContainer/>
//         }
//         if(category == 'writing'){
//             return <WritingContainer/>
//         }
//         if(category == 'merketing'){
//             return <MarketingContainer/>
//         }
//         if(category == 'design'){
//             return <DesignContainer/>
//         }
        
//     }
//   }


// 

export default class Page extends Component {
    static getInitialProps(ctx) {
      return { url: ctx.url };
    }
  
    render() {
        let category = this.props.router.query.category;
        let subCategory = this.props.router.query.subcategory;
        console.log(this.props.router);
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



//   import {Layout} from 'antd';

  // import Link from 'next/link';
  // import fetch from 'isomorphic-unfetch';
  
// const Index = props => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

// export default Index;