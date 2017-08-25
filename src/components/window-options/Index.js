

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'
export default class Options extends Component{
    static propTypes = {
        options : PropTypes.object
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="options">
                <div className="sizeInfo">{this.props.options.size.width + " x " + this.props.options.size.height}</div>
            </div>
        )
    }
}