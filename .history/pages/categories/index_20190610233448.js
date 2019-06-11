import { withRouter } from 'next/router';
import {  Layout } from 'antd';
import DevelopersContainer from 'containers/DevelopersContainer'
export default DevelopersContainer


const Page = withRouter(props => () => {
    let category = props.router.query.category;
    if(category == 'developers'){
        return <DevelopersContainer/>
    }
});

export default Page;