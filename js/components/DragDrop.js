

import React, {Component} from 'react';
import Window from '../reducers/Window'
import { createStore } from 'redux'
import { RESIZE_WINDOW } from '../constants/Window'
import { resizeWindow } from '../actions/Window'

const store = createStore(Window)

export default class DropDownTool extends Component{
    constructor(props){
        super(props);
        this.state = {
            startX : 0,
            startY : 0,
            startWidth : 0,
            startHeight : 0,
            calculateState : false
        };
        switch (this.props.direction){
            case "x" : {
                this.className = "xCoor";
                document.addEventListener("mousemove", this.calculateDistanceWidth.bind(this));
            } break;
            case "y" : {
                this.className = "yCoor";
                document.addEventListener("mousemove", this.calculateDistanceHeight.bind(this));
            } break;
            case "xy" : {
                this.className = "bothCoor";
                document.addEventListener("mousemove", this.calculateDistanceBoth.bind(this));
            } break;
        }
        document.addEventListener("mouseup", this.stopDistance.bind(this));
    }
    componentDidMount(){
        this.weWindow = document.getElementById(this.props.relationId);
    }

    setStartPosition(e){
        this.setState({
            calculateState : true,
            startX : e.clientX,
            startY : e.clientY,
            startWidth : this.weWindow.offsetWidth,
            startHeight : this.weWindow.offsetHeight
        });
    }
    setWidth(mouseX){
        this.weWindow.classList.add("resizing");
        this.weWindow.style.width = (this.state.startWidth + (mouseX - this.state.startX)) + "px";
        //store.dispatch();
    }
    setHeight(mouseY){
        this.weWindow.classList.add("resizing");
        this.weWindow.style.height = (this.state.startHeight + (mouseY - this.state.startY)) + "px";
    }
    calculateDistanceWidth(e){
        if(this.state.calculateState){
            this.setWidth(e.clientX);
            store.dispatch(resizeWindow({type: RESIZE_WINDOW, width: e.clientX}));
        }
    }
    calculateDistanceHeight(e){
        if(this.state.calculateState)
            this.setHeight(e.clientY);
    }
    calculateDistanceBoth(e){
        if(this.state.calculateState){
            this.setWidth(e.clientX);
            this.setHeight(e.clientY);
        }
    }
    stopDistance(){
        this.setState({calculateState : false});
        this.weWindow.classList.remove("resizing");
    }
    render(){
        return(
            <div className   = {this.className}
                 onMouseDown = {this.setStartPosition.bind(this)}
            ></div>
        )
    }
}