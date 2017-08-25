

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'
export default class Iframe extends Component{
    static propTypes = {
        url: PropTypes.string
    }
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