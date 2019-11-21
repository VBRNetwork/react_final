import {Component} from "react";
import Router from "next/dist/client/router";
import React from "react";
import AuthService from './authService'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
var jwtDecode = require('jwt-decode');

export default function withAuth(AuthComponent) {

    class Authenticated extends Component {
        static async getInitialProps(ctx) {
            let userAgent;
            if (process.browser) {
                userAgent = navigator.userAgent
            } else {
                userAgent = ctx.req.headers['user-agent']
            }
            const pageProps = AuthComponent.getInitialProps && await AuthComponent.getInitialProps(ctx);
            return {...pageProps, userAgent}
        }

        constructor(props) {
            super(props);
            this.state = {
                isLoading: true
            }
        }

        componentDidMount() {
            if(!this.props.user.token){
                this.setState({isLoading: false})
                try {
                    // jwtDecode(this.props.user.token);
                } catch (e) {
                    console.log(e)
                }
            }
        }

        render() {
            return (
                <div>
                    {this.state.isLoading ? (<div>LOADING....</div>) : (<AuthComponent {...this.props}/>)}
                </div>
            )
        }
    }

    function mapStateToProps (state) {
        return {
            user: state.user
        }
    }

    Authenticated.propTypes = {
        user: PropTypes.instanceOf(Object).isRequired
    };

    return connect(mapStateToProps, {

    })(Authenticated)
}

