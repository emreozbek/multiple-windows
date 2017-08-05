

import React, {Component} from 'react';
import DragDrop from './components/DragDrop';
import Iframe from './components/Iframe';
import Options from './components/Options';

export default class Window extends Component{
    constructor(props){
        super(props);
        this.windowId = "window0";
    }
    hoverState(e){
        if(e.type == "mouseover")
            document.getElementById(this.windowId).classList.add("hover");
        else
            document.getElementById(this.windowId).classList.remove("hover");
    }
    render(){
        return(
            <div className="window" id={this.windowId} onMouseOver={this.hoverState.bind(this)} onMouseOut={this.hoverState.bind(this)}>
                <div className="resize">
                    <DragDrop direction="x" relationId={this.windowId} />
                    <DragDrop direction="y" relationId={this.windowId} />
                    <DragDrop direction="xy" relationId={this.windowId} />
                </div>
                <Iframe url="http://www.detursports.com" />
                <Options />
            </div>
        )
    }
}