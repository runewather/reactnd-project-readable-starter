import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
    render() {
        return (
            <div style={{display: "inline"}}>
                <a style={{textDecoration: 'none'}} href="">
                    <div className="Button">
                        {this.props.name}
                    </div>
                </a>
            </div>            
        )
    }
}

export default Button