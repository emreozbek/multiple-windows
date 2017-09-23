import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dropdown, Icon, Menu, Label} from 'semantic-ui-react'
import HeaderSearch from '../header-search'
import './style.scss'

const menuList = [{
    icon: 'mobile',
    title: "Mobile",
    resolutions : [
        { width: 240, height: 320, title: 'Mobile 1'},
        { width: 320, height: 480, title: 'Mobile 2'},
        { width: 360, height: 600, title: 'Mobile 3'},
        { width: 480, height: 800, title: 'Mobile 4'},
        { width: 320, height: 568, title: 'Iphone 5'},
        { width: 375, height: 667, title: 'Iphone 6/6S'},
        { width: 414, height: 736, title: 'Iphone 6Plus/6SPlus'},
        { width: 375, height: 667, title: 'Iphone 7'},
        { width: 414, height: 736, title: 'Iphone 7 Plus'},
    ]
},{
    icon: 'tablet',
    title: "Tablet",
    resolutions : [
        { width: 320, height: 568, title: 'Ipod Touch'},
        { width: 600, height: 960, title: 'Nexus 7'},
        { width: 768, height: 1024, title: 'Ipad Air 1-2/Mini-1-2-3|Nexus 9'},
        { width: 800, height: 1280, title: 'Samsung Galaxy Tab 10'},
        { width: 850, height: 1280, title: 'Chromebook Pixel'},
        { width: 1024, height: 1366, title: 'Ipad Pro'}
    ]
},{
    icon: 'laptop',
    title: "Laptop",
    resolutions : [
        { width: 800, height: 600, title: '12"'},
        { width: 1024, height: 768, title: '12",13.3",14",15"'},
        { width: 1280, height: 800, title: '15.4″, 14.1″, 13.3, 12.1″'},
        { width: 1440, height: 900, title: '14″'},
        { width: 1280, height: 1024, title: '14″, 15″, 15.7″'},
        { width: 1400, height: 1050, title: '12.1″, 14″, 15″'},
        { width: 1680, height: 1050, title: '15.4″'},
        { width: 1600, height: 1200, title: '14″, 15″, 16″'},
        { width: 1920, height: 1200, title: '17″, 15.4″'},
    ]
},{
    icon: 'desktop',
    title: "Desktop",
    resolutions : [
        { width: 1440, height: 900, title: '19"'},
        { width: 1280, height: 1024, title: '19"'},
        { width: 1600, height: 900, title: '20"'},
        { width: 1680, height: 1050, title: '22"'},
        { width: 1920, height: 1080, title: '23"'},
        { width: 1920, height: 1200, title: '24"'}
    ]
},{
    icon: 'tv',
    title: "TV",
    resolutions : [
        { width: 1920, height: 1080, title: 'Full HD'},
        { width: 2560, height: 1440, title: 'Quad HD'},
        { width: 3840, height: 2160, title: 'Ultra HD'}
    ]
}];



export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    createNewWindow(obj) {
        obj.url = this.props.canvasStore.url;
        obj.position = {
            x: 10,
            y: window.scrollY + 10
        };
        this.props.createWindow(obj);
    }
    render() {
        return (
            <Menu icon size="small" fixed="top">
                {
                    menuList.map(function (item, index) {
                        return (<Dropdown key={index} icon={item.icon} className='icon green' item selectOnBlur>
                            <Dropdown.Menu key={index}>
                                {
                                    item.resolutions.map(function (list, i) {
                                        return (
                                            <Dropdown.Item
                                                key={i}
                                                text={list.width + " x " + list.height}
                                                title={list.title}
                                                onClick={
                                                    this.createNewWindow.bind(this, {
                                                        name: item.title,
                                                        size: {
                                                            width: list.width,
                                                            height: list.height
                                                        }
                                                    })
                                                }
                                            />)
                                    }.bind(this))
                                }
                            </Dropdown.Menu>
                        </Dropdown>)
                    }.bind(this))
                }
                <Menu.Item>
                    <Label basic color="grey" className="sizeInfoLabel">
                        Window Size:
                        <Label.Detail> { this.props.canvasStore.window.width + "x" + this.props.canvasStore.window.height } </Label.Detail>
                    </Label>
                </Menu.Item>
                <Menu.Item>
                    <Label basic color="grey" className="sizeInfoLabel">
                        Canvas Size:
                        <Label.Detail> { (this.props.canvasStore.window.width - this.props.canvasStore.xPosition) + "x" + (this.props.canvasStore.window.height - this.props.canvasStore.yPosition) }
                        </Label.Detail>
                    </Label>
                </Menu.Item>
                <Menu.Item>
                    <Label basic color="grey" className="sizeInfoLabel">
                        Total Window(s):
                        <Label.Detail>{ this.props.windowStore.length }</Label.Detail>
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