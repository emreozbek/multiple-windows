

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'semantic-ui-react'
import './style.scss'

export default class Header extends Component{
    render(){
        return(
            <header className="header">
                <Button.Group size="mini">
                    <Button basic color='green' icon='add' onClick={this.props.createWindow}></Button>
                    <Button basic color='green' icon='mobile'></Button>
                    <Button basic color='green' icon='tablet'></Button>
                    <Button basic color='green' icon='laptop'></Button>
                </Button.Group>
            </header>
        )
    }
}
Header.propTypes = {
    createWindow : PropTypes.func,
    store   : PropTypes.array
}