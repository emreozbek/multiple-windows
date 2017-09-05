

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'

import SizingTool from '../window-sizing'
import Iframe from '../iframe'
import Options from '../window-options'

export default class Window extends Component{
    static propTypes = {
        options: PropTypes.object,
        actions: PropTypes.object
    }
    constructor(props){
        super(props);
        console.log(this.props);
    }
    hoverState(e){
        if(e.type == "mouseover")
            document.getElementById(this.props.options.componentID).classList.add("hover");
        else
            document.getElementById(this.props.options.componentID).classList.remove("hover");
    }
    setWidth(w){
        this.props.actions.setWidth({id: this.props.options.id, width: w});
        this.startResizing();
    }
    setHeight(h){
        this.props.actions.setHeight({id: this.props.options.id, height: h});
        this.startResizing();
    }
    startResizing(){
        document.getElementById(this.props.options.componentID).classList.add("resizing");
    }
    stopResizing(){
        document.getElementById(this.props.options.componentID).classList.remove("resizing");
    }
    setSize(size){
        this.setWidth(size.w);
        this.setHeight(size.h);
    }
    render(){
        return(
            <div className='window'
                 id={this.props.options.componentID}
                 onMouseOver={this.hoverState.bind(this)}
                 onMouseOut={this.hoverState.bind(this)}
                 style={{
                    width: this.props.options.size.width,
                    height: this.props.options.size.height
                 }}>
                <div className="resize">
                    <SizingTool
                        size          = {this.props.options.size}
                        direction     = "x"
                        setWidth      = {this.setWidth.bind(this)}
                        startResizing = {this.startResizing.bind(this)}
                        stopResizing  = {this.stopResizing.bind(this)} />
                    <SizingTool
                        size          = {this.props.options.size}
                        direction     = "y"
                        setHeight     = {this.setHeight.bind(this)}
                        startResizing = {this.startResizing.bind(this)}
                        stopResizing  = {this.stopResizing.bind(this)} />
                    <SizingTool
                        size          = {this.props.options.size}
                        direction     = "xy"
                        startResizing = {this.startResizing.bind(this)}
                        stopResizing  = {this.stopResizing.bind(this)}
                        setSize       = {this.setSize.bind(this)} />
                </div>
                <Iframe url={this.props.options.url} />
                <Options options={this.props.options} actions={ { "removeWindow" : this.props.actions.removeWindow } } />
            </div>
        )
    }
}