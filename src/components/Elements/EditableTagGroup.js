import React from 'react';
import ReactDOM from 'react-dom';
import { Tag, Input, Tooltip, Icon } from 'antd';

export default class EditableTagGroup extends React.Component {
    state = {
        tags: [],
        inputVisible: false,
        inputValue: '',
    };

    render () {
        const { tags } = this.props;
        let items = [];
        if(tags){
            tags.forEach(function(value,index){
                items.push(<Tag>{value}</Tag>)
            })
        }

        return (
            <div>
                {items}
            </div>
        );
    }
}

