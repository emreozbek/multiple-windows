

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import './style.scss'

export default class Header extends Component{
    constructor(props){
        super(props);

    }
    createNewWindow(obj){
        this.props.createWindow(obj);
    }
    render(){
        return(
            <header className="header">
                <Button.Group size="tiny">
                    <Button
                        basic
                        color='grey'
                        icon='mobile'
                        title="Mobile"
                        onClick = {
                            this.createNewWindow.bind(this, {
                                name: 'Mobile',
                                size: {
                                    width: 320,
                                    height: 480
                                }
                            })
                        } />
                    <Button
                        basic
                        color='grey'
                        icon='tablet'
                        title="Tablet"
                        onClick = {
                            this.createNewWindow.bind(this, {
                                name: 'Tablet',
                                size: {
                                    width: 480,
                                    height: 800
                                }
                            })
                        } />
                    <Button
                        basic
                        color='grey'
                        icon='laptop'
                        title="Laptop"
                        onClick = {
                            this.createNewWindow.bind(this, {
                                name: 'Laptop',
                                size: {
                                    width: 1366,
                                    height: 468
                                }
                            })
                        } />
                    <Button
                        basic
                        color='grey'
                        icon='desktop'
                        title="Desktop"
                        onClick = {
                            this.createNewWindow.bind(this, {
                                name: 'Laptop',
                                size: {
                                    width: 1280,
                                    height: 1024
                                }
                            })
                        } />
                </Button.Group>
                <Button.Group floated="right" size="tiny" >
                    <Button
                        basic
                        color='grey'
                        icon='refresh'
                        title="Refresh to All Windows"
                        />
                    <Button
                        basic
                        color='grey'
                        icon='close'
                        title="Refresh to All Windows"
                        />
                </Button.Group>
            </header>
        )
    }
}
Header.propTypes = {
    createWindow : PropTypes.func,
    store   : PropTypes.array
}