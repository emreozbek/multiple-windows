import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Menu, Input} from 'semantic-ui-react'
import './style.scss'

export default class HeaderSearch extends Component {
    constructor(props) {
        super(props);
        this.url = this.props.url;
    }
    onChange(e){
        if(e.charCode == 13){
            e.currentTarget.blur();
            this.props.setURLALLWindows(e.target.value);
            this.props.setCanvasURL(e.target.value);
        }
    }
    render() {
        return (
            <Menu.Item>
                <Input size="mini"
                       className='icon searchInput'
                       icon='search'
                       placeholder='Search...'
                       defaultValue={this.url}
                       transparent
                       onKeyPress={this.onChange.bind(this)}
                />
            </Menu.Item>
        )
    }
}
HeaderSearch.propTypes = {
    url : PropTypes.string,
    setURLALLWindows : PropTypes.func,
    setCanvasURL : PropTypes.func
}