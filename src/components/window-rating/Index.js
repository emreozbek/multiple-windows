
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button,Popup } from 'semantic-ui-react'
import './style.scss'


export default class WindowRating extends Component {
    constructor(props) {
        super(props);
        this.state = {ratio : 100};
    }
    changed(e){
        this.setState({ratio: e.target.value});
    }
    render(){
        return(
            <Popup
                size="mini"
                trigger={
                    <Button
                        basic
                        size='mini'
                        color='grey'
                        content={(this.state.ratio/100).toFixed(2)}
                        icon='zoom' />
                }
                content={
                    <input type='range' min={0} max={100} value={this.state.ratio} onChange={this.changed.bind(this)}  />
                    }
                on='click'
            />
        )
    }
}
WindowRating.propTypes = {

}