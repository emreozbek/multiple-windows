
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, Label, Input } from 'semantic-ui-react'
import './style.scss'
export default class Options extends Component{
    constructor(props){
        super(props);
        this._stopMoving = this.stopMoving.bind(this);
        this._setWindowPosition = this.setWindowPosition.bind(this);
        this._completeName = this.completeName.bind(this);
        this.state = {setName : false, startX: 0, startY: 0};
    }
    startMoving(e){
        let rec = this.refs.moveTool.getBoundingClientRect();
        this.setState({
            startX: e.clientX - rec.left,
            startY: e.clientY - rec.top
        });
        console.log(e.pageY - this.props.canvas.yPosition - this.state.startY);
        document.addEventListener('mouseup', this._stopMoving);
        document.addEventListener('mousemove', this._setWindowPosition);
    }
    stopMoving(){
        document.removeEventListener('mouseup', this._stopMoving)
        document.removeEventListener('mousemove', this._setWindowPosition);
        this.props.actions.stopDrag();
    }
    setWindowPosition(e){
        let xSpace = e.pageX - this.props.canvas.xPosition - this.state.startX - 7,
            ySpace = e.pageY - this.props.canvas.yPosition - this.state.startY - 7;
        this.props.actions.setPosition({x: xSpace, y: ySpace});
    }
    setName(){
        this.setState({setName:true});
        document.addEventListener('click', this._completeName)
    }
    completeName(e){
        this.setState({setName:false});
        document.removeEventListener('click', this._completeName)
    }
    render(){
        return(
            <div className="options">
                <Label className={'upper noBackground ' + (this.state.setName ? 'hidden' : '')} onClick={this.setName.bind(this)}>
                    <Icon name='window maximize' /> windowName
                </Label>
                <label className={'upper ' + (this.state.setName ? '' : 'hidden')}>
                    <Input ref="windowNameTextbox" placeholder='windowName' size="mini" icon='window maximize' iconPosition='left' inverted color="black" focus={this.state.setName} />
                </label>
                <Button.Group className="upper" size="mini" floated="right">
                    <Button  basic size='mini' color='grey'>{this.props.options.size.width + " x " + this.props.options.size.height}</Button>
                    <Button  basic size='mini' color='grey' icon='refresh' onClick={() => {this.props.actions.reloadPage(true)}}></Button>
                    <Button  basic size='mini' basic color='grey' icon='close' onClick={() => {this.props.actions.removeWindow()}}></Button>
                </Button.Group>
                <div ref="moveTool" className="moveTool" onMouseDown={this.startMoving.bind(this)}></div>
            </div>
        )
    }
}
Options.propTypes = {
    options : PropTypes.object,
    actions : PropTypes.object,
    canvas  : PropTypes.object
}