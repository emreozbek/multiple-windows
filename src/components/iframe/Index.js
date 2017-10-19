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
            showModal: false
        };
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
        this.page = this.refs.myIframe.contentWindow;
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
    }

    render() {
        let id = Math.floor(Math.random() * 100);
        return (
            <Popup trigger={
                <div className="frame">
                    <iframe
                        name={"myIframe" + id}
                        id={"myIframe" + id}
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
                                let doc = this.refs.myIframe.contentWindow.document;
                            } catch (b) {
                                this.setState({showModal: true});
                                return false
                            }
                            this.page = this.refs.myIframe.contentWindow;
                            this.focusToElement();
                        }}
                    ></iframe>
                </div>}
                   open={this.state.showModal}
                   position="top center"
                   wide={true}
                   className="corsPopup">
                <Popup.Header>CORS</Popup.Header>
                <Popup.Content>
                    Access denied: Cross-domain security error
                </Popup.Content>
            </Popup>
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