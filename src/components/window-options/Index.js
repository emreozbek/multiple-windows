
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, Label, Input } from 'semantic-ui-react'
import WindowName from '../window-name'
import WindowMove from '../window-move'
import './style.scss'


export default class Options extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="options">
                <WindowName />
                <Button.Group className="upper" size="mini" floated="right">
                    <Button  basic size='mini' color='grey'>{this.props.options.size.width + " x " + this.props.options.size.height}</Button>
                    <Button  basic size='mini' color='grey' icon='refresh' onClick={() => {this.props.actions.reloadPage(true)}}></Button>
                    <Button  basic size='mini' basic color='grey' icon='close' onClick={() => {this.props.actions.removeWindow()}}></Button>
                </Button.Group>
                <WindowMove
                    canvas      = {this.props.canvas}
                    startDrag   = {this.props.actions.startDrag}
                    stopDrag    = {this.props.actions.stopDrag}
                    setPosition = {this.props.actions.setPosition}
                />
            </div>
        )
    }
}
Options.propTypes = {
    options : PropTypes.object,
    actions : PropTypes.object,
    canvas  : PropTypes.object
}