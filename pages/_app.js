import withRedux from 'next-redux-wrapper'
import { withRouter } from 'next/router'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import Layout from 'components/Layout'
import createStore from 'store/createStore'
import GlobalStyle from 'libs/globalStyles'
import fetch from 'isomorphic-unfetch'
import redirectTo from 'libs/redirectTo.js'
import cookies from 'next-cookies'
import API_URL from 'libs/globalApiUrl.js'
import { persistStore } from 'redux-persist'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    // return {
    //   pageProps: Component.getInitialProps
    //     ? await Component.getInitialProps(ctx)
    //     : {}
    // }

    let pageProps = {}
    const c = cookies(ctx)

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // if the authtoken is not found
    if (typeof c.token === 'undefined') {

    }
    // if we do have an auth token to check
    else {
      var response = await fetch(API_URL + '/v1/token/verify/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: c.token })
      })
        .then(r => r.json())
        .then(resp => {
          if (ctx.pathname == '/') {
          // if auth check was successful, send to dashboard
            if (resp.length == 0) redirectTo('/dashboard', { res: ctx.res, status: 301 })
            else {
            // setting the cookie to expire way back when removes it
              document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
              document.cookie = 'refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
              redirectTo('/login', { res: ctx.res, status: 301 })
            }
          } else if (ctx.pathname == '/login') {
          // shouldn't show the login page is we are already logged in
            if (resp.length == 0) { redirectTo('/dashboard', { res: ctx.res, status: 301 }) }

            // if it wasn't successful, stay where we are
            else return { ...pageProps, ...{ query: ctx.query, token: c.token } }
          }

          // any other page that requires a login
          else {
          // if auth check was successful, stay where we are
            if (resp.length == 0) return { ...pageProps, ...{ query: ctx.query, token: c.token } }

            // if it wasn't successful, clear the authtoken since it must be expired or invalid and redirect to login
            else {
              document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
              document.cookie = 'refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
              redirectTo('/login', { res: ctx.res, status: 301 })
            }
          }
        })
        .catch((err) => { console.log(err); return { pageProps } })
    }

    if (response !== null) { return { response } } else return { pageProps }
  }
  render () {
    const { Component, pageProps, store, router } = this.props
    let persistor = persistStore(store)

    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component router={router} {...pageProps} />
          </Layout>
        </Provider>
        <GlobalStyle />
      </Container>
    )
  }
}

export default withRedux(createStore)(
  withRouter(MyApp)
)
