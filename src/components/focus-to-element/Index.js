import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dropdown, Input} from 'semantic-ui-react'


export default class FocusToElement extends Component {
    constructor(props) {
        super(props);
    }
    onChange(e) {
        if (e.charCode == 13)
            this.props.focusToElement(e.target.value);
    }
    render() {
        return (
            <Input
                placeholder="Focus #id, .class, tag"
                defaultValue={this.props.element}
                size="mini"
                icon='eye'
                onKeyPress={this.onChange.bind(this)}
                transparent
            />
        )
    }
}
FocusToElement.propTypes = {
    focusToElement : PropTypes.func,
    element : PropTypes.string
}

