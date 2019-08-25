import withRedux from 'next-redux-wrapper'
import {withRouter} from 'next/router'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import {makeStore} from 'store/createStore'
import fetch from 'isomorphic-unfetch'
import redirectTo from 'libs/redirectTo.js'
import cookies from 'next-cookies'
import API_URL from 'libs/globalApiUrl.js'
import {persistStore} from 'redux-persist'
import {faHome, faPlayCircle, faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import Head from 'next/head'
import Layout from 'components/Layout'
import GoogleFontLoader from 'react-google-font-loader';
import {PersistGate} from 'redux-persist/integration/react'

import 'antd/dist/antd.css'
import 'styles/base.scss'
import 'styles/base.css'

import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'

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
                <Head/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
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
                        {
                            font: 'Merriweather',
                            weights: [400, 700],
                        },
                    ]}
                    subsets={['cyrillic-ext', 'greek']}
                />
                <Provider store={store}>
                    <PersistGate loading={null} persistor={store.__persistor}>
                        <Layout>
                            <Component router={router} {...pageProps} />
                        </Layout>
                    </PersistGate>
                </Provider>
            </Container>
        )
    }
}

export default withRedux(makeStore,{debug:true})(
    withRouter(MyApp)
)
