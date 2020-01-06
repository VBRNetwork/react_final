import React from 'react'
import { number, string, func, oneOfType, bool, oneOf } from 'prop-types'
import { Popover } from 'antd'
import throttle from 'lodash.throttle'

class ResponsiveAntMenu extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            viewportWidth: 0,
            setViewportWidth: 0,
            isMenuShown: false,
            mobileBreakPoint: 575,
        }

        this.setViewportWidth = this.setViewportWidth.bind(this)
        this.setIsMenuShown = this.setIsMenuShown.bind(this)
        this.isMobile = this.isMobile.bind(this)
        this.onLinkClick = this.onLinkClick.bind(this)
    }

    isMobile () {
        return this.state.viewportWidth < this.state.mobileBreakPoint
    }

    setViewportWidth (width) {
        this.setState({
            viewportWidth: width
        })
    }

    setIsMenuShown (width) {
        this.setState({
            isMenuShown: width
        })
    }

    onLinkClick(){
        if(this.isMobile()){
            this.setState({ isMenuShown: false })
        }
    }

    componentDidMount () {
        this.useEffect()
    }

    useEffect = () => {
        this.setViewportWidth(window.innerWidth)
        const throttledSetViewPortWidth = throttle(() => this.setViewportWidth(window.innerWidth), 250)
        window.addEventListener('resize', throttledSetViewPortWidth)
        return () => window.removeEventListener('resize', throttledSetViewPortWidth)
    }

    render () {
        const {
            children: MenuMarkup, activeLinkKey, menuClassName: className,
            theme, mode, mobileMenuContent, placement, popoverTrigger,
        } = this.props

        const MenuMarkupConfig = {
            theme: !theme ? 'light' : typeof theme === 'function' ? theme(this.isMobile()) : theme,
            mode: !mode ? 'horizontal' : typeof mode === 'function' ? mode(this.isMobile()) : mode,
            selectedKeys: [`${activeLinkKey}`],
            className,
        }

        const menuToRender = React.cloneElement(MenuMarkup(this.onLinkClick), MenuMarkupConfig)

        return this.isMobile() ?
            <Popover
                content={menuToRender}
                trigger={popoverTrigger}
                placement={placement}
                visible={this.state.isMenuShown}
                onVisibleChange={this.setIsMenuShown}
            >
                {mobileMenuContent(this.state.isMenuShown)}
            </Popover> : menuToRender
    }
}

ResponsiveAntMenu.propTypes = {
    children: func.isRequired,
    mobileBreakPoint: number,
    closeOnMobileLinkClick: bool,
    throttleViewportChange: number,
    activeLinkKey: string,
    placement: string,
    theme: func,
    mode: oneOfType([
        func,
        string
    ]),
    mobileMenuContent: func.isRequired,
    menuClassName: string,
    popoverTrigger: oneOf(['click', 'hover', 'focus'])
}

ResponsiveAntMenu.defaultProps = {
    mobileBreakPoint: 575,
    throttleViewportChange: 250,
    placement: 'bottom',
    closeOnClick: true,
    popoverTrigger: 'click',
}

export default ResponsiveAntMenu
