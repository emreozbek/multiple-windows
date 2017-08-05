

import React, {Component} from 'react';
import { createStore } from 'redux'
import Window from '../reducers/Window'

const store = createStore(Window)



export default class Options extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="options">
                <div className="sizeInfo">{store.getState().width + " x " + store.getState().height}</div>
            </div>
        )
    }
}