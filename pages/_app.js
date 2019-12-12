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

import {makeStore} from 'store/createStore'
import {PersistGate} from 'redux-persist/integration/react'
import { Spin } from 'antd';
import Layout from 'components/Layout'
import {library} from '@fortawesome/fontawesome-svg-core'
library.add(faHome, faPlayCircle, faEnvelopeOpen)


class MyApp extends App {
    render() {
        const {Component, pageProps, store, router} = this.props
        return (
                 <Provider store={store}>
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
