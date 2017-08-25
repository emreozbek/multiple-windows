

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Nav, NavItem} from 'react-bootstrap'


export default class Header extends Component{
    static propTypes = {
        createWindow : PropTypes.func,
        store   : PropTypes.array
    }
    render(){
        return(
            <Nav bsStyle="pills" activeKey={1} onSelect={() => {this.props.createWindow()}}>
                <NavItem eventKey={1} href="#">Add Window</NavItem>
            </Nav>
        )
    }
}