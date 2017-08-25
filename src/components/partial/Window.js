

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
            id : 0,
            componentID: 'window1',
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
    componentDidMount(){
        this.myWindow = document.getElementById(this.options.componentID);
    }
    render(){
        return(
            <div className="window" id={this.options.componentID} onMouseOver={this.hoverState.bind(this)} onMouseOut={this.hoverState.bind(this)}>
                <div className="resize">
                    <DragDrop direction="x" relationId={this.options.id} />
                    <DragDrop direction="y" relationId={this.options.id} />
                    <DragDrop direction="xy" relationId={this.options.id} />
                </div>
                <Iframe url={this.options.url} />
                <Options options={this.options} />
            </div>
        )
    }
}