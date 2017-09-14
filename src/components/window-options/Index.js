
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button,Popup, Rating } from 'semantic-ui-react'
import WindowName from '../window-name'
import WindowMove from '../window-move'
import SizingTextbox from '../sizing-textbox'
import WindowRating from '../window-rating'
import './style.scss'

export default class Options extends Component{
    static ratio = 100;
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
                <Button.Group
                    className="upper"
                    size="mini"
                    floated="right">
                    <Button
                        basic
                        compact
                        size='mini'
                        color='grey'>
                        <SizingTextbox
                            size={{
                                width: this.props.options.size.width,
                                height: this.props.options.size.height
                            }}
                            setSize={this.props.actions.setSize}
                        />
                    </Button>
                    <WindowRating />
                    <Button
                        basic
                        size='mini'
                        color='grey'
                        icon='refresh'
                        onClick={this.props.actions.reloadPage}>
                    </Button>
                    <Button
                    basic
                    size='mini'
                    color='grey'
                    icon='window maximize' />
                    <Button
                        basic
                        size='mini'
                        color='grey'
                        icon='close'
                        onClick={this.props.actions.removeWindow}>
                    </Button>
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