import React from 'react'
import withRedux from 'next-redux-wrapper'
import {withRouter} from 'next/router'
import {Provider} from 'react-redux'
import App from 'next/app'
import { ConnectedRouter } from 'connected-next-router'

import {faHome, faPlayCircle, faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import 'antd/dist/antd.css'
import 'styles/base.css'

import dynamic from 'next/dynamic'
const GoogleFontLoader = dynamic(import('react-google-font-loader'), {
    ssr: false,
})

import {makeStore} from 'store/createStore'
import {PersistGate} from 'redux-persist/integration/react'
import { Spin } from 'antd';
import Layout from 'components/Layout'
import {library} from '@fortawesome/fontawesome-svg-core'
import Head from 'next/head'
library.add(faHome, faPlayCircle, faEnvelopeOpen)


class MyApp extends App {
    render() {
        const {Component, pageProps, store, router} = this.props
        return (
             <Provider store={store}>
                 <Head>
                     <GoogleFontLoader
                         fonts={[
                             {font: 'Roboto', weights: [400, '400i'],
                             },{font: 'Roboto Mono', weights: [400, 700],
                             },
                         ]}
                         subsets={['cyrillic-ext', 'greek']}
                     />
                     <script src="/static/jquery-2.1.4.min.js"/>
                     <script src="/static/chat.min.js"/>
                     <script src="/static/form.js"/>
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
                 <PersistGate loading={<div className={'loading-start'}><Spin size="large" /></div>} persistor={store.__persistor}>
                    <ConnectedRouter>
                        <Layout>
                            <Component router={router} {...pageProps}/>
                        </Layout>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        )
    }
}

export default withRedux(makeStore,{debug:false})(
    withRouter(MyApp)
)
