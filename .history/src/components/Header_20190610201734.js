import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Row, Col,Layout,Breadcrumb } from 'antd';
const { Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import Link from 'next/link'
import { Button } from 'antd';
import '../styles/base.css'
import { connect } from 'react-redux'


class Header extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    

    render () {
        let token = this.props.user.token

        let loginButton = (
            <Menu.Item key="alipay">
                <Link href="/login">
                    <a> <Icon type="mail" /> Login</a>
                </Link>
            </Menu.Item>
        )

        return (
            <div>

            </div>
        )
    }
}
function mapStateToProps (state) {
    return {
      user: state.user
    }
  }
  
  Header.propTypes = {
    user: PropTypes.instanceOf(Object).isRequired,
  }
  
  export default connect(mapStateToProps, {
    
  })(Header)
  