

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'

import DragDrop from '../drag-drop'
import Iframe from '../iframe'
import Options from '../window-options'

export default class Window extends Component{
    static propTypes = {
        options: PropTypes.object,
        actions: PropTypes.object
    }
    constructor(props){
        super(props);
        this.options = {
            id : 0,
            componentID: 'name1',
            size: {width: 360, height: 480},
            url: '#'
        };
        this.options = Object.assign(this.options, this.props.options);
    }
    hoverState(e){
        if(e.type == "mouseover")
            this.myWindow.classList.add("hover");
        else
            this.myWindow.classList.remove("hover");
    }
    render(){
        return(
            <div className='window'
                 id={this.options.componentID}
                 onMouseOver={this.hoverState.bind(this)}
                 onMouseOut={this.hoverState.bind(this)}>
                <div className="resize">
                    <DragDrop
                        windowID={this.options.componentID}
                        direction="x"
                        setWidth={this.props.actions.setWidth} />
                    <DragDrop
                        windowID={this.options.componentID}
                        direction="y"
                        setHeight={this.props.actions.setHeight} />
                    <DragDrop
                        windowID={this.options.componentID}
                        direction="xy"
                        setWidth={this.props.actions.setWidth}
                        setHeight={this.props.actions.setHeight} />
                </div>
                <Iframe url={this.options.url} />
                <Options options={this.options} />
            </div>
        )
    }
    componentDidMount(){
        this.myWindow = document.getElementById(this.options.componentID);
    }
}