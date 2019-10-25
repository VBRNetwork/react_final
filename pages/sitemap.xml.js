import React from 'react'
export default class extends React.Component {
    static async getInitialProps ({ req, res }) {
        //res.writeHead(302, { Location: '/redirect' }) //sample how to response custom header
        res.write('<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
            '   <url>\n' +
            '      <loc>http://marketplace.vbrinc.ro/</loc>\n' +
            '      <lastmod>2019-10-25</lastmod>\n' +
            '      <changefreq>weekly</changefreq>\n' +
            '      <priority>0.8</priority>\n' +
            '   </url>\n' +
            '</urlset> ')
        res.end()
    }
}