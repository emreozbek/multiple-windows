

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'
export default class WindowMove extends Component{
    constructor(props){
        super(props);
        this._stopMoving = this.stopMoving.bind(this);
        this._setWindowPosition = this.setWindowPosition.bind(this);
        this.state = {startX: 0, startY: 0};
    }
    startMoving(e){
        let rec = this.refs.moveTool.getBoundingClientRect();
        this.setState({
            startX: e.clientX - rec.left,
            startY: e.clientY - rec.top
        });
        document.addEventListener('mouseup', this._stopMoving);
        document.addEventListener('mousemove', this._setWindowPosition);
        this.props.startDrag();
    }
    stopMoving(){
        document.removeEventListener('mouseup', this._stopMoving)
        document.removeEventListener('mousemove', this._setWindowPosition);
        this.props.stopDrag();
    }
    setWindowPosition(e){
        this.props.setPosition({
            x: e.pageX - this.props.canvas.xPosition - this.state.startX - 7,
            y: e.pageY - this.props.canvas.yPosition - this.state.startY - 7
        });
    }
    render(){
        return (
            <div ref="moveTool" className="moveTool" onMouseDown={this.startMoving.bind(this)}></div>
        )
    }
}
WindowMove.propTypes = {
    canvas      : PropTypes.object,
    startDrag   : PropTypes.func,
    stopDrag    : PropTypes.func,
    setPosition : PropTypes.func
};