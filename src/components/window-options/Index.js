
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button, Input } from 'semantic-ui-react'
import WindowName from '../window-name'
import WindowMove from '../window-move'
import SizingTextbox from '../sizing-textbox'
import './style.scss'


export default class Options extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="options">
                <WindowName
                    name={this.props.options.name}
                    setWindowName={this.props.actions.setWindowName}
                />
                <Button.Group className="upper" size="mini" floated="right">
                    <Button basic size='mini' color='grey' compact>
                        <SizingTextbox
                            size={{
                                width: this.props.options.size.width,
                                height: this.props.options.size.height
                            }}
                            setSize={this.props.actions.setSize}
                        />
                    </Button>
                    <Button size='mini' basic color='grey' icon='refresh' onClick={() => {this.props.actions.reloadPage(true)}}></Button>
                    <Button size='mini' basic color='grey' icon='close' onClick={() => {this.props.actions.removeWindow()}}></Button>
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