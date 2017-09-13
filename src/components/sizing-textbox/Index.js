

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class SizingTextbox extends Component{
    constructor(props){
        super(props);
        this.regex = /^(\d+)[x](\d+)$/;
        this._completeSizing = this.completeSizing.bind(this);
        this.state = {
            change : false
        };
    }
    completeSizing(e){
        if(e.target != this.refs.myInput){
            this.setState({change: false});
            document.removeEventListener('mousedown', this._completeSizing);
        }
    }
    setSize(e){
        if(e.keyCode == 13)
            document.dispatchEvent(new CustomEvent('mousedown'));
        else{
            let result = this.regex.exec(this.refs.myInput.value);
            if(result != null) {
                this.props.setSize({
                    width: parseInt(result[1]),
                    height: parseInt(result[2])
                });
            }else
                document.dispatchEvent(new CustomEvent('mousedown'));
        }
    }
    render(){
        return(
            <span>
                <input
                    ref="myInput"
                    type="text"
                    className={"sizeTextbox " + (this.state.change ? '' : 'hidden')}
                    defaultValue={this.props.size.width + "x" + this.props.size.height}
                    onKeyUp={
                        (e) => {
                            if(e.keyCode == 13)
                                this.setSize(this);
                        }
                    }
                    onBlur={this.setSize.bind(this)}
                />
                <label
                    className={this.state.change ? 'hidden' : ''}
                    onClick={
                        () => {
                            this.setState({change: true});
                            this.refs.myInput.value = this.props.size.width + "x" + this.props.size.height;
                            setTimeout(() => {
                                this.refs.myInput.focus();
                            }, 10);
                            document.addEventListener('mousedown', this._completeSizing);
                        }
                    }
                >
                    {this.props.size.width + "x" + this.props.size.height}
                </label>
            </span>
        )
    }
}
SizingTextbox.propTypes = {
    size : PropTypes.object,
    setSize : PropTypes.func
}
