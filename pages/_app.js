import React from 'react'
import withRedux from 'next-redux-wrapper'
import {withRouter} from 'next/router'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import {makeStore} from 'store/createStore'
import {faHome, faPlayCircle, faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import Head from 'next/head'
import Layout from 'components/Layout'
const GoogleFontLoader = dynamic(import('react-google-font-loader'), {
    ssr: false,
})
import {PersistGate} from 'redux-persist/integration/react'
import { Spin } from 'antd';
import 'antd/dist/antd.css'
import 'styles/base.scss'
import 'styles/base.css'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import { ConnectedRouter } from 'connected-next-router'
import dynamic from 'next/dynamic'


library.add(faHome, faPlayCircle, faEnvelopeOpen)

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {

        return {
            pageProps: Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {}
        }
    }


    get helmetBodyAttrComponents() {
        return this.props.helmet.bodyAttributes.toComponent()
    }

    get helmetHeadComponents() {
        return Object.keys(this.props.helmet)
        .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
        .map(el => this.props.helmet[el].toComponent())
    }


    render() {
        const {Component, pageProps, store, router} = this.props
        return (
            <Container>
                <Head>
                    <GoogleFontLoader
                        fonts={[
                            {
                                font: 'Roboto',
                                weights: [400, '400i'],
                            },
                            {
                                font: 'Roboto Mono',
                                weights: [400, 700],
                            },
                        ]}
                        subsets={['cyrillic-ext', 'greek']}
                    />
                    <script src="../static/jquery-2.1.4.min.js"/>
                    <script src="../static/chat.min.js"/>
                    <script src="../static/form.js"/>
                    <script dangerouslySetInnerHTML = {{__html:`
                    $( document ).ready(function() {
                         new ZammadChat({
                            background: '#4241b8',
                            fontSize: '12px', 
                            chatId: 1,
                            target: $(".chat-support"),
                            host:'wss://support.veelancing.io/ws',
                            show: true,
                        });
                    });`}}/>



                </Head>

                <Provider store={store}>
                    <PersistGate loading={<div style={{
                        position: 'absolute',
                        width: '150px',
                        height: '100',
                        zIndex: '15',
                        top: '50%',
                        left: '50%',
                        }}><Spin size="large" /></div>} persistor={store.__persistor}>
                        <ConnectedRouter>
                            <Layout>
                                <Component router={router} {...pageProps} />
                            </Layout>
                        </ConnectedRouter>
                    </PersistGate>
                </Provider>
                <div className="chat-support"/>
            </Container>
        )
    }
}

export default withRedux(makeStore,{debug:true})(
    withRouter(MyApp)
)
