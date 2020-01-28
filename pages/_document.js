import Document, { Head,Html, Main, NextScript } from 'next/document'
import React from 'react'
import dynamic from 'next/dynamic'
const GoogleFontLoader = dynamic(import('react-google-font-loader'),{ssr: false})

class VBRDocument extends Document {
    state = {language:'en'}
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App => App,
                enhanceComponent: Component => Component,
            })
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }

    render () {
        return (
            <Html lang={this.state.language}>
                <Head>
                    <link rel="shortcut icon" href="/static/favicon.ico"/>
                    <GoogleFontLoader
                        fonts={[
                            { font: 'Roboto', weights: [400, '400i'] },
                            { font: 'Roboto Mono', weights: [400, 700] }
                        ]}
                        subsets={['cyrillic-ext', 'greek']}
                    />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
                    <script src="/static/chat.min.js"/>
                    <script src="/static/form.js"/>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            $( document ).ready(function() {
                                 new ZammadChat({
                                    background: '#4241b8',
                                    fontSize: '12px', 
                                    chatId: 1,
                                    target: $(".chat-support"),
                                    host:'wss://support.veelancing.io/ws',
                                    show: true,
                                });
                            });`
                        }}
                    />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default VBRDocument
