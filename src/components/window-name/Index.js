
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Icon, Label, Input } from 'semantic-ui-react'
import './style.scss'


export default class WindowName extends Component {
    constructor(props) {
        super(props);
        this.state = {setName: false};
        this._completeName = this.completeName.bind(this);
    }
    setName(){
        this.setState({setName:true});
        document.addEventListener('click', this._completeName)
    }
    completeName(e){
        this.setState({setName:false});
        document.removeEventListener('click', this._completeName)
    }
    render(){
        return(
            <span>
                <Label className={'upper noBackground ' + (this.state.setName ? 'hidden' : '')} onClick={this.setName.bind(this)}>
                    <Icon name='window maximize' /> windowName
                </Label>
                <label className={'upper ' + (this.state.setName ? '' : 'hidden')}>
                    <Input ref="windowNameTextbox" placeholder='windowName' size="mini" icon='window maximize' iconPosition='left' inverted color="black" focus={this.state.setName} />
                </label>
            </span>
        )
    }
}