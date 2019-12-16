import React from 'react';
import { Tag } from 'antd';
import { array } from 'prop-types'

export default class EditableTagGroup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tags: [],
            inputVisible: false,
            inputValue: '',
        };
    }

    render () {
        const { tags } = this.props;
        let items = [];
        if(tags.length > 0){
            tags.forEach(function(tag,index){
                let value = tag
                if( Array.isArray(tag) ){
                    value = tag.join(' / ')
                }
                if( value instanceof Object ){
                    value = tag.name
                }
                items.push(<Tag closable={1} defaultValue={tag} onClose={this.props.handleClose} key={index}>{value}</Tag>)
            },this)
        }
        return (
            <div>
                {items}
            </div>
        );
    }
}

