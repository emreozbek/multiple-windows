


import React, {Component} from 'react';
import Window from './Window'
import {RESIZE_WINDOW} from './actions/Window'

export default class Canvas extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    componentDidMount(){
        console.log(this.props.actions, "eee");
        //console.log(this.props.actions.resizeWindow({type: RESIZE_WINDOW, width: 7569}));
    }
    render(){
        return(
            <div>
                <Window />
            </div>
        )
    }
}