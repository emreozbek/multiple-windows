import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dropdown, Icon, Checkbox} from 'semantic-ui-react'


export default class ScrollControl extends Component {
    constructor(props) {
        super(props);
    }
    changedOption(e, data){
        this.props.setScrollControl({
            type: data.name,
            checked: data.checked
        });
    }
    render() {
        return (
            <Dropdown text='Scroll Control' pointing className='link item'>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Checkbox name="apply" label={<label>Apply scroll to all windows</label>} defaultChecked={this.props.applyScroll} onChange={this.changedOption.bind(this)} />
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <Checkbox name="keep" label={<label>Keep last scroll position</label>} defaultChecked={this.props.keepScroll} onChange={this.changedOption.bind(this)} />
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
ScrollControl.propTypes = {
    keepScroll: PropTypes.bool,
    applyScroll: PropTypes.bool,
    setScrollControl: PropTypes.func
}

