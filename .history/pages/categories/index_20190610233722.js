import { withRouter } from 'next/router';
import {  Layout } from 'antd';
import DevelopersContainer from 'containers/DevelopersContainer'
export default DevelopersContainer



let category = props.router.query.category;
if(category == 'developers'){
    <DevelopersContainer/>
}


