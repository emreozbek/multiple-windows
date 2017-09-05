

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'semantic-ui-react'
import './style.scss'
export default class Options extends Component{
    static propTypes = {
        options : PropTypes.object,
        actions : PropTypes.object
    }
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return(
            <div className="options">
                <Button.Group size="mini" floated="right">
                    <Button basic size='mini' color='green'>{this.props.options.size.width + " x " + this.props.options.size.height}</Button>
                    <Button size='mini' basic color='yellow' icon='terminal'></Button>
                    <Button size='mini' basic color='yellow' icon='refresh'></Button>
                    <Button size='mini' basic color='yellow' icon='close' onClick={() => {this.props.actions.removeWindow(this.props.options.id)}}></Button>
                </Button.Group>
            </div>
        )
    }
}