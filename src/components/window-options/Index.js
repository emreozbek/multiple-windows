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
        this.responsive = 420;
    }
    reverseToSizes(){
        this.props.setSize({
            width: this.props.options.size.height,
            height: this.props.options.size.width
        })
    }
    fullScreen(){
        this.props.fullScreen(!this.props.options.fullScreen);
    }
    render() {
        this.menuList = [{
            icon : 'maximize',
            title : 0
        },{
            title: 1
        },{
            icon : "retweet",
            onClick : this.reverseToSizes.bind(this),
            title : 'Reverse to Sizes',
            loading : false
        },{
            icon : "refresh",
            onClick : this.props.reloadPage,
            title : 'Refresh Window',
            loading : this.props.loadingIcon
        },{
            icon : 'window ' + (this.props.options.fullScreen ? 'minimize' : 'maximize'),
            onClick : this.fullScreen.bind(this),
            title : 'Full Screen',
            loading : false
        },{
            icon : 'close',
            onClick : this.props.removeWindow,
            title : 'Remove to Window',
            loading : false
        }]
        return (
            <div className="options">
                <Menu size="mini" icon inverted
                      color={this.props.options.clicked ? 'yellow' : 'black'}>
                    <WindowMove
                        canvas={this.props.canvas}
                        startDrag={this.props.startDrag}
                        stopDrag={this.props.stopDrag}
                        setPosition={this.props.setPosition}
                        fullScreenState={this.props.options.fullScreen}
                        fullScreen={this.props.fullScreen}
                    />
                    <Menu.Item>
                        <WindowName
                            name={this.props.options.name}
                            setWindowName={this.props.setWindowName}
                            clicked={this.props.options.clicked}
                        />
                    </Menu.Item>
                    <Menu.Menu position='right' className={this.props.options.size.width <= this.responsive ? 'hideClass' : ''}>
                        {
                            this.menuList.map(function (item, index) {
                                switch (item.title){
                                    case 0: {
                                        return <Menu.Item key={index}><SizingTextbox size={{ width: this.props.options.size.width, height: this.props.options.size.height }} setSize={this.props.setSize} /></Menu.Item>
                                    } break;
                                    case 1: {
                                        return (
                                            <Dropdown key={index} item icon='search' simple>
                                                <Dropdown.Menu>
                                                    <WindowSearch
                                                        key={index}
                                                        url={this.props.options.url}
                                                        setURLMyWindow={this.props.setURLMyWindow}
                                                        cloneToAllWindows={this.props.cloneToAllWindows}
                                                    />
                                                </Dropdown.Menu>
                                            </Dropdown>);
                                    } break;
                                    default : {
                                        return (
                                            <Menu.Item key={index} title={item.title} onClick={item.onClick}>
                                                <Icon key={index} name={item.icon} loading={item.loading} />
                                            </Menu.Item>);
                                    }break;
                                }
                            }.bind(this))
                        }
                    </Menu.Menu>
                    <Menu.Menu position='right' className={this.props.options.size.width <= this.responsive ? '' : 'hideClass'}>
                        <Dropdown item icon='search' simple>
                            <Dropdown.Menu>
                                <WindowSearch
                                    url={this.props.options.url}
                                    setURLMyWindow={this.props.setURLMyWindow}
                                    cloneToAllWindows={this.props.cloneToAllWindows}
                                />
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown.Item text={<SizingTextbox size={{ width: this.props.options.size.width, height: this.props.options.size.height }} setSize={this.props.setSize} />} />
                        <Dropdown simple item icon="content">
                            <Dropdown.Menu>
                                {
                                    this.menuList.map(function (item, index) {
                                        switch (item.title){
                                            case 0:
                                            case 1: return false; break;
                                            default : {
                                                return <Dropdown.Item key={index} icon={item.icon} text={item.title} onClick={item.onClick} />
                                            }break;
                                        }
                                    }.bind(this))
                                }
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
    cloneToAllWindows: PropTypes.func,
    canvas: PropTypes.object,
    loadingIcon: PropTypes.bool
}