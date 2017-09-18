import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class WindowSizing extends Component{
    constructor(props){
        super(props);
        this.state = {
            startX : 0,
            startY : 0,
            startW : 0,
            startH : 0,
            width  : 0,
            height : 0,
            startPX: 0,
            startPY: 0,
            positionX: 0,
            positionY: 0,
            negativeWidth: 0,
            negativeHeight: 0
        };
        this._stopPosition = this.stopPosition.bind(this);
        this._setSize = this.setSize.bind(this);
    }
    startPosition(e){
        this.setState({
            startX  : e.clientX,
            startY  : e.clientY,
            startW  : this.props.size.width,
            startH  : this.props.size.height,
            startPX : this.props.position.x,
            startPY : this.props.position.y
        });
        document.addEventListener("mouseup", this._stopPosition);
        document.addEventListener("mousemove", this._setSize);
        this.props.startResizing();
    }
    stopPosition(){
        document.removeEventListener("mouseup", this._stopPosition);
        document.removeEventListener("mousemove", this._setSize);
        this.props.stopResizing();
    }
    setSize(e){
        this.setState({
            width: this.state.startW + (e.clientX - this.state.startX),
            height: this.state.startH + (e.clientY - this.state.startY),
            positionX: this.state.startPX - (this.state.startX - e.clientX),
            positionY: this.state.startPY - (this.state.startY - e.clientY),
            negativeWidth: this.state.startW + (this.state.startX - e.clientX),
            negativeHeight: this.state.startH + (this.state.startY - e.clientY),
        });
        if(this.state.width <= 0)
            this.state.width = 0;
        if(this.state.height <= 0)
            this.state.height = 0;
        this.props.setSize({width: this.state.width, height: this.state.height});
        switch (this.props.direction){
            case "leftTop" : {
                this.props.setSize({width: this.state.negativeWidth, height: this.state.negativeHeight});
                this.props.setPosition({
                    x: this.state.positionX,
                    y: this.state.positionY
                });
            } break;
            case "rightTop" :{
                this.props.setSize({width: this.state.width, height: this.state.negativeHeight});
                this.props.setPosition({
                    x: this.state.startPX,
                    y: this.state.positionY
                });
            } break;
            case "rightBottom" : {
                this.props.setSize({width: this.state.width, height: this.state.height});
            } break;
            case "leftBottom" : {
                this.props.setSize({width: this.state.negativeWidth, height: this.state.height});
                this.props.setPosition({
                    x: this.state.positionX,
                    y: this.state.startPY
                });
            } break;
            case "xLeft" :{
                this.props.setSize({width: this.state.negativeWidth, height: this.state.startH});
                this.props.setPosition({
                    x: this.state.positionX,
                    y: this.state.startPY
                });
            } break;
            case "xRight" : {
                this.props.setSize({width: this.state.width, height: this.state.startH});
            } break;
            case "yBottom" : {
                this.props.setSize({width: this.state.startW, height: this.state.height});
            } break;
            case "yTop" : {
                this.props.setSize({width: this.state.startW, height: this.state.negativeHeight});
                this.props.setPosition({
                    x: this.state.startPX,
                    y: this.state.positionY
                });
            } break;

        }
    }
    render(){
        return(
            <div className   = {this.props.direction}
                 onMouseDown = {this.startPosition.bind(this)}
            ></div>
        )
    }
}
WindowSizing.propTypes = {
    size: PropTypes.object,
    direction: PropTypes.string,
    startResizing: PropTypes.func,
    stopResizing: PropTypes.func,
    setPosition: PropTypes.func,
    position: PropTypes.object,
    setSize: PropTypes.func
}