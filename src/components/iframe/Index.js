
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Label} from 'semantic-ui-react'

import './style.scss'




export default class Iframe extends Component{
    static idRegex = /^[#]/;
    static classRegex = /^[.]/;
    constructor(props){
        super(props);
        this.URL = this.getURL();
        this.state = {
            element: ''
        };
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
        this.page = this.refs.myIframe.contentWindow;

    }
    getURL(){
        return this.props.url;
    }
    focusToElement(){
        let str = this.state.element.slice(1, this.state.element.length);
        let el;
        if(Iframe.idRegex.exec(this.state.element) != null)
            el = this.page.document.getElementById(str);
        else if(Iframe.classRegex.exec(this.state.element) != null)
            el = this.page.document.getElementsByClassName(str);
        else
            el = this.page.document.getElementsByTagName(this.state.element);

        if(el == null || el.length == 0)
            this.page.scrollTo(0, 0);
        else{
            if(el.length > 0)
                el = el[0].getBoundingClientRect();
            else
                el = el.getBoundingClientRect();
            this.page.scrollTo(Math.abs(el.left), Math.abs(el.top));
        }
    }
    componentWillReceiveProps(props){
        if(props.element != this.state.element){
            this.setState({element: props.element}, () => {
                this.focusToElement();
            });
        }
    }
    render(){
        let id = Math.floor(Math.random() * 100);
        return(
            <div className="frame">
                <iframe
                    name={"test" + id}
                    id={"test" + id}
                    ref="myIframe"
                    scrolling="yes"
                    src={this.URL}
                    style={{
                        width: this.props.size.width,
                        height: this.props.size.height
                    }}
                    onLoad={(e) =>{
                        this.props.loadingIcon(false);
                        try {
                            let aa = this.refs.myIframe.contentWindow.location.href;
                        } catch (b) {
                            alert("Access denied: Cross-domain security error");
                            return false
                        }

                        this.focusToElement();
                        /*console.log(this.refs.myIframe.contentWindow);
                        this.props.setURLMyWindow({
                            url: this.refs.myIframe.contentWindow.location.href,
                            reload: false
                        });*/
                    }}
                    onError={(e) => console.log(e)}
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
    setURLMyWindow: PropTypes.func,
    size: PropTypes.object,
    element: PropTypes.string
}