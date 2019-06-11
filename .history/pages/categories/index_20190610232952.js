import { withRouter } from 'next/router';
import {  Layout } from 'antd';
const Page = withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
));

export default Page;