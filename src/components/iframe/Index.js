

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'
export default class Iframe extends Component{
    static propTypes = {
        url: PropTypes.string,
        reload: PropTypes.bool,
        reloadPage: PropTypes.func
    }
    constructor(props){
        super(props);
    }
    reload(){
        this.props.reloadPage(false);
        this.refs.myIframe.contentWindow.location.reload(true);
    }
    render(){
        if(this.props.reload)
            this.reload();
        return(
            <div className="frame">
                <iframe
                    ref="myIframe"
                    scrolling="yes"
                    src={this.props.url/* + "?v=" + Math.random()*/}
                ></iframe>
            </div>
        )
    }
}