import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dropdown, Icon} from 'semantic-ui-react'


export default class CanvasDirection extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.direction);
    }

    render() {
        this.direction = [{
            key: 'horizontal',
            text: <Icon name='resize horizontal'/>,
            content: <span><Icon name='resize horizontal'/> Horizontol Canvas</span>,
            title: 'Horizontol Canvas',
            value: 'horizontal'
        }, {
            key: 'vertical',
            text: <Icon name='resize vertical'/>,
            content: <span><Icon name='resize vertical'/> Vertical Canvas</span>,
            title: 'Vertical Canvas',
            value: 'vertical'
        }];
        return (
            <Dropdown
                item
                size="mini"
                defaultValue={this.props.direction}
                options={this.direction}
                onChange={(e, data) => {
                    this.props.setDirection(data.value);
                }}
            />
        )
    }
    componentDidMount(){
        document.addEventListener("wheel", function(e){
            if(this.props.direction == 'horizontal'){
                document.body.scrollLeft -= e.wheelDeltaY;
                document.documentElement.scrollLeft -= e.wheelDeltaY;
                e.preventDefault();
            }
        }.bind(this));
    }
}
CanvasDirection.propTypes = {
    direction: PropTypes.string,
    setDirection: PropTypes.func
}

