
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Nav, NavItem} from 'react-bootstrap'


export default class Header extends Component{
    static propTypes = {
        actions : PropTypes.object,
        store   : PropTypes.array
    }
    render(){
        return(
            <Nav bsStyle="pills" activeKey={1} onSelect={() => {this.props.actions.createNewWindow()}}>
                <NavItem eventKey={1} href="/home">Add Window</NavItem>
            </Nav>
        )
    }
}