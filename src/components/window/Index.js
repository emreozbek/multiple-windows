

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'

import SizingTool from '../window-sizing'
import Iframe from '../iframe'
import Options from '../window-options'

export default class Window extends Component{
    constructor(props){
        super(props);
        this.state = {
            zIndex: this.props.options.id
        };
    }
    hoverState(e){
        if(e.type == "mouseover")
            this.refs.myWindow.classList.add("hover");
        else
            this.refs.myWindow.classList.remove("hover");
    }
    startResizing(){
        this.refs.myWindow.classList.add("resizing");
    }
    stopResizing(){
        this.refs.myWindow.classList.remove("resizing");
    }
    setSize(size){
        this.props.actions.setSize({
            id: this.props.options.id,
            width: size.width,
            height: size.height
        });
    }
    removeWindow(){
        this.props.actions.removeWindow(this.props.options.id);
    }
    reloadPage(state){
        this.props.actions.reloadPage({
            id: this.props.options.id,
            reload: state
        });
    }
    startDrag(){
        this.setState({zIndex: 99999});
        this.refs.myWindow.classList.add("moving");
    }
    stopDrag(){
        this.setState({zIndex: this.props.options.id});
        this.refs.myWindow.classList.remove("moving");
    }
    setPosition(coor){
        this.props.actions.setWindowPosition({
            id: this.props.options.id,
            x: coor.x,
            y: coor.y
        });
    }
    setWindowName(name){
        this.props.actions.setWindowName({
            id: this.props.options.id,
            name
        });
    }
    render(){
        return(
            <div
                ref="myWindow"
                className='windowFrame'
                onMouseOver={this.hoverState.bind(this)}
                onMouseOut={this.hoverState.bind(this)}
                style={{
                    left: this.props.options.position.x,
                    top: this.props.options.position.y,
                    zIndex: this.state.zIndex
                }}
            >
                <div className="resize">
                    <SizingTool
                        size          = {this.props.options.size}
                        direction     = "x"
                        setSize       = {this.setSize.bind(this)}
                        startResizing = {this.startResizing.bind(this)}
                        stopResizing  = {this.stopResizing.bind(this)} />
                    <SizingTool
                        size          = {this.props.options.size}
                        direction     = "y"
                        setSize       = {this.setSize.bind(this)}
                        startResizing = {this.startResizing.bind(this)}
                        stopResizing  = {this.stopResizing.bind(this)} />
                    <SizingTool
                        size          = {this.props.options.size}
                        direction     = "xy"
                        startResizing = {this.startResizing.bind(this)}
                        stopResizing  = {this.stopResizing.bind(this)}
                        setSize       = {this.setSize.bind(this)} />
                </div>
                <div className="cover"></div>
                <Iframe
                    url={this.props.options.url}
                    reload={this.props.options.reload}
                    reloadPage={this.reloadPage.bind(this)}
                    size={{
                        width: this.props.options.size.width,
                        height: this.props.options.size.height
                    }}
                />
                <Options
                    options={this.props.options}
                    actions={{
                        "removeWindow" : this.removeWindow.bind(this),
                        "reloadPage"   : this.reloadPage.bind(this, true),
                        "startDrag"    : this.startDrag.bind(this),
                        "stopDrag"     : this.stopDrag.bind(this),
                        "setPosition"  : this.setPosition.bind(this),
                        "setWindowName": this.setWindowName.bind(this),
                        "setSize"      : this.setSize.bind(this)
                    }}
                    canvas={this.props.canvas}
                />
            </div>
        )
    }
}
Window.propTypes = {
    options: PropTypes.object,
    actions: PropTypes.object,
    canvas : PropTypes.object
}