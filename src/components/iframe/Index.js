import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Popup} from 'semantic-ui-react'

import './style.scss'


export default class Iframe extends Component {
    static idRegex = /^[#]/;
    static classRegex = /^[.]/;

    constructor(props) {
        super(props);
        this.URL = this.getURL();
        this.state = {
            element: '',
            loadState: 0,
            hover: false
        };
        this.totalWidth = 0;
        this.totalHeight = 0;
    }

    reload() {
        this.refs.myIframe.src = this.getURL();
        this.props.loadingIcon(true)
    }

    componentDidUpdate() {
        if (this.props.reload) {
            this.props.reloadPage(false);
            this.URL = this.getURL();
            this.reload();
        }
    }

    getURL() {
        return this.props.url;
    }

    focusToElement() {
        if (this.state.element == "")
            return;
        let str = this.state.element.slice(1, this.state.element.length);
        let el;
        if (Iframe.idRegex.exec(this.state.element) != null)
            el = this.page.document.getElementById(str);
        else if (Iframe.classRegex.exec(this.state.element) != null)
            el = this.page.document.getElementsByClassName(str);
        else
            el = this.page.document.getElementsByTagName(this.state.element);

        if (el == null || el.length == 0)
            this.page.scrollTo(0, 0);
        else {
            if (el.length > 0)
                el = el[0].getBoundingClientRect();
            else
                el = el.getBoundingClientRect();
            this.page.scrollTo(Math.abs(el.left), Math.abs(el.top));
        }
    }

    componentWillReceiveProps(props) {
        if (props.element != this.state.element) {
            this.setState({element: props.element}, () => {
                this.focusToElement();
            });
        }
        if (!this.state.hover && this.props.applyScroll && this.page !== undefined) {
            this.setScrollPosition();
        }
    }

    setScrollPosition() {
        this.page.document.documentElement.scrollTop = this.props.scrollRate.y * this.totalHeight;
        this.page.document.documentElement.scrollLeft = this.props.scrollRate.x * this.totalWidth;
    }

    render() {
        let id = Math.floor(Math.random() * 100);
        return (
            <div className="frame">
                <iframe
                    name={"myIframe" + id}
                    ref="myIframe"
                    src={this.URL}
                    scrolling="yes"
                    style={{
                            width: this.props.size.width,
                            height: this.props.size.height
                        }}
                    onLoad={(e) =>{
                        this.props.loadingIcon(false);
                        /*
                        let wn = this.refs.myIframe.contentWindow;
                        try{
                            let page = wn.document;
                        }catch(e){
                            if(this.state.loadState == 0)
                                this.refs.myIframe.contentWindow.location.replace(chrome.extension.getURL('cors.html'));
                            this.setState({loadState: 1});
                            return;
                        }*/
                        this.page = this.refs.myIframe.contentWindow;
                        this.focusToElement();
                        this.totalWidth = this.page.document.body.scrollWidth - this.props.size.width;
                        this.totalHeight = this.page.document.body.scrollHeight - this.props.size.height;
                        if(!this.props.keepScroll){
                            this.props.setScrollRate({
                                x: 0,
                                y: 0
                            });
                        }
                        this.refs.myIframe.contentWindow.addEventListener('scroll', function(e){
                            if(this.state.hover){
                                this.totalWidth = e.target.body.scrollWidth - this.props.size.width;
                                this.totalHeight = e.target.body.scrollHeight - this.props.size.height;
                                this.props.setScrollRate({
                                    x: this.page.document.documentElement.scrollLeft / this.totalWidth,
                                    y: this.page.document.documentElement.scrollTop / this.totalHeight
                                });
                            }
                        }.bind(this))
                    }}
                    onMouseOver={(e) => {
                        this.setState({hover: true});
                    }}
                    onMouseOut={(e) => {
                        this.setState({hover: false});
                    }}
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
    setScrollRate: PropTypes.func,
    size: PropTypes.object,
    element: PropTypes.string,
    scrollRate: PropTypes.object,
    applyScroll: PropTypes.bool,
    keepScroll: PropTypes.bool
}