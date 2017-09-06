

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
    render(){
        return(
            <div ref="myWindow"
                 className='window'
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
                <Iframe url={this.props.options.url}
                        reload={this.props.options.reload}
                        reloadPage={this.reloadPage.bind(this)}
                />
                <Options options={this.props.options}
                         actions={{
                            "removeWindow" : this.removeWindow.bind(this),
                            "reloadPage"   : this.reloadPage.bind(this)
                         }}
                />
            </div>
        )
    }
}