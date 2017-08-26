

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'semantic-ui-react'
import './style.scss'
export default class Options extends Component{
    static propTypes = {
        options : PropTypes.object
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="options">
                <Button.Group size="mini">
                    <Button basic size='mini' color='green'>{this.props.options.size.width + " x " + this.props.options.size.height}</Button>
                    <Button size='mini' basic color='brown' icon='mobile'></Button>
                    <Button size='mini' basic color='brown' icon='tablet'></Button>
                    <Button size='mini' basic color='brown' icon='laptop'></Button>
                </Button.Group>
            </div>
        )
    }
}