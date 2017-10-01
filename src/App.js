import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Canvas from './components/canvas/Index'
import Header from './components/header/Index'
import * as Actions from './actions'

import 'semantic-ui-css/semantic.min.css'
import '../css/style.scss'


class App extends Component {
    constructor(props) {
        super(props);
        window.addEventListener('resize', this.resized.bind(this));
        window.dispatchEvent(new CustomEvent('resize'));

    }
    resized(e) {
        this.props.canvasActions.resizedWindow({
            width: e.target.innerWidth,
            height: e.target.innerHeight
        });
    }
    render() {
        return (
            <div className="fit">
                <Header
                    createWindow={this.props.windowActions.createWindow}
                    reloadAllPages={this.props.windowActions.reloadAllPages}
                    setURLALLWindows={this.props.windowActions.setURLALLPages}
                    setCanvasURL={this.props.canvasActions.setURL}
                    focusToElement={this.props.canvasActions.focusToElement}
                    windowStore={this.props.windowsStore}
                    canvasStore={this.props.canvasStore}
                />
                <Canvas
                    actions={{
                        window : this.props.windowActions,
                        canvas : this.props.canvasActions
                    }}
                    store={{
                        windows: this.props.windowsStore,
                        canvas : this.props.canvasStore
                    }}/>
            </div>
        )
    }
    componentWillReceiveProps(props) {
        console.log(chrome);
        chrome.storage.local.set({
            windows: props.windowsStore,
            canvas : props.canvasStore
        });
        
        /*
         var port = chrome.runtime.connect('fmcpjkhoapimklbcmejelonipfafdkip');
         port.postMessage({joke: "Knock knock"});
         chrome.runtime.sendMessage('fmcpjkhoapimklbcmejelonipfafdkip', {greeting: "hello"}, function(response) {
         console.log(response);
         });
        localStorage.setItem('windows', JSON.stringify(props.windowsStore));
         localStorage.setItem('canvas', JSON.stringify(props.canvasStore));
         chrome.storage.local.set('fmcpjkhoapimklbcmejelonipfafdkip', {
         windows: props.windowsStore,
         canvas : props.canvasStore
         });

         */

        //localStorage.windows = JSON.stringify(props.windowsStore);
        //localStorage.canvas = JSON.stringify(props.canvasStore);
        /*window.setLocalStorageForMultipleWindows({
         windows: props.windowsStore,
         canvas : props.canvasStore
         });*/
    }
}
App.propTypes = {
    windowsStore: PropTypes.array,
    canvasStore: PropTypes.object,
    windowActions: PropTypes.object,
    canvasActions: PropTypes.object
}
const mapStateToProps = ({windowsStore, canvasStore}) => {
    return {
        windowsStore,
        canvasStore
    };
};
const mapDispatchToProps = dispatch => ({
    windowActions: bindActionCreators(Actions.windowActions, dispatch),
    canvasActions: bindActionCreators(Actions.canvasActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
