


import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Window from './Window'

export default class Canvas extends Component{
    static propTypes = {
        actions : PropTypes.object,
        store   : PropTypes.array
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="canvas">
                {
                    this.props.store.map(function(item){
                        return (<Window key={item.id} options={item} />)
                    })
                }
            </div>
        )
    }
}