

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'semantic-ui-react'
import './style.scss'
export default class Options extends Component{
    static propTypes = {
        options : PropTypes.object,
        actions : PropTypes.object,
    }
    constructor(props){
        super(props);
        this._stopMoving = this.stopMoving.bind(this);
        this._setWindowPosition = this.setWindowPosition.bind(this);
    }
    startMoving(e){
        document.addEventListener('mouseup', this._stopMoving);
        document.addEventListener('mousemove', this._setWindowPosition);
        this.props.actions.startDrag();
    }
    stopMoving(){
        document.removeEventListener('mouseup', this._stopMoving)
        document.removeEventListener('mousemove', this._setWindowPosition);
        this.props.actions.stopDrag();
    }
    setWindowPosition(e){
        let xSpace = e.clientX - document.getElementsByClassName('window')[0].offsetLeft,
            ySpace = e.clientY - document.getElementsByClassName('window')[0].offsetTop;
        this.props.actions.setPosition({x: e.clientX - xSpace, y: e.clientY - 30});
    }
    render(){
        return(
            <div className="options">
                <Button floated='left' basic size='mini' color='grey' icon='move' onMouseDown={this.startMoving.bind(this)}></Button>
                <Button.Group size="mini" floated="right">
                    <Button  basic size='mini' color='grey'>{this.props.options.size.width + " x " + this.props.options.size.height}</Button>
                    <Button  basic size='mini' color='grey' icon='refresh' onClick={() => {this.props.actions.reloadPage(true)}}></Button>
                    <Button  basic size='mini' basic color='grey' icon='close' onClick={() => {this.props.actions.removeWindow()}}></Button>
                </Button.Group>
            </div>
        )
    }
}