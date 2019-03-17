import React, { Component } from 'react'
import Button from './Button'
import './AddComment.css'

class AddEditComment extends Component {
    render() {
        return (
            <div className="Add-comment">
                <h4>Author</h4>
                <input type="text"></input>
                <h4>Body</h4>
                <textarea rows="3" cols="80" style={{marginBottom: '15px'}}></textarea>
                <Button name={'Comment'} />
            </div>
        )
    }
}

export default AddEditComment