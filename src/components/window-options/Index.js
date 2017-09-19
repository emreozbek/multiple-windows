import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Menu, Icon, Dropdown} from 'semantic-ui-react'
import WindowName from '../window-name'
import WindowMove from '../window-move'
import SizingTextbox from '../sizing-textbox'
import WindowSearch from '../window-search'
import './style.scss'

export default class Options extends Component {
    constructor(props) {
        super(props);
        this.responsive = 380;
    }
    render() {
        return (
            <div className="options">
                <Menu size="mini" icon inverted className={this.props.options.size.width < this.responsive ? 'hideClass' : ''}>
                    <WindowMove
                        canvas={this.props.canvas}
                        startDrag={this.props.startDrag}
                        stopDrag={this.props.stopDrag}
                        setPosition={this.props.setPosition}
                        fullScreenState={this.props.options.fullScreen}
                        fullScreen={this.props.fullScreen}
                    />
                    <Menu.Item >
                        <WindowName
                            name={this.props.options.name}
                            setWindowName={this.props.setWindowName}/>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item >
                            <SizingTextbox
                                size={{
                                    width: this.props.options.size.width,
                                    height: this.props.options.size.height
                                }}
                                setSize={this.props.setSize}
                            />
                        </Menu.Item>
                        <WindowSearch
                            url={this.props.options.url}
                            setURLMyWindow={this.props.setURLMyWindow}
                        />
                        <Menu.Item onClick={this.props.reloadPage}>
                            <Icon name="refresh" loading={this.props.loadingIcon}/>
                        </Menu.Item>
                        <Menu.Item onClick={() => {this.props.fullScreen(!this.props.options.fullScreen)}}>
                            <Icon name={'window ' + (this.props.options.fullScreen ? 'minimize' : 'maximize')}/>
                        </Menu.Item>
                        <Menu.Item position='right' onClick={this.props.removeWindow}>
                            <Icon name="close"/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Menu size="mini" icon inverted className={this.props.options.size.width > this.responsive ? 'hideClass' : 'responsiveMenu'}>
                    <Menu.Menu position='right'>
                        <WindowMove
                            canvas={this.props.canvas}
                            startDrag={this.props.startDrag}
                            stopDrag={this.props.stopDrag}
                            setPosition={this.props.setPosition}
                            fullScreenState={this.props.options.fullScreen}
                            fullScreen={this.props.fullScreen}
                        />
                        <Dropdown simple item icon="content">
                            <Dropdown.Menu>
                                <Dropdown.Item icon='close' text='Remove Window' onClick={this.props.removeWindow}/>
                                <Dropdown.Item icon='window maximize' text='Full Screen'
                                               onClick={() => {this.props.fullScreen(!this.props.options.fullScreen)}}/>
                                <Dropdown.Item icon='refresh' text='Refresh Frame' onClick={this.props.reloadPage}/>
                                <Dropdown.Item>
                                    <SizingTextbox
                                        size={{
                                    width: this.props.options.size.width,
                                    height: this.props.options.size.height
                                }}
                                        setSize={this.props.setSize}
                                    />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
Options.propTypes = {
    options: PropTypes.object,
    removeWindow: PropTypes.func,
    reloadPage: PropTypes.func,
    startDrag: PropTypes.func,
    stopDrag: PropTypes.func,
    setPosition: PropTypes.func,
    setWindowName: PropTypes.func,
    setSize: PropTypes.func,
    fullScreen: PropTypes.func,
    setURLMyWindow: PropTypes.func,
    canvas: PropTypes.object,
    loadingIcon: PropTypes.bool
}
