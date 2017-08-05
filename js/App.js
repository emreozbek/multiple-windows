

import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AllActions from './actions'
import Header from './Header'
import Canvas from './Canvas'
import '../css/style.scss'

const App = ({window, actions}) => (
    <div>
        <Header />
        <Canvas reducer={window} actions={actions} />
    </div>
)

App.propTypes = {
    window: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}
/*
const mapStateToProps = state => ({
    window: state.windowReducer
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AllActions, dispatch)
})
*/
const mapStateToProps = function (state) {
    console.log(state);
    return {
        window: state.window
    }
}

const mapDispatchToProps = function (dispatch) {
    console.log(dispatch);
    return {
        actions: bindActionCreators(AllActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)











