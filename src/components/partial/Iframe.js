

import React, {Component} from 'react';

export default class Iframe extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="frame">
                <iframe src={this.props.url/* + "?v=" + Math.random()*/}></iframe>
            </div>
        )
    }
}