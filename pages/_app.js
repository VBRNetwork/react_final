import React from 'react'
import withRedux from 'next-redux-wrapper'
import {withRouter} from 'next/router'
import {Provider} from 'react-redux'
import App from 'next/app'
import Head from 'next/head'
import { Spin } from 'antd';
import {PersistGate} from 'redux-persist/integration/react'
import { withNamespaces} from 'react-i18next';
import { ConnectedRouter } from 'connected-next-router'


import {faHome, faPlayCircle, faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import {library} from '@fortawesome/fontawesome-svg-core'
library.add(faHome, faPlayCircle, faEnvelopeOpen)

import dynamic from 'next/dynamic'
const GoogleFontLoader = dynamic(import('react-google-font-loader'), {ssr: false})

import {makeStore} from 'store/createStore'
import Layout from 'components/Layout'
import vbrincapi from 'libs/vbrinc-api'
import '../src/i18n';
import 'antd/dist/antd.css';
import '../src/i18n';


class VBRApp extends App {
    state = {
        gateLifted: false,
        current_language:'en',
    }
    onBeforeLift = () => {
        const {i18n} = this.props;
        vbrincapi.getIntlang().then((e) => {
            if( e && e.country_code){
                let country_code = e.country_code.toLowerCase();
                i18n.changeLanguage(country_code)
                this.setState({current_language:country_code})
            }
        })
        setTimeout(() => {
            this.setState({ gateLifted: true})
        }, 600);
    }
    render() {
        const {Component, pageProps, store, router} = this.props
        return (
            <Provider store={store}>
                 <Head>
                     <GoogleFontLoader
                         fonts={[
                             {font: 'Roboto', weights: [400, '400i']},
                             {font: 'Roboto Mono', weights: [400, 700]}
                         ]}
                         subsets={['cyrillic-ext', 'greek']}
                     />
                     <script async src="https://www.googletagmanager.com/gtag/js?id=AW-699838440"/>
                     <script src="/static/chat.min.js"/>
                     <script src="/static/form.js"/>
                     <script src="/static/tagm.js"/>
                     <script dangerouslySetInnerHTML={{
                         __html:`
                            $( document ).ready(function() {
                                 new ZammadChat({
                                    background: '#4241b8',
                                    fontSize: '12px', 
                                    chatId: 1,
                                    target: $(".chat-support"),
                                    host:'wss://support.veelancing.io/ws',
                                    show: true,
                                });
                            });`}}
                     />
                     <link rel="shortcut icon" href="/static/favicon.ico"/>
                 </Head>
                 <PersistGate persistor={store.__persistor} onBeforeLift={this.onBeforeLift}>
                     { this.state.gateLifted ?
                         <ConnectedRouter>
                            <Layout>
                                <Component router={router} {...pageProps}/>
                            </Layout>
                        </ConnectedRouter>
                     : <div className={'loading-start'}><Spin size="large" /></div>}
                </PersistGate>
            </Provider>
        )
    }
}

export default withRedux(makeStore,{debug:false})(withNamespaces('translation')(withRouter(VBRApp)))
