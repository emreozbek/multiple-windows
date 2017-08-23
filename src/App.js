

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Canvas from './components/Canvas'
import Header from './components/Header'
import * as Actions from './actions'
import '../css/style.scss'

class App extends Component{
    static propTypes = {
        windowStore   : PropTypes.array,
        windowActions : PropTypes.object
    }

    render(){
        console.log(this.props, this.props.windowsStore);
        return(
            <div>
                <Header actions={this.props.windowActions} store={this.props.windowsStore} />
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











