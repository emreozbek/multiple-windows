

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
    static propTypes = {
        windowStore   : PropTypes.array,
        windowActions : PropTypes.object
    }

    render(){
        return(
            <div className="fit">
                <Header
                    createWindow={this.props.windowActions.createWindow}
                    store={this.props.windowsStore} />
                <Canvas actions={this.props.windowActions} store={this.props.windowsStore} />
            </div>
        )
    }
}
const mapStateToProps =  ({windowsStore}) => {
    return {
        windowsStore
    };
};
const mapDispatchToProps = dispatch => ({
    windowActions: bindActionCreators(Actions.windowActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App)











