


import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Window from './Window'

export default class Canvas extends Component{
    static propTypes = {
        action: PropTypes.func
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Window action={this.props.action}  />
            </div>
        )
    }
}