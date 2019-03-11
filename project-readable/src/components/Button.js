import React, { Component, } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

class Button extends Component {
    render() {
        return (
            <div style={{display: 'inline'}}>
                <Link style={ {'textDecoration' : 'none'} } to={'/'}>
                    <div className="Button">
                        {this.props.name}
                    </div>
                </Link>
            </div>            
        )
    }
}

export default Button