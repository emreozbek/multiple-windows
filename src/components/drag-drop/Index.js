import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './style.scss'


export default class DropDown extends Component{
    static propTypes = {
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
        this.setState({calculateState : false});
    }
    startPosition(e){
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
            this.props.setWidth({id: this, width: (this.state.startWidth + (e.clientX - this.state.startX))});
    }
    setHeight(e){
        if(this.state.calculateState)
            this.props.setHeight((this.state.startHeight + (e.clientY - this.state.startY)));
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