

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class SizingTextbox extends Component{
    constructor(props){
        super(props);
        this.regex = /^(\d+)[x](\d+)$/;
    }
    setSize(){
        let result = this.regex.exec(this.refs.myInput.value);
        if(result != null) {
            this.props.setSize({
                width: parseInt(result[1]),
                height: parseInt(result[2])
            });
        }
    }
    render(){
        console.log(this.props.size.width + "x" + this.props.size.height);
        return(
            <input
                ref="myInput"
                type="text"
                className="sizeTextbox"
                defaultValue={this.props.size.width + "x" + this.props.size.height}
                onKeyUp={
                    (e) => {
                        if(e.keyCode == 13)
                            this.setSize(this);
                    }
                }
                onBlur={this.setSize.bind(this)}
            />
        )
    }
}
SizingTextbox.propTypes = {
    size : PropTypes.object,
    setSize : PropTypes.func
}
