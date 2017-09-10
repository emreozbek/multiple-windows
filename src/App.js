

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import 'semantic-ui-css/semantic.min.css'
import Canvas from './components/canvas/Index'
import Header from './components/header/Index'
import * as Actions from './actions'
import '../css/style.scss'


class App extends Component{
    render(){
        return(
            <div className="fit">
                <Header
                    createWindow={this.props.windowActions.createWindow}
                    store={this.props.windowsStore} />
                <Canvas
                    actions={{
                        window : this.props.windowActions,
                        canvas : this.props.canvasActions
                    }}
                    store={{
                        windows: this.props.windowsStore,
                        canvas : this.props.canvasStore
                    }} />
            </div>
        )
    }
    componentWillReceiveProps(props){
        localStorage.setItem('windows', JSON.stringify(props.windowsStore));
    }
}
App.propTypes = {
    windowsStore  : PropTypes.array,
    canvasStore   : PropTypes.object,
    windowActions : PropTypes.object,
    canvasActions : PropTypes.object
}
const mapStateToProps =  ({windowsStore, canvasStore}) => {
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
