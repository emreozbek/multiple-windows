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
            this.props.setURLMyWindow({
                url: this.refs.protocol.getSelectedItem().text + e.target.value,
                reload: true
            });
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
        this.props.setURLMyWindow({
            url : data.value + this.refs.mySearchInput.inputRef.value,
            reload: true
        });
    }

    componentWillReceiveProps(props) {
        this.splitURL(props.url);
        this.refs.mySearchInput.inputRef.value = this.url;
    }
    setURL(){
        this.props.cloneToAllWindows(this.refs.protocol.getSelectedItem().text + this.refs.mySearchInput.inputRef.value);
    }
    render() {
        return (
                <Input
                    placeholder="enter domain"
                    size="tiny"
                    ref="mySearchInput"
                    icon='search'
                    className='search windowSearch'
                    defaultValue={this.url}
                    onKeyPress={this.onChange.bind(this)}
                    label={
                        <Dropdown
                            simple
                            className="protocolDropdown"
                            ref="protocol"
                            defaultValue={this.protocol}
                            options={options}
                            onChange={this.changedProtocol.bind(this)} />
                    }
                    action={{
                        className:'cloneButton',
                        size: 'mini',
                        color: 'green',
                        icon: 'check',
                        title: 'Apply To All Windows',
                        onClick: this.setURL.bind(this)
                    }}
                />
        )
    }
}
WindowSearch.propTypes = {
    url: PropTypes.string,
    setURLMyWindow: PropTypes.func,
    cloneToAllWindows: PropTypes.func
}

