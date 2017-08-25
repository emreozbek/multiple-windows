import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Window from '../window'
import './style.scss'

export default class Canvas extends Component{
    static propTypes = {
        actions : PropTypes.object,
        store   : PropTypes.array
    }
    constructor(props){
        super(props);
    }
    render(){
        let actions = this.props.actions;
        return(
            <div className="canvas">
                {
                    this.props.store.map(function(item){
                        return (<Window key={item.id} options={item} actions={actions} />)
                    })
                }
            </div>
        )
    }
}