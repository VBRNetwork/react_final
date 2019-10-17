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
import GoogleFontLoader from 'react-google-font-loader';
import {PersistGate} from 'redux-persist/integration/react'
import { Spin } from 'antd';
import 'antd/dist/antd.css'
import 'styles/base.scss'
import 'styles/base.css'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import { ConnectedRouter } from 'connected-next-router'
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
                    <script dangerouslySetInnerHTML = {{__html:`console.log('header script')`}}/>
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
            </Container>
        )
    }
}

export default withRedux(makeStore,{debug:true})(
    withRouter(MyApp)
)
