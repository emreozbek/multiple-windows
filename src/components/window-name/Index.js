
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Icon, Label, Input } from 'semantic-ui-react'
import './style.scss'


export default class WindowName extends Component {
    constructor(props) {
        super(props);
    }
    setName(e){
        if(e.keyCode == 13)
            document.dispatchEvent(new CustomEvent('click'));
        else
            this.props.setWindowName(e.target.value);
    }
    render(){
        return(
            <label className='upper'>
                <Input
                    transparent
                    inverted
                    ref="windowNameTextbox"
                    size="mini"
                    icon='window maximize'
                    iconPosition='left'
                    className="windowNameInput"
                    defaultValue={this.props.name}
                    onKeyUp={this.setName.bind(this)}
                />
            </label>
        )
    }
}
WindowName.propTypes = {
    name: PropTypes.string,
    setWindowName: PropTypes.func
}