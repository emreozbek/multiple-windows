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

    }
    componentDidMount(){
        document.addEventListener('click', (e)=> {
            if(!this.refs.myCanvas.contains(e.target) | this.refs.myCanvas == e.target ){
                this.props.actions.window.setClickedWindow({
                    id: -1,
                    state: false
                });
            }
        })
        document.addEventListener("keydown", function (e) {
            switch (event.keyCode) {
                case 38:{
                    this.props.actions.window.setWindowPositionFromArrows({x:0, y: -1});
                    e.preventDefault();
                }break;
                case 40:{
                    this.props.actions.window.setWindowPositionFromArrows({x:0, y: 1});
                    e.preventDefault();
                }
                break;
                case 37:{
                    this.props.actions.window.setWindowPositionFromArrows({x:-1, y: 0});
                    e.preventDefault();
                }
                break;
                case 39:{
                    this.props.actions.window.setWindowPositionFromArrows({x:1, y: 0});
                    e.preventDefault();
                }
                break;
            }
        }.bind(this));
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