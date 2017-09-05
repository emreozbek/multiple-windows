

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
    render(){
        return(
            <div className="frame">
                <iframe scrolling="yes" src={this.props.url/* + "?v=" + Math.random()*/}></iframe>
            </div>
        )
    }
}