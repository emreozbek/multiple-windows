
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button,Dropdown, Input } from 'semantic-ui-react'
import WindowName from '../window-name'
import WindowMove from '../window-move'
import SizingTextbox from '../sizing-textbox'
import WindowSearch from '../window-search'
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
                    setWindowName={this.props.setWindowName}
                />
                <Button.Group
                    className="upper"
                    size="mini"
                    floated="right"
                    color="grey"
                    basic
                >
                    <Button
                        className="slip"
                        basic
                        compact
                        size='mini'
                        color='grey'>
                        <SizingTextbox
                            size={{
                                width: this.props.options.size.width,
                                height: this.props.options.size.height
                            }}
                            setSize={this.props.setSize}
                        />
                    </Button>
                    <WindowSearch
                        url={this.props.options.url}
                        setURLMyWindow = {this.props.setURLMyWindow}
                    />
                    <Button
                        basic
                        size='mini'
                        color='grey'
                        icon='refresh'
                        loading={this.props.loadingIcon}
                        onClick={this.props.reloadPage}
                    />
                    <Button
                        basic
                        size='mini'
                        color='grey'
                        icon={'window ' + (this.props.options.fullScreen ? 'minimize' : 'maximize')}
                        onClick = {() => {this.props.fullScreen(!this.props.options.fullScreen)}}
                    />
                    <Button
                        basic
                        size='mini'
                        color='grey'
                        icon='close'
                        onClick={this.props.removeWindow}
                    />
                </Button.Group>
                <WindowMove
                    canvas      = {this.props.canvas}
                    startDrag   = {this.props.startDrag}
                    stopDrag    = {this.props.stopDrag}
                    setPosition = {this.props.setPosition}
                    fullScreenState = {this.props.options.fullScreen}
                    fullScreen = {this.props.fullScreen}
                />
            </div>
        )
    }
}
Options.propTypes = {
    options       : PropTypes.object,
    removeWindow  : PropTypes.func,
    reloadPage    : PropTypes.func,
    startDrag     : PropTypes.func,
    stopDrag      : PropTypes.func,
    setPosition   : PropTypes.func,
    setWindowName : PropTypes.func,
    setSize       : PropTypes.func,
    fullScreen    : PropTypes.func,
    setURLMyWindow: PropTypes.func,
    canvas        : PropTypes.object,
    loadingIcon   : PropTypes.bool
}