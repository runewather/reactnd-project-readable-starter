import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import './Button.css'

class Button extends Component {
    render() {
        return (
            <div style={{display: 'inline'}} onClick={this.props.action}>
                <div className="Button">
                    {this.props.name}
                </div>
            </div>            
        )
    }
}

Button.propTypes = {
    action : PropTypes.func,
    name : PropTypes.string
}

export default Button