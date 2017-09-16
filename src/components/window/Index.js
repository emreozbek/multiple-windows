

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
            zIndex: this.props.options.id,
            loadingIcon: false
        };
        this._resizedWindow = this.resizedWindow.bind(this);
    }
    hoverState(e){
        if(e.type == "mouseover")
            this.refs.myWindow.classList.add("hover");
        else
            this.refs.myWindow.classList.remove("hover");
    }
    startResizing(){
        if(!this.props.options.fullScreen)
            this.refs.myWindow.classList.add("resizing");
    }
    stopResizing(){
        if(!this.props.options.fullScreen)
            this.refs.myWindow.classList.remove("resizing");
    }
    setSize(size){
        if(!this.props.options.fullScreen){
            this.props.actions.setSize({
                id: this.props.options.id,
                width: size.width,
                height: size.height
            });
        }
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
        if(!this.props.options.fullScreen){
            this.setState({zIndex: 99999});
            this.refs.myWindow.classList.add("moving");
        }
    }
    stopDrag(){
        this.setState({zIndex: this.props.options.id});
        this.refs.myWindow.classList.remove("moving");
    }
    setPosition(coor){
        if(!this.props.options.fullScreen){
            this.props.actions.setWindowPosition({
                id: this.props.options.id,
                x: coor.x,
                y: coor.y
            });
        }
    }
    setWindowName(name){
        this.props.actions.setWindowName({
            id: this.props.options.id,
            name
        });
    }
    setLoadingIcon(state){
        this.setState({loadingIcon: state});
    }
    fullScreen(fullScreen){
        this.props.actions.fullScreen({
            id: this.props.options.id,
            fullScreen
        });
        if(fullScreen){
            this.props.actions.setWindowPosition({
                id: this.props.options.id,
                x: 5,
                y: 5
            });
            window.addEventListener('resize', this._resizedWindow);
            window.dispatchEvent(new CustomEvent('resize'));
        }else{
            window.removeEventListener('resize', this._resizedWindow);
            this.props.actions.setSize({
                id: this.props.options.id,
                width: this.props.options.old.size.width,
                height: this.props.options.old.size.height
            });
            this.props.actions.setWindowPosition({
                id: this.props.options.id,
                x: this.props.options.old.position.x,
                y: this.props.options.old.position.y
            });
        }
    }
    resizedWindow(e){
        this.props.actions.setSize({
            id: this.props.options.id,
            width: e.target.innerWidth - 24,
            height: e.target.innerHeight - 114
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
                    loadingIcon = {this.setLoadingIcon.bind(this)}
                    size={{
                        width: this.props.options.size.width,
                        height: this.props.options.size.height
                    }}
                />
                <Options
                    options={this.props.options}
                    removeWindow = {this.removeWindow.bind(this)}
                    reloadPage   = {this.reloadPage.bind(this, true)}
                    startDrag    = {this.startDrag.bind(this)}
                    stopDrag     = {this.stopDrag.bind(this)}
                    setPosition  = {this.setPosition.bind(this)}
                    setWindowName= {this.setWindowName.bind(this)}
                    setSize      = {this.setSize.bind(this)}
                    fullScreen   = {this.fullScreen.bind(this)}
                    canvas       = {this.props.canvas}
                    loadingIcon  = {this.state.loadingIcon}
                />
            </div>
        )
    }
    componentDidMount(){
        if(this.props.options.fullScreen){
            window.addEventListener('resize', this._resizedWindow);
            window.dispatchEvent(new CustomEvent('resize'));
        }
    }
}
Window.propTypes = {
    options: PropTypes.object,
    actions: PropTypes.object,
    canvas : PropTypes.object
}