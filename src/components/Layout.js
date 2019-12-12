import React, { Component } from 'react'
import FooterNew from '../components/FooterNew'
import HeaderNew from '../components/HeaderNew'
import { connect, Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'next/dist/client/router'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const GoogleFontLoader = dynamic(import('react-google-font-loader'), {
    ssr: false,
})
class Layout extends Component {

    constructor (props) {
        super(props)
        this.state = {
            showHeader:false
        }

        this.showHeader = this.showHeader.bind(this)
    }

    componentDidMount () {
        this.showHeader()
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if (this.props.router.pathname !== prevProps.router.pathname) {
           this.showHeader()
        }
    }

    showHeader(){
        if(this.props.router.pathname === '/' || this.props.router.pathname === '/ico'){
            this.setState({
                showHeader:false
            });
        }else{
            this.setState({
                showHeader:true
            });
        }
    }

    render () {
        return (
            <div>
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
                <div className='layout'>
                    {this.state.showHeader && <HeaderNew/>}{this.props.children}<FooterNew/>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        router_state: state.router
    }
}

Layout.propTypes = {
    router_state: PropTypes.instanceOf(Object).isRequired,
}
export default connect(mapStateToProps, {})(withRouter(Layout))
