import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Window from '../window'
import './style.scss'

export default class Canvas extends Component{
    constructor(props){
        super(props);
        this.state = {
            sizing: false
        };
        console.log(props);
    }
    componentDidMount(){
        this.props.actions.canvas.setPosition({
            xPosition: this.refs.myCanvas.offsetLeft,
            yPosition: this.refs.myCanvas.offsetTop
        });
        document.addEventListener('click', (e)=> {
            if(!this.refs.myCanvas.contains(e.target) | this.refs.myCanvas == e.target ){
                this.props.actions.window.setClickedWindow({
                    id: -1,
                    state: false
                });
            }
        })
    }
    sizingOnCanvas(state){
        this.setState({sizing: state});
    }
    cloneToAllWindows(url){
        this.props.actions.window.setURLALLPages(url);
        this.props.actions.canvas.setURL(url);
    }
    render(){
        return(
            <div className="canvas" ref="myCanvas">
                <div className="sizingOnCanvas" style={{display: (this.state.sizing ? 'block' : 'none')}}></div>
                {
                    this.props.store.windows.map(function(item){
                        return (
                            <Window
                                key={item.id}
                                options={item}
                                canvas={this.props.store.canvas}
                                actions={{...this.props.actions.window, cloneToAllWindows: this.cloneToAllWindows.bind(this)}}
                                sizingOnCanvas={this.sizingOnCanvas.bind(this)}
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