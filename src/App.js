

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Canvas from './components/Canvas'
import {resizeWindow} from './actions/Window'
import '../css/style.scss'


class App extends Component{
    render(){
        console.log(this.props, this.props.resizeWindow, "App");
        return(
            <div>
                {this.props.width}
                <Canvas action={this.props.resizeWindow} />
            </div>
        )
    }
}
const mapStateToProps =  ({response}) => {
    return response;
};
export default connect(mapStateToProps, {resizeWindow})(App)











