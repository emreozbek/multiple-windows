import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Icon, Menu, Label, Input} from 'semantic-ui-react'
import HeaderSearch from '../header-search'
import './style.scss'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    createNewWindow(obj) {
        this.props.createWindow(obj);
    }

    render() {
        return (
            <Menu icon size="small" fixed="top">
                <Menu.Item
                    name='mobile'
                    title="Add Mobile 320 x 480"
                    onClick={
                    this.createNewWindow.bind(this, {
                        name: 'Mobile',
                        size: {
                            width: 320,
                            height: 480
                        }
                    })
                }>
                    <Icon name='mobile' color="green"/>
                </Menu.Item>
                <Menu.Item
                    name='tablet'
                    title="Add Tablet 480 x 800"
                    onClick={
                    this.createNewWindow.bind(this, {
                        name: 'Tablet',
                        size: {
                            width: 480,
                            height: 800
                        }
                    })
                }>
                    <Icon name='tablet' color="green"/>
                </Menu.Item>
                <Menu.Item
                    name='laptop'
                    title="Add laptop 1366 x 768"
                    onClick={
                    this.createNewWindow.bind(this, {
                        name: 'Laptop',
                        size: {
                            width: 1366,
                            height: 768
                        }
                    })
                }>
                    <Icon name='laptop' color="green"/>
                </Menu.Item>
                <Menu.Item
                    name='desktop'
                    title="Add Desktop 1280 x 1024"
                    onClick={
                    this.createNewWindow.bind(this, {
                        name: 'desktop',
                        size: {
                            width: 1280,
                            height: 1024
                        }
                    })
                }>
                    <Icon name='desktop' color="green"/>
                </Menu.Item>
                <Menu.Item>
                    <Label basic color="grey" className="sizeInfoLabel">
                        Window Size:
                        <Label.Detail>
                            {
                                this.props.canvasStore.window.width +
                                "x" +
                                this.props.canvasStore.window.height
                            }
                        </Label.Detail>
                    </Label>
                </Menu.Item>
                <Menu.Item>
                    <Label basic color="grey" className="sizeInfoLabel">
                        Canvas Size:
                        <Label.Detail>
                            {
                                (this.props.canvasStore.window.width - this.props.canvasStore.xPosition) +
                                "x" +
                                (this.props.canvasStore.window.height - this.props.canvasStore.yPosition)
                            }
                        </Label.Detail>
                    </Label>
                </Menu.Item>
                <Menu.Menu position="right">
                    <HeaderSearch
                        url={this.props.canvasStore.url}
                        setURLALLWindows={this.props.setURLALLWindows}
                        setCanvasURL={this.props.setCanvasURL}
                    />
                    <Menu.Item
                        name="refresh"
                        title="Refresh to The All Windows"
                        onClick={ this.props.reloadAllPages.bind(this, true) }
                    >
                        <Icon name='refresh' color="blue"/>
                    </Menu.Item>
                    <Menu.Item
                        name="close"
                        title="Close to The Extension"
                    >
                        <Icon name='close' color="red"/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
Header.propTypes = {
    createWindow: PropTypes.func,
    reloadAllPages: PropTypes.func,
    setURLALLWindows: PropTypes.func,
    setCanvasURL: PropTypes.func,
    windowStore: PropTypes.array,
    canvasStore: PropTypes.object
}