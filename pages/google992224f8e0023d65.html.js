import React from 'react'
export default class extends React.Component {
    static async getInitialProps ({ req, res }) {
        //res.writeHead(302, { Location: '/redirect' }) //sample how to response custom header
        res.write('google-site-verification: google992224f8e0023d65.html')
        res.end()
    }
}