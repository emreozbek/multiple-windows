import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './style.scss'


export default class WindowSizing extends Component{
    static propTypes = {
        id: PropTypes.number,
        windowID: PropTypes.string,
        direction: PropTypes.string,
        setWidth: PropTypes.func,
        setHeight: PropTypes.func,
        setBoth: PropTypes.func
    }
    constructor(props){
        super(props);
        switch (this.props.direction){
            case "x" : {
                document.addEventListener("mousemove", this.setWidth.bind(this));
            } break;
            case "y" : {
                document.addEventListener("mousemove", this.setHeight.bind(this));
            } break;
            case "xy" : {
                document.addEventListener("mousemove", this.setBoth.bind(this));
            } break;
        }
        document.addEventListener("mouseup", this.stopPosition.bind(this));
        this.state = {
            startX : 0,
            startY : 0,
            startWidth : 0,
            startHeight : 0,
            calculateState : false
        };
    }
    stopPosition(e){
        document.getElementById(this.props.windowID).classList.remove("resizing");
        this.setState({calculateState : false});
    }
    startPosition(e){
        document.getElementById(this.props.windowID).classList.add("resizing");
        this.setState({
            calculateState : true,
            startX : e.clientX,
            startY : e.clientY,
            startWidth : document.getElementById(this.props.windowID).offsetWidth,
            startHeight : document.getElementById(this.props.windowID).offsetHeight
        });
    }
    setWidth(e){
        if(this.state.calculateState)
            this.props.setWidth({id: this.props.id, width: (this.state.startWidth + (e.clientX - this.state.startX))});
    }
    setHeight(e){
        if(this.state.calculateState)
            this.props.setHeight({id: this.props.id, height: (this.state.startHeight + (e.clientY - this.state.startY))});
    }
    setBoth(e){
        if(this.state.calculateState){
            this.setWidth(e);
            this.setHeight(e);
        }
    }
    render(){
        return(
            <div className   = {this.props.direction + "Coor"}
                 onMouseDown = {this.startPosition.bind(this)}
            ></div>
        )
    }
}