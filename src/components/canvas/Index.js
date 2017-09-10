import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Window from '../window'
import './style.scss'

export default class Canvas extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.actions.canvas.setPosition({
            xPosition: this.refs.myCanvas.offsetLeft,
            yPosition: this.refs.myCanvas.offsetTop
        });
    }
    render(){
        return(
            <div className="canvas" ref="myCanvas">
                {
                    this.props.store.windows.map(function(item){
                        return (
                            <Window
                                key={item.id}
                                options={item}
                                canvas={this.props.store.canvas}
                                actions={this.props.actions.window}
                            />
                        )
                    }.bind(this))
                }
            </div>
        )
    }
}
Canvas.propTypes = {
    actions : PropTypes.object,
    store   : PropTypes.object
}