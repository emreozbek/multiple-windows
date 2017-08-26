

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'
export default class Iframe extends Component{
    static propTypes = {
        url: PropTypes.string,
        size: PropTypes.object
    }
    constructor(props){
        super(props);
    }
    setSize(){
        return {
            width: this.props.size.width,
            height: this.props.size.height
        };
    }
    render(){
        return(
            <div className="frame" style={this.setSize()}>
                <iframe scrolling="yes" src={this.props.url/* + "?v=" + Math.random()*/}></iframe>
            </div>
        )
    }
}