
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Icon, Label, Input } from 'semantic-ui-react'
import './style.scss'


export default class WindowName extends Component {
    constructor(props) {
        super(props);
        this._complateName = this.complateName.bind(this);
        this.state = {
            change: false
        };
    }
    complateName(e){
        if(e.target != this.refs.windowNameTextbox.inputRef){
            this.setState({change: false});
            document.removeEventListener('click', this._complateName);
        }
    }
    setName(e){
        if(e.keyCode == 13)
            document.dispatchEvent(new CustomEvent('click'));
        else
            this.props.setWindowName(e.target.value);
    }
    render(){
        return(
            <div className='upper nameContainer'>
                <label className={this.state.change ? '' : 'hidden'}>
                    <Input
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
                <Label
                    className={this.state.change ? 'hidden' : ''}
                    color="black"
                    onClick={
                        () => {
                            this.setState({change: true});
                            setTimeout(() => {
                                this.refs.windowNameTextbox.focus();
                            }, 10);
                            document.addEventListener('click', this._complateName);
                        }
                    }>
                    <Icon name='window maximize' />
                    {this.props.name}
                </Label>
            </div>
        )
    }
}
WindowName.propTypes = {
    name: PropTypes.string,
    setWindowName: PropTypes.func
}