

import React, {PropTypes, Component} from 'react'
import DragDrop from './partial/DragDrop'
import Iframe from './partial/Iframe'
import Options from './partial/Options'

export default class Window extends Component{
    static propTypes = {
        options: PropTypes.object
    }
    constructor(props){
        super(props);
        this.options = {

        };
    }/*
    hoverState(e){
        this.props.action(10 * Math.random());
        if(e.type == "mouseover")
            document.getElementById(this.windowId).classList.add("hover");
        else
            document.getElementById(this.windowId).classList.remove("hover");
    }*/
    render(){
        return(
            <div className="window" id={this.options.id} /*onMouseOver={this.hoverState.bind(this)} onMouseOut={this.hoverState.bind(this)}*/>
                <div className="resize">
                    <DragDrop direction="x" relationId={this.options.id} />
                    <DragDrop direction="y" relationId={this.options.id} />
                    <DragDrop direction="xy" relationId={this.options.id} />
                </div>
                <Iframe url="http://www.detursports.com" />
                <Options />
            </div>
        )
    }
}