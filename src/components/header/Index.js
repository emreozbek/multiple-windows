

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'semantic-ui-react'
import './style.scss'

export default class Header extends Component{
    static propTypes = {
        createWindow : PropTypes.func,
        store   : PropTypes.array
    }
    render(){
        return(
            <header className="header">
                <Button.Group size="small">
                    <Button basic size='small' color='green' icon='add' onClick={this.props.createWindow}></Button>
                    <Button basic size='small' color='brown' icon='mobile'></Button>
                    <Button basic size='small' color='brown' icon='tablet'></Button>
                    <Button basic size='small' color='brown' icon='laptop'></Button>
                </Button.Group>
            </header>
        )
    }
}