import { withRouter } from 'next/router';
import {  Layout } from 'antd';
import DevelopersContainer from 'containers/DevelopersContainer'
export default DevelopersContainer

export default class Page extends Component {
    static getInitialProps(ctx) {
      return { url: ctx.url };
    }
  
    render() {
      const { url: { query: { title } } } = this.props
        let category = props.router.query.category;
        if(category == 'developers'){
            return <DevelopersContainer/>
        }
    }
  }



