import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './style.scss'


export default class WindowSizing extends Component{
    static propTypes = {
        size: PropTypes.object,
        direction: PropTypes.string,
        setWidth: PropTypes.func,
        setHeight: PropTypes.func,
        startResizing: PropTypes.func,
        stopResizing: PropTypes.func,
        setSize: PropTypes.func
    }
    constructor(props){
        super(props);
        this.state = {
            startX : 0,
            startY : 0,
            size: this.props.size,
            calculate : false
        };
    }
    startPosition(e){
        this.setState({
            calculate : true,
            startX : e.clientX,
            startY : e.clientY,
            size: this.props.size
        });
        console.log(this, "start", this.stopPosition);
        switch (this.props.direction){
            case "x" : {
                document.addEventListener("mousemove", this.props.setWidth);
            } break;
            case "y" : {
                document.addEventListener("mousemove", this.props.setHeight);
            } break;
            case "xy" : {
                document.addEventListener("mousemove", this.props.setSize);
            } break;
        }
        document.addEventListener("mouseup", this.stopPosition.bind(this));
        this.props.startResizing();
    }
    stopPosition(){
        console.log(this, "stop");
        switch (this.props.direction){
            case "x" : {
                document.removeEventListener("mousemove", this.props.setWidth);
            } break;
            case "y" : {
                document.removeEventListener("mousemove", this.props.setHeight);
            } break;
            case "xy" : {
                document.removeEventListener("mousemove", this.props.setSize);
            } break;
        }
        document.removeEventListener("mouseup", this.stopPosition);
        this.props.stopResizing();
        this.setState({calculate : false});
    }
    setWidth(e){
        console.log(this.props, "width");
        if(this.state.calculate)
            this.props.setWidth(this.state.size.width + (e.clientX - this.state.startX));
    }
    setHeight(e){
        console.log(this.props, "height");
        if(this.state.calculate)
            this.props.setHeight(this.state.size.height + (e.clientY - this.state.startY));
    }
    setSize(e){
        console.log(this.props, "size");
        if(this.state.calculate){
            this.setWidth(e);
            this.setHeight(e);
        }
    }
    render(){
        return(
            <div className   = {this.props.direction + "Coor"}
                 onMouseDown = {this.startPosition.bind(this)}
                 onMouseUp   = { () => {console.log("ttttt"); } }
            ></div>
        )
    }
}