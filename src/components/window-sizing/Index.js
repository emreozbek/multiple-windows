import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class WindowSizing extends Component{
    static propTypes = {
        size: PropTypes.object,
        direction: PropTypes.string,
        startResizing: PropTypes.func,
        stopResizing: PropTypes.func,
        setSize: PropTypes.func
    }
    constructor(props){
        super(props);
        this.state = {
            startX : 0,
            startY : 0,
            startW : 0,
            startH : 0,
            width  : 0,
            height : 0
        };
        this._stopPosition = this.stopPosition.bind(this);
        this._setSize = this.setSize.bind(this);
    }
    startPosition(e){
        this.setState({
            startX : e.clientX,
            startY : e.clientY,
            startW : this.props.size.width,
            startH : this.props.size.height
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
            height: this.state.startH + (e.clientY - this.state.startY)
        });
        this.props.setSize({width: this.state.width, height: this.state.height});
        switch (this.props.direction){
            case "x" : {
                this.props.setSize({width: this.state.width, height: this.state.startH});
            } break;
            case "y" : {
                this.props.setSize({width: this.state.startW, height: this.state.height});
            } break;
            case "xy" : {
                this.props.setSize({width: this.state.width, height: this.state.height});
            } break;
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