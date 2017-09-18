import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dropdown, Input} from 'semantic-ui-react'
import './style.scss'

const options = [
    {key: 0, text: 'http://', value: 'http://'},
    {key: 1, text: 'https://', value: 'https://'}
]

export default class WindowSearch extends Component {
    constructor(props) {
        super(props);
        this.splitURL(props.url);
    }

    onChange(e) {
        if (e.charCode == 13) {
            this.props.setURLMyWindow(this.refs.protocol.getSelectedItem().text + e.target.value);
        }
    }

    splitURL(url) {
        let splitted = url.split('http://');
        if (splitted.length > 1)
            this.protocol = 'http://';
        else
            this.protocol = 'https://';
        this.url = splitted[1];
    }

    changedProtocol(e, data) {
        this.props.setURLMyWindow(data.value + this.refs.mySearchInput.inputRef.value);
    }

    componentWillReceiveProps(props) {
        this.splitURL(props.url);
    }

    render() {
        return (
            <Dropdown simple button icon='search' className='icon'>
                <Dropdown.Menu>
                    <Input
                        ref="mySearchInput"
                        label={
                                <Dropdown
                                    simple
                                    ref="protocol"
                                    defaultValue={this.protocol}
                                    options={options}
                                    onChange={this.changedProtocol.bind(this)} />
                            }
                        labelPosition="left"
                        placeholder="enter domain"
                        name='search'
                        icon='search'
                        defaultValue={this.url}
                        onKeyPress={this.onChange.bind(this)}/>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
WindowSearch.propTypes = {
    url: PropTypes.string,
    setURLMyWindow: PropTypes.func
}