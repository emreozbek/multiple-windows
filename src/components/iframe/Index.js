
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class Iframe extends Component{
    constructor(props){
        super(props);
        this.URL = this.getURL();
    }
    reload(){
        this.refs.myIframe.src = this.getURL();
        this.props.loadingIcon(true)
    }
    componentDidUpdate(){
        if(this.props.reload){
            this.props.reloadPage(false);
            this.URL = this.getURL();
            this.reload();
        }
    }
    getURL(){
        return this.props.url + "?v=" + Math.random();
    }
    render(){
        return(
            <div className="frame">
                <iframe
                    ref="myIframe"
                    scrolling="yes"
                    src={this.URL}
                    style={{
                        width: this.props.size.width,
                        height: this.props.size.height
                    }}
                    onLoad={() => this.props.loadingIcon(false)}
                ></iframe>
            </div>
        )
    }
}
Iframe.propTypes = {
    url: PropTypes.string,
    reload: PropTypes.bool,
    reloadPage: PropTypes.func,
    loadingIcon: PropTypes.func,
    size: PropTypes.object
}