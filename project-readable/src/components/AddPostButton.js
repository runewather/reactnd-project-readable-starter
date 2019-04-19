import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FaPlusCircle } from 'react-icons/fa'
import './AddPostButton.css'

class AddPostButton extends Component {
    render() {
        return (
            <Fragment>
                <Link to={'/post/add'} style={ { textDecoration: 'none', color: 'black'} } >
                    <FaPlusCircle className='Add-post-button' />
                </Link>
            </Fragment>
        )        
    }
}

export default AddPostButton